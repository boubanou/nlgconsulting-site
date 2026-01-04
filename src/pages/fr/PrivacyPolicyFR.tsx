import { Helmet } from "react-helmet-async";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const PrivacyPolicyFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Politique de Confidentialité & Mentions Légales | NLG Consulting",
    description: "Politique de confidentialité, protection des données RGPD et mentions légales de NLG Consulting. Conformité totale avec les réglementations européennes.",
    url: "https://nlgconsulting.co/fr/politique-confidentialite",
    inLanguage: "fr",
  };

  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité & Mentions Légales | NLG Consulting</title>
        <meta name="description" content="Politique de confidentialité, protection des données RGPD et mentions légales de NLG Consulting. Conformité totale avec les réglementations européennes." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nlgconsulting.co/fr/politique-confidentialite" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/privacy-policy" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/politique-confidentialite" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/privacy-policy" />
        <meta property="og:locale" content="fr_FR" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-accent/5">
        <div className="container max-w-4xl mx-auto px-4 pt-24 md:pt-32 pb-16">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité & Mentions Légales</h1>
            <p className="text-xl text-muted-foreground mb-2">NLG Consulting — Groupe mondial Business, Tech & Croissance</p>
            
            <p className="text-sm text-muted-foreground mb-8 border-b border-border pb-4">
              Date d'entrée en vigueur : 1er janvier 2024 | Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="mb-8 text-muted-foreground">
              NLG Consulting ("nous", "notre" ou "nos") s'engage à protéger votre vie privée et à assurer la transparence sur la façon dont nous collectons, utilisons et protégeons vos informations personnelles. Cette politique de confidentialité s'applique à tous les services offerts via notre site web (nlgconsulting.co) et les plateformes associées.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Informations sur l'entreprise</h2>
              <div className="bg-muted/50 rounded-lg p-6 not-prose">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Entité juridique</p>
                    <p className="font-medium">NLG Consulting</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Fondateur & Éditeur</p>
                    <p className="font-medium">Gregory Brenig</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Adresse enregistrée</p>
                    <p className="font-medium">Hahermon 21, Tel Aviv, Israël</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email de contact</p>
                    <p className="font-medium">greg@nlgconsulting.co</p>
                  </div>
                </div>
              </div>
              <p className="mt-4">
                NLG Consulting est un cabinet de conseil mondial spécialisé dans la génération de leads B2B, le développement commercial, le conseil stratégique et les solutions digitales pour les entreprises du monde entier.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2. Hébergement & Infrastructure</h2>
              <p className="mb-4">Notre site web et nos services sont hébergés sur une infrastructure sécurisée de niveau entreprise :</p>
              <ul>
                <li><strong>Hébergement du site :</strong> Vercel Inc., San Francisco, Californie, USA</li>
                <li><strong>Base de données & Backend :</strong> Supabase (PostgreSQL), avec centres de données dans l'Union Européenne</li>
                <li><strong>CDN & Réseau Edge :</strong> Distribution de contenu mondiale pour des performances optimales</li>
              </ul>
              <p className="mt-4">
                Tous les transferts de données entre votre navigateur et nos serveurs sont chiffrés en utilisant TLS 1.3 (Transport Layer Security).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3. Collecte & Traitement des Données</h2>
              <p className="mb-4">Nous collectons et traitons les données personnelles uniquement lorsque cela est nécessaire pour fournir nos services. Voici ce que nous collectons et pourquoi :</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">3.1 Informations que vous fournissez</h3>
              <ul>
                <li><strong>Formulaires de contact :</strong> Nom, adresse email, numéro de téléphone, nom de l'entreprise et contenu du message</li>
                <li><strong>Réservations de rendez-vous :</strong> Nom, email, dates/heures préférées et sujets de consultation</li>
                <li><strong>Inscriptions newsletter :</strong> Adresse email et préférences de communication</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">3.2 Informations collectées automatiquement</h3>
              <ul>
                <li><strong>Informations sur l'appareil :</strong> Type de navigateur, système d'exploitation, résolution d'écran</li>
                <li><strong>Données d'utilisation :</strong> Pages visitées, temps passé, patterns de clics (anonymisés)</li>
                <li><strong>Adresse IP :</strong> Utilisée pour la sécurité et la géolocalisation approximative (niveau pays)</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">3.3 Base légale du traitement (RGPD)</h3>
              <p>Nous traitons vos données sur la base de :</p>
              <ul>
                <li><strong>Consentement :</strong> Lorsque vous soumettez des formulaires ou acceptez les cookies</li>
                <li><strong>Nécessité contractuelle :</strong> Pour fournir les services que vous avez demandés</li>
                <li><strong>Intérêt légitime :</strong> Pour améliorer nos services et communiquer des informations pertinentes</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. Protection & Sécurité des Données</h2>
              <p className="mb-4">
                NLG Consulting est pleinement conforme au <strong>Règlement Général sur la Protection des Données de l'UE (RGPD - UE 2016/679)</strong> et aux lois internationales applicables sur la protection des données.
              </p>
              <p className="mb-4">Nous mettons en œuvre des mesures de sécurité aux standards de l'industrie incluant :</p>
              <ul>
                <li>Chiffrement de bout en bout pour toutes les transmissions de données</li>
                <li>Audits de sécurité réguliers et tests de pénétration</li>
                <li>Contrôles d'accès et protocoles d'authentification</li>
                <li>Procédures de sauvegarde sécurisée et de reprise après sinistre</li>
                <li>Formation des employés sur les meilleures pratiques de protection des données</li>
              </ul>
              <p className="mt-4 font-medium">
                Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers à des fins marketing.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">5. Vos Droits en vertu du RGPD</h2>
              <p className="mb-4">En tant que personne concernée, vous avez les droits suivants concernant vos informations personnelles :</p>
              <div className="grid md:grid-cols-2 gap-4 not-prose">
                {[
                  { right: "Droit d'accès", desc: "Demander une copie de vos données personnelles" },
                  { right: "Droit de rectification", desc: "Corriger des données inexactes ou incomplètes" },
                  { right: "Droit à l'effacement", desc: "Demander la suppression de vos données ('Droit à l'oubli')" },
                  { right: "Droit à la limitation", desc: "Limiter la façon dont nous utilisons vos données" },
                  { right: "Droit à la portabilité", desc: "Recevoir vos données dans un format lisible par machine" },
                  { right: "Droit d'opposition", desc: "S'opposer au traitement basé sur l'intérêt légitime" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted/30 rounded-lg p-4">
                    <p className="font-medium text-foreground">{item.right}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6">
                Pour exercer l'un de ces droits, veuillez contacter notre Délégué à la Protection des Données à : <strong>greg@nlgconsulting.co</strong>
              </p>
              <p className="mt-2">
                Nous répondrons à votre demande dans les 30 jours comme requis par le RGPD.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">6. Cookies & Technologies de Suivi</h2>
              <p className="mb-4">Nous utilisons des cookies et technologies similaires pour améliorer votre expérience de navigation :</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Types de cookies que nous utilisons</h3>
              <ul>
                <li><strong>Cookies essentiels :</strong> Requis pour le fonctionnement du site (pas de consentement nécessaire)</li>
                <li><strong>Cookies analytiques :</strong> Nous aident à comprendre comment les visiteurs interagissent avec notre site</li>
                <li><strong>Cookies marketing :</strong> Utilisés pour fournir du contenu pertinent et mesurer l'efficacité des campagnes</li>
              </ul>

              <p className="mt-4 font-medium">
                Aucun cookie de suivi ou marketing n'est activé sans votre consentement préalable.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">7. Services Tiers</h2>
              <p className="mb-4">Nous utilisons des services tiers de confiance pour exploiter notre activité :</p>
              <ul>
                <li><strong>Calendly :</strong> Pour la planification de rendez-vous et l'intégration calendrier</li>
                <li><strong>Google Analytics :</strong> Pour l'analyse du site web (avec anonymisation IP activée)</li>
                <li><strong>Stripe :</strong> Pour le traitement sécurisé des paiements</li>
                <li><strong>Fournisseurs de services email :</strong> Pour les communications transactionnelles et marketing</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">8. Conservation des Données</h2>
              <p className="mb-4">Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour remplir les objectifs décrits dans cette politique :</p>
              <ul>
                <li><strong>Demandes de contact :</strong> 3 ans à partir du dernier contact</li>
                <li><strong>Dossiers clients :</strong> 7 ans pour des raisons légales et comptables</li>
                <li><strong>Données analytiques :</strong> 26 mois (anonymisées)</li>
                <li><strong>Préférences marketing :</strong> Jusqu'à votre désinscription ou demande de suppression</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">9. Transferts Internationaux de Données</h2>
              <p>
                En tant que cabinet de conseil mondial, nous pouvons transférer des données vers des pays en dehors de l'Espace Économique Européen (EEE). Lorsque nous le faisons, nous nous assurons que des garanties appropriées sont en place, y compris les Clauses Contractuelles Types (CCT) approuvées par la Commission Européenne.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">10. Limitation de Responsabilité</h2>
              <p>
                NLG Consulting fournit ce site web et son contenu "en l'état". Bien que nous nous efforcions d'assurer l'exactitude et la disponibilité, nous ne garantissons pas un accès ininterrompu, l'absence d'erreurs, ni l'exactitude de toutes les informations. L'utilisation de nos services se fait à votre propre discrétion et risque.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">11. Droit Applicable & Juridiction</h2>
              <p className="mb-4">
                Cette Politique de Confidentialité est régie et interprétée conformément à :
              </p>
              <ul>
                <li>Les lois de l'Union Européenne (y compris le RGPD)</li>
                <li>Les lois de l'État d'Israël</li>
              </ul>
              <p className="mt-4">
                Tout litige découlant de cette politique sera soumis à la compétence exclusive des tribunaux de Tel Aviv, Israël, sauf disposition contraire du droit applicable.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">12. Modifications de cette Politique</h2>
              <p>
                Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps pour refléter les changements dans nos pratiques ou les exigences légales. Nous vous informerons de tout changement important en publiant la politique mise à jour sur cette page avec une nouvelle date de "Dernière mise à jour". Nous vous encourageons à consulter cette page régulièrement.
              </p>
            </section>

            <section className="mb-10 bg-primary/5 rounded-lg p-6 not-prose">
              <h2 className="text-2xl font-semibold mb-4">Nous Contacter</h2>
              <p className="text-muted-foreground mb-4">
                Si vous avez des questions concernant cette Politique de Confidentialité ou nos pratiques en matière de données, veuillez nous contacter :
              </p>
              <div className="space-y-2">
                <p><strong>Délégué à la Protection des Données :</strong> Gregory Brenig</p>
                <p><strong>Email :</strong> greg@nlgconsulting.co</p>
                <p><strong>Adresse :</strong> Hahermon 21, Tel Aviv, Israël</p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Nous visons à répondre à toutes les demandes dans les 48 heures ouvrées.
              </p>
            </section>
          </article>
        </div>
      </main>

      <MainFooterFR />
    </>
  );
};

export default PrivacyPolicyFR;
