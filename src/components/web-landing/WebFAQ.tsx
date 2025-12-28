import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WebFAQ = () => {
  const faqs = [
    {
      question: "Is the payment secure?",
      answer: "Yes, all payments are processed by Stripe, the world leader in online payments. Your banking data is encrypted according to PCI-DSS standards and is never stored on our servers. You automatically receive an invoice after each payment.",
    },
    {
      question: "What happens after the deposit?",
      answer: "Upon receiving your deposit, we contact you within 24 hours to schedule a 30-minute brief. Then, we begin creating your website. You receive a first version within a few days, followed by adjustments before final delivery.",
    },
    {
      question: "Do I own the website?",
      answer: "Absolutely. After full payment, you become 100% owner of your website. We systematically provide you with the complete source code. You are free to host, modify, or transfer your site as you wish, without any technical dependency.",
    },
    {
      question: "Is SEO included?",
      answer: "Yes, all our packages include an optimized SEO structure with unique meta titles and meta descriptions for each page, as well as Google indexing. The Intermediate Pack offers advanced SEO with additional features.",
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes, you can use your own domain name. Domain and DNS setup is included in all our packages. If you don't have a domain yet, we can advise you on the best options.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know before getting started
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 data-[state=open]:border-primary/50 data-[state=open]:shadow-xl"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6 [&[data-state=open]>svg]:text-primary">
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-11">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WebFAQ;
