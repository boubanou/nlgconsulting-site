import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Building2, Users, Workflow, Bot, Shield, CheckCircle, Clock, Zap } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const ImplementationIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Implémentation IA Externalisée",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Nous agissons comme votre département IA externe — déploiement d'automatisations, construction d'agents et gestion de systèmes IA pour votre entreprise.",
        "url": "https://www.nlgconsulting.co/fr/implementation-ia-externalisee",
        "areaServed": "Worldwide",
        "serviceType": "Outsourced AI Implementation"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que l'implémentation IA externalisée ?", "acceptedAnswer": { "@type": "Answer", "text": "L'implémentation IA externalisée signifie confier à une équipe externe le déploiement, la gestion et l'optimisation de vos systèmes d'intelligence artificielle — sans avoir à recruter une équipe IA interne." }},
          { "@type": "Question", "name": "Est-ce adapté aux entreprises sans compétences techniques ?", "acceptedAnswer": { "@type": "Answer", "text": "C'est précisément pour ces entreprises que ce service a été conçu. Nous gérons toute la partie technique — vous vous concentrez sur votre cœur de métier." }},
          { "@type": "Question", "name": "Gardons-nous le contrôle de nos systèmes ?", "acceptedAnswer": { "@type": "Answer", "text": "Absolument. Tous les systèmes sont construits sur vos comptes et outils. Vous gardez la propriété totale et pouvez reprendre la gestion en interne à tout moment." }}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Implémentation IA Externalisée", "item": "https://www.nlgconsulting.co/fr/implementation-ia-externalisee" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Implémentation IA Externalisée | Votre Département IA | NLG Consulting</title>
        <meta name="description" content="Externalisez votre implémentation IA. Nous agissons comme votre département IA — déploiement d'automatisations, agents IA et systèmes sur mesure. Sans recrutement." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/implementation-ia-externalisee" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/implementation-ia-externalisee" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <meta property="og:title" content="Implémentation IA Externalisée | NLG Consulting" />
        <meta property="og:description" content="Votre département IA externe — déploiement, gestion et optimisation de vos systèmes IA." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/implementation-ia-externalisee" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Implémentation IA</Badge>
            <h1 className="mb-6">Implémentation IA{" "}<span className="text-gradient">Externalisée</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vous n'avez pas d'équipe IA en interne ? Nous agissons comme votre département IA externe — déploiement d'automatisations, construction d'agents et gestion de systèmes pour que vous puissiez vous concentrer sur votre cœur de métier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Appel découverte gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-4">Ce que nous prenons en charge</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              De la stratégie à l'exécution, nous gérons l'intégralité de votre transformation IA.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Workflow, title: "Automatisation de workflows", desc: "Conception, construction et maintenance de vos workflows automatisés sur Make, Zapier et n8n." },
                { icon: Bot, title: "Construction d'agents IA", desc: "Développement d'agents IA autonomes adaptés à vos processus métier spécifiques." },
                { icon: Building2, title: "Intégrations système", desc: "Connexion de vos outils existants — CRM, email, réseaux sociaux, bases de données — dans un écosystème IA cohérent." },
                { icon: Shield, title: "Monitoring & Maintenance", desc: "Surveillance continue, correction de bugs, optimisation des performances et mises à jour régulières." },
                { icon: Users, title: "Formation & Transfert", desc: "Formation progressive de vos équipes pour une prise en main autonome quand vous le souhaitez." },
                { icon: Clock, title: "Support dédié", desc: "Interlocuteur dédié, reporting régulier et réactivité garantie sur vos demandes." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Comment ça fonctionne</h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Appel découverte", desc: "Nous comprenons vos objectifs, vos processus et vos contraintes lors d'un premier échange gratuit." },
                { step: "02", title: "Audit & Plan d'action", desc: "Diagnostic complet de vos opérations et livraison d'un plan d'action priorisé avec estimations de coûts et délais." },
                { step: "03", title: "Déploiement progressif", desc: "Implémentation itérative — nous commençons par les quick wins puis montons en complexité progressivement." },
                { step: "04", title: "Gestion continue", desc: "Monitoring, optimisation et évolution de vos systèmes IA en continu. Reporting mensuel et points de suivi réguliers." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                  <span className="text-2xl font-semibold text-primary/40">{item.step}</span>
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Outsource */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pourquoi externaliser votre IA</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Pas besoin de recruter un data scientist ou un AI engineer",
                "Accès immédiat à une expertise IA opérationnelle",
                "Coût 60-80% inférieur à une équipe IA interne",
                "Flexibilité — montez ou réduisez l'engagement selon vos besoins",
                "Vous gardez la propriété totale de vos systèmes et données",
                "Formation progressive de vos équipes pour reprendre la main"
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
            <h2 className="text-primary-foreground mb-4">Votre département IA, à la demande</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel découverte pour discuter de comment l'implémentation IA externalisée peut fonctionner pour votre entreprise.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Appel découverte gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        {/* Related */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Conseil en IA", desc: "Commencez par la stratégie avant l'implémentation.", link: "/fr/conseil-ia" },
                { title: "Automatisation IA", desc: "Projets d'automatisation de workflows spécifiques.", link: "/fr/automation-ia" },
                { title: "Formation Prompt Engineering", desc: "Montez en compétence vos équipes en parallèle de l'implémentation.", link: "/fr/conseil-prompt-engineering" }
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
                { q: "Qu'est-ce que l'implémentation IA externalisée ?", a: "Cela signifie confier à une équipe externe (NLG Consulting) le déploiement, la gestion et l'optimisation de vos systèmes d'intelligence artificielle — sans avoir à recruter une équipe IA interne." },
                { q: "Est-ce adapté aux entreprises sans compétences techniques ?", a: "C'est précisément pour ces entreprises que ce service a été conçu. Nous gérons toute la partie technique — vous vous concentrez sur votre cœur de métier et vos objectifs business." },
                { q: "Gardons-nous le contrôle de nos systèmes ?", a: "Absolument. Tous les systèmes sont construits sur vos comptes et outils. Vous gardez la propriété totale et pouvez reprendre la gestion en interne à tout moment." },
                { q: "Combien coûte l'implémentation IA externalisée ?", a: "Les tarifs varient selon le périmètre et la complexité. Nous proposons des engagements mensuels flexibles. Chaque projet commence par un appel découverte gratuit pour définir le périmètre et estimer les coûts." },
                { q: "Quelle est la différence avec une agence IA ?", a: "Contrairement à une agence qui livre des projets ponctuels, nous fonctionnons comme votre département IA — avec un engagement continu, un interlocuteur dédié et une compréhension profonde de vos processus métier." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Prêt à externaliser votre IA ?</h2>
            <p className="text-lg text-muted-foreground mb-8">Discutons de vos besoins lors d'un appel découverte gratuit.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver un appel gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default ImplementationIAFR;
