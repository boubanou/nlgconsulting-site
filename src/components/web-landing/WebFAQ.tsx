import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WebFAQ = () => {
  const faqs = [
    {
      question: "Le paiement est-il sécurisé ?",
      answer: "Oui, tous les paiements sont traités par Stripe, le leader mondial du paiement en ligne. Vos données bancaires sont cryptées selon les normes PCI-DSS et ne sont jamais stockées sur nos serveurs. Vous recevez automatiquement une facture après chaque paiement.",
    },
    {
      question: "Que se passe-t-il après l'acompte ?",
      answer: "Dès réception de votre acompte, nous vous contactons sous 24h pour organiser un brief de 30 minutes. Ensuite, nous commençons la création de votre site. Vous recevez une première version sous quelques jours, puis nous procédons aux ajustements avant la livraison finale.",
    },
    {
      question: "Suis-je propriétaire du site ?",
      answer: "Absolument. Après paiement intégral, vous devenez propriétaire à 100 % de votre site internet. Nous vous fournissons systématiquement le code source complet. Vous êtes libre d'héberger, modifier ou transférer votre site comme vous le souhaitez, sans aucune dépendance technique.",
    },
    {
      question: "Le SEO est-il inclus ?",
      answer: "Oui, tous nos packs incluent une structure SEO optimisée avec des meta titles et meta descriptions uniques pour chaque page, ainsi que l'indexation Google. Le Pack Intermédiaire propose un SEO avancé avec des fonctionnalités supplémentaires.",
    },
    {
      question: "Puis-je utiliser mon propre nom de domaine ?",
      answer: "Oui, vous pouvez utiliser votre propre nom de domaine. Le paramétrage du domaine et des DNS est inclus dans tous nos packs. Si vous n'avez pas encore de domaine, nous pouvons vous conseiller sur les meilleures options.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tout ce que vous devez savoir avant de démarrer
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
