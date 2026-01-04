import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send, Calendar, Phone, Loader2, ArrowRight, User, Mail, Building } from "lucide-react";
import { useVisitorScoring } from "@/hooks/useVisitorScoring";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

type Message = { role: "user" | "assistant"; content: string };

interface GregoAction {
  type: "navigate" | "book_call" | "collect_info" | "offer_callback" | "show_popup";
  url?: string;
  fields?: string[];
  offer?: string;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/grego-chat`;

const GregoChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [contactFields, setContactFields] = useState<string[]>([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "" });
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { 
    score, 
    canEngage, 
    trackChatOpen, 
    getOpeningMessage,
    getRecommendedPage,
    getBookingUrl,
    visitorIntent,
    visitorData,
    setContactInfo
  } = useVisitorScoring();

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // AUTO-OPEN when conditions are met (30 seconds + score >= 40)
  useEffect(() => {
    if (canEngage && score.shouldEngage && !hasAutoOpened && !isOpen) {
      const opener = getOpeningMessage();
      if (opener) {
        console.log("GREGO auto-activating: score", score.total, "intent", score.intent);
        setHasAutoOpened(true);
        
        // Auto-open after short delay for smooth UX
        const timer = setTimeout(() => {
          setIsOpen(true);
          trackChatOpen();
          setMessages([{ role: "assistant", content: opener }]);
        }, 500);
        
        return () => clearTimeout(timer);
      }
    }
  }, [canEngage, score.shouldEngage, hasAutoOpened, isOpen, getOpeningMessage, trackChatOpen, score.total, score.intent]);

  // Parse actions from GREGO's responses
  const parseActions = useCallback((content: string): GregoAction[] => {
    const actions: GregoAction[] = [];
    const actionRegex = /\[ACTION\](.*?)\[\/ACTION\]/g;
    let match;
    
    while ((match = actionRegex.exec(content)) !== null) {
      try {
        const action = JSON.parse(match[1]);
        actions.push(action);
      } catch (e) {
        console.error("Failed to parse GREGO action:", e);
      }
    }
    
    return actions;
  }, []);

  // Execute GREGO actions
  const executeAction = useCallback((action: GregoAction) => {
    console.log("Executing GREGO action:", action);
    
    switch (action.type) {
      case "navigate":
        if (action.url) {
          if (action.url.startsWith("http")) {
            window.open(action.url, "_blank");
          } else {
            navigate(action.url);
            toast({
              title: "Taking you there...",
              description: `Navigating to ${action.url}`,
            });
          }
        }
        break;
        
      case "book_call":
        window.open(action.url || getBookingUrl(), "_blank");
        toast({
          title: "Opening calendar...",
          description: "Book your strategy call with Gregory",
        });
        break;
        
      case "collect_info":
        setContactFields(action.fields || ["name", "email"]);
        setShowContactForm(true);
        break;
        
      case "offer_callback":
        setShowCallbackForm(true);
        break;
        
      case "show_popup":
        // Could trigger a special offer popup
        if (action.offer === "website_discount") {
          navigate("/web");
          toast({
            title: "Special Offer Unlocked! 🎉",
            description: "Check out our website packages with exclusive pricing",
          });
        }
        break;
    }
  }, [navigate, getBookingUrl, toast]);

  // Clean display text (remove action tags)
  const cleanDisplayText = (content: string): string => {
    return content.replace(/\[ACTION\].*?\[\/ACTION\]/g, '').trim();
  };

  const handleOpen = () => {
    setIsOpen(true);
    trackChatOpen();
    
    if (messages.length === 0) {
      const opener = getOpeningMessage();
      if (opener && score.total >= 25) {
        setMessages([{ role: "assistant", content: opener }]);
      } else {
        const recommendation = getRecommendedPage();
        setMessages([{ 
          role: "assistant", 
          content: `👋 Welcome! I'm Grego, your NLG Consulting guide. ${recommendation ? `Based on what I see, you might be interested in our ${recommendation.label}. ` : ''}What brings you here today?`
        }]);
      }
    }
  };

  const streamChat = async (userMessages: Message[]) => {
    setIsLoading(true);
    let assistantContent = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ 
          messages: userMessages,
          visitorContext: {
            intent: visitorIntent,
            score: score.total,
            engagementLevel: score.engagementLevel,
            visitorData: {
              device: visitorData.device,
              country: visitorData.country,
              language: visitorData.language,
              timezone: visitorData.timezone,
              referrer: visitorData.referrer,
              pageViews: visitorData.pageViews,
              isReturning: visitorData.isReturning,
              name: visitorData.name,
              email: visitorData.email,
              phone: visitorData.phone,
              company: visitorData.company
            }
          },
          contactInfo: {
            name: visitorData.name,
            email: visitorData.email,
            phone: visitorData.phone,
            company: visitorData.company
          }
        }),
      });

      if (!resp.ok || !resp.body) {
        throw new Error("Failed to start stream");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = { role: "assistant", content: assistantContent };
                return newMessages;
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Parse and execute any actions in the response
      const actions = parseActions(assistantContent);
      for (const action of actions) {
        // Small delay before executing actions for better UX
        setTimeout(() => executeAction(action), 1000);
      }
      
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I apologize, I'm having a moment. Let me connect you directly – you can book a call with Gregory here: https://calendly.com/greg-nlgconsulting/15min" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    await streamChat(newMessages.slice(1));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleContactSubmit = async () => {
    // Update visitor data
    setContactInfo(formData);
    
    // Add thank you message
    setMessages(prev => [...prev, {
      role: "assistant",
      content: `Perfect, thanks ${formData.name || 'for that'}! I've got your details. Now let me help you find exactly what you need. What's your biggest priority right now – launching a website, scaling sales, or getting strategic guidance?`
    }]);
    
    setShowContactForm(false);
    
    // Send to backend
    try {
      await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ 
          action: "save_lead",
          contactInfo: formData,
          visitorContext: {
            intent: visitorIntent,
            score: score.total,
            engagementLevel: score.engagementLevel,
            visitorData
          }
        }),
      });
    } catch (e) {
      console.error("Failed to save contact:", e);
    }
  };

  const handleCallbackRequest = async () => {
    if (!formData.phone) return;
    
    setContactInfo(formData);
    
    setMessages(prev => [...prev, {
      role: "assistant", 
      content: `Got it! We'll call you back at ${formData.phone} shortly. Is there anything specific you'd like to discuss on the call?`
    }]);
    
    setShowCallbackForm(false);
    
    toast({
      title: "Callback Requested! 📞",
      description: "We'll call you back very soon.",
    });
    
    // Save callback request
    try {
      await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ 
          action: "save_lead",
          contactInfo: { ...formData, callback_requested: true },
          visitorContext: {
            intent: visitorIntent,
            score: score.total,
            engagementLevel: score.engagementLevel,
            visitorData
          }
        }),
      });
    } catch (e) {
      console.error("Failed to save callback:", e);
    }
  };

  // Send summary when closing chat
  const handleClose = async () => {
    setIsOpen(false);
    
    if (messages.length > 1) {
      try {
        await fetch(CHAT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ 
            sendSummary: true,
            messages,
            contactInfo: {
              name: visitorData.name,
              email: visitorData.email,
              phone: visitorData.phone,
              company: visitorData.company
            },
            visitorContext: {
              intent: visitorIntent,
              score: score.total,
              engagementLevel: score.engagementLevel,
              visitorData
            }
          }),
        });
      } catch (e) {
        console.error("Failed to send summary:", e);
      }
    }
  };

  const recommendedPage = getRecommendedPage();

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => isOpen ? handleClose() : handleOpen()}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat with Grego"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <img 
              src="/favicon.svg" 
              alt="Grego" 
              className="w-8 h-8 rounded-full"
            />
            {(score.shouldEngage && !hasAutoOpened) && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
            )}
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-120px)] flex flex-col shadow-2xl border-2 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center overflow-hidden">
                <img src="/favicon.svg" alt="Grego" className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Grego</h3>
                <p className="text-xs opacity-80">NLG Consulting AI Guide</p>
              </div>
              <div className="text-xs opacity-60">
                {score.total > 0 && `${score.intent} • ${score.total}pts`}
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted rounded-bl-md"
                    }`}
                  >
                    {cleanDisplayText(msg.content) || (isLoading && i === messages.length - 1 && (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs min-w-[100px]"
              onClick={() => window.open(getBookingUrl(), "_blank")}
            >
              <Calendar className="w-3 h-3 mr-1" />
              Book Call
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs min-w-[100px]"
              onClick={() => setShowCallbackForm(true)}
            >
              <Phone className="w-3 h-3 mr-1" />
              Call Me Back
            </Button>
            {recommendedPage && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs min-w-[100px]"
                onClick={() => navigate(recommendedPage.url)}
              >
                <ArrowRight className="w-3 h-3 mr-1" />
                {recommendedPage.label.split(' ')[0]}
              </Button>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                size="icon"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Contact Collection Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Let's get to know you better</DialogTitle>
            <DialogDescription>
              Share your details so I can personalize your experience
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {contactFields.includes("name") && (
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" /> Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                />
              </div>
            )}
            {contactFields.includes("email") && (
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="you@company.com"
                />
              </div>
            )}
            {contactFields.includes("phone") && (
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+1 234 567 890"
                />
              </div>
            )}
            {contactFields.includes("company") && (
              <div className="space-y-2">
                <Label htmlFor="company" className="flex items-center gap-2">
                  <Building className="w-4 h-4" /> Company
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Your company"
                />
              </div>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowContactForm(false)}>
              Skip
            </Button>
            <Button onClick={handleContactSubmit}>
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Callback Request Dialog */}
      <Dialog open={showCallbackForm} onOpenChange={setShowCallbackForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request a Callback</DialogTitle>
            <DialogDescription>
              Leave your number and we'll call you back shortly
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="callback-name">Name</Label>
              <Input
                id="callback-name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="callback-phone">Phone Number *</Label>
              <Input
                id="callback-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+1 234 567 890"
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowCallbackForm(false)}>
              Cancel
            </Button>
            <Button onClick={handleCallbackRequest} disabled={!formData.phone}>
              Request Callback
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GregoChatbot;
