import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MessageSquare, Users, GraduationCap, CheckCircle, Lightbulb, Target, Brain, FileText } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const ConseilPromptEngineeringFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Conseil en Prompt Engineering pour Entreprises",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Formation et conseil en prompt engineering pour les équipes business. Apprenez à maîtriser ChatGPT, Claude et les LLMs pour maximiser la productivité et la qualité de vos outputs IA.",
        "url": "https://www.nlgconsulting.co/fr/conseil-prompt-engineering",
        "areaServed": "Worldwide",
        "serviceType": "Prompt Engineering Consulting"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que le prompt engineering ?", "acceptedAnswer": { "@type": "Answer", "text": "Le prompt engineering est l'art de formuler des instructions précises et structurées pour obtenir les meilleurs résultats des modèles d'IA comme ChatGPT ou Claude. C'est la compétence clé pour tirer le maximum de l'intelligence artificielle." }},
          { "@type": "Question", "name": "Pourquoi investir dans le prompt engineering ?", "acceptedAnswer": { "@type": "Answer", "text": "La qualité des résultats IA dépend directement de la qualité des prompts. Des équipes formées au prompt engineering obtiennent des outputs 5 à 10 fois meilleurs en qualité et pertinence." }},
          { "@type": "Question", "name": "À qui s'adresse la formation prompt engineering ?", "acceptedAnswer": { "@type": "Answer", "text": "À tous les professionnels utilisant des outils IA au quotidien — marketeurs, commerciaux, managers, rédacteurs, développeurs, consultants et dirigeants." }}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Conseil Prompt Engineering", "item": "https://www.nlgconsulting.co/fr/conseil-prompt-engineering" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Conseil & Formation Prompt Engineering | ChatGPT & Claude | NLG Consulting</title>
        <meta name="description" content="Formation et conseil en prompt engineering pour les entreprises. Maîtrisez ChatGPT, Claude et les LLMs pour maximiser la productivité de vos équipes. Formation sur mesure." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/conseil-prompt-engineering" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/conseil-prompt-engineering" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <meta property="og:title" content="Conseil & Formation Prompt Engineering | NLG Consulting" />
        <meta property="og:description" content="Maîtrisez l'art du prompt engineering pour tirer le maximum de ChatGPT et Claude." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/conseil-prompt-engineering" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Prompt Engineering</Badge>
            <h1 className="mb-6">Conseil & Formation en{" "}<span className="text-gradient">Prompt Engineering</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Le prompt engineering est la compétence fondamentale de l'ère IA. Nous formons vos équipes à maîtriser ChatGPT, Claude et les LLMs pour obtenir des résultats professionnels — en marketing, ventes, opérations et stratégie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver une formation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-4">Ce que vos équipes apprendront</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              De la rédaction de prompts basiques aux techniques avancées de chain-of-thought et de system prompting.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: MessageSquare, title: "Fondamentaux du prompting", desc: "Structure, contexte, rôle, contraintes, format de sortie — les bases pour obtenir des résultats de qualité professionnelle avec tout modèle IA." },
                { icon: Brain, title: "Techniques avancées", desc: "Chain-of-thought, few-shot learning, system prompts, meta-prompting — les méthodes utilisées par les experts pour des résultats exceptionnels." },
                { icon: FileText, title: "Prompting par métier", desc: "Templates et techniques spécifiques pour le marketing, les ventes, le service client, la rédaction, l'analyse de données et la gestion de projet." },
                { icon: Lightbulb, title: "Prompt libraries & Templates", desc: "Construction de bibliothèques de prompts internes, standardisation des processus et création de templates réutilisables pour toute l'entreprise." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-xl border border-border">
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Formats d'accompagnement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: "Formation d'équipe", desc: "Sessions de formation en groupe (2h à 1 journée) adaptées au niveau et aux besoins spécifiques de votre équipe. En présentiel ou à distance." },
                { icon: Users, title: "Coaching individuel", desc: "Accompagnement personnalisé pour les dirigeants et managers qui veulent maîtriser l'IA en profondeur et devenir autonomes." },
                { icon: Target, title: "Consulting stratégique", desc: "Audit de vos usages IA actuels, recommandations d'amélioration et construction d'une bibliothèque de prompts sur mesure." }
              ].map((item, i) => (
                <Card key={i} className="border-border text-center"><CardContent className="p-6"><item.icon className="w-8 h-8 mx-auto mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pourquoi le prompt engineering est essentiel</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "La qualité de vos résultats IA dépend à 80% de la qualité de vos prompts",
                "Des équipes formées sont 5 à 10x plus productives avec les outils IA",
                "Le prompt engineering réduit les hallucinations et les erreurs de l'IA",
                "C'est la compétence transversale la plus demandée dans l'économie IA",
                "Un bon prompt remplace souvent des heures de travail manuel",
                "Les entreprises qui forment leurs équipes prennent un avantage durable"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Formez vos équipes</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel découverte pour discuter d'un programme de formation adapté à vos besoins.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel découverte <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        {/* Related */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Conseil en IA", desc: "Stratégie IA globale et accompagnement à l'implémentation.", link: "/fr/conseil-ia" },
                { title: "Automatisation IA", desc: "Mettez vos compétences prompt engineering au service de l'automatisation.", link: "/fr/automation-ia" },
                { title: "Implémentation IA externalisée", desc: "Confiez-nous l'exécution pendant que votre équipe monte en compétence.", link: "/fr/implementation-ia-externalisee" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">En savoir plus <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce que le prompt engineering ?", a: "Le prompt engineering est l'art de formuler des instructions précises et structurées pour obtenir les meilleurs résultats des modèles d'IA comme ChatGPT ou Claude. C'est la compétence clé pour tirer le maximum de l'intelligence artificielle en entreprise." },
                { q: "Pourquoi investir dans le prompt engineering ?", a: "La qualité des résultats IA dépend directement de la qualité des prompts. Des équipes formées au prompt engineering obtiennent des outputs 5 à 10 fois meilleurs en qualité, pertinence et utilité." },
                { q: "À qui s'adresse la formation prompt engineering ?", a: "À tous les professionnels utilisant des outils IA au quotidien — marketeurs, commerciaux, managers, rédacteurs, développeurs, consultants et dirigeants. Aucune compétence technique préalable n'est requise." },
                { q: "Combien de temps dure une formation ?", a: "Les formats varient : de 2 heures pour une introduction ciblée à une journée complète pour une formation approfondie. Nous proposons aussi des accompagnements sur plusieurs semaines pour une montée en compétence progressive." },
                { q: "La formation est-elle adaptée aux non-techniques ?", a: "Absolument. Nos formations sont conçues pour des professionnels business, pas des développeurs. Nous nous concentrons sur les applications pratiques et les cas d'usage métier concrets." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Prêt à maîtriser l'IA ?</h2>
            <p className="text-lg text-muted-foreground mb-8">Discutons de vos besoins en formation lors d'un appel gratuit.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver un appel gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default ConseilPromptEngineeringFR;
