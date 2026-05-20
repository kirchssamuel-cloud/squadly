export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  authorRole: string;
  authorInitials: string;
  authorColor: string;
  readingMinutes: number;
  keywords: string[];
  category: string;
  excerpt: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'malt-vs-squadly-comparatif-2026',
    title: 'Malt vs Squadly : comparatif honnête pour choisir en 2026',
    description:
      "Vous hésitez entre Malt et Squadly pour votre prochain projet digital ? Comparatif neutre des deux modèles, du pricing, des garanties et du type de projets adaptés.",
    publishedAt: '2026-05-20',
    author: 'Charlotte Faivre',
    authorRole: 'Head of Growth',
    authorInitials: 'CF',
    authorColor: '#6366F1',
    readingMinutes: 7,
    keywords: [
      'malt vs squadly',
      'alternative malt',
      'marketplace freelance',
      'comparatif plateforme freelance',
      'freelance vs squad'
    ],
    category: 'Comparatifs',
    excerpt:
      "Malt vend des heures de freelance. Squadly vend des livrables portés par des squads. Voici ce que ça change concrètement quand on doit choisir pour un projet à 30 k€.",
    content: `
## Le point de départ : deux modèles, pas un seul marché

Malt et Squadly sont régulièrement comparés, mais la comparaison est trompeuse : les deux plateformes ne vendent pas la même chose.

**Malt** est une marketplace de freelances individuels. Vous y trouvez un développeur, un designer, un PM — chacun avec son TJM, son profil, ses étoiles. Vous êtes responsable de la composition, de la coordination, et du livrable final.

**Squadly** est une marketplace de squads. Vous décrivez un projet, on assemble une équipe pluridisciplinaire vérifiée en 48h, et l'équipe livre. Le squad lead signe le livrable, pas le client.

La question n'est donc pas "lequel est mieux", mais "lequel correspond à votre besoin actuel".

## Quand choisir Malt

- Vous cherchez **un profil précis pour combler une mission** ponctuelle (ex : un designer Figma 3 jours par semaine pendant 2 mois).
- Vous avez **une équipe interne** capable de cadrer le brief, coordonner, et faire la recette.
- Vous voulez **garder la main** sur le casting et la relation directe avec chaque freelance.
- Votre projet est **petit** (< 10 k€) ou **flou** (POC exploratoire).

Sur Malt, la commission est d'environ 10 % côté freelance plus 15-20 % côté entreprise, soit une effective de l'ordre de 25-30 % du brut. Le volume disponible est massif (plus de 800 000 freelances), ce qui est aussi son inconvénient : trouver le bon profil prend du temps.

## Quand choisir Squadly

- Vous avez **un livrable à produire** dans un délai connu (MVP, refonte, lancement growth, déploiement IA).
- Vous **n'avez pas d'équipe interne** pour coordonner 3-5 freelances en parallèle.
- Vous voulez **un seul interlocuteur** juridique et opérationnel.
- Votre budget est **entre 15 et 150 k€** par projet.
- Vous voulez une **garantie de livraison** opposable.

Squadly facture une commission fixe de 20 % effective, communiquée au client. Le ticket moyen est de 25 k€, l'équipe est composée en 48h après brief, et chaque jalon est audité.

## Comparatif concret

| Critère | Malt | Squadly |
|---|---|---|
| Unité vendue | Heures / jours de freelance | Livrable porté par une squad |
| Composition équipe | Vous composez | Algorithme + curator senior |
| Garantie résultat | Aucune | Remplacement freelance 72h, refait si nécessaire |
| Délai de mise en route | 1-4 semaines | 48h après brief structuré |
| Coordination projet | Vous | Squad lead nommé |
| Commission | 10 % freelance + 15-20 % client | 20 % effective fixe |
| Ticket moyen | 5-15 k€ | 25 k€ |
| Type de projet idéal | Mission ponctuelle, profil identifié | Projet complet à livrer |

## Le test à 3 questions

Posez-vous ces trois questions :

1. **Ai-je le temps de manager 3 à 5 freelances en parallèle pendant 8 à 12 semaines ?**
   Si non, allez vers Squadly.

2. **Ai-je un brief précis (objectif business + scope + budget) ou j'ai juste un besoin flou ?**
   Brief flou = AI Brief Builder de Squadly. Brief précis et profil identifié = Malt.

3. **Suis-je prêt à payer 5 k€ de plus pour une garantie de livraison contractuelle ?**
   Si oui, Squadly. Si non, Malt.

## La vérité que personne n'écrit dans les comparatifs

Les comparatifs SEO sur ce sujet sont souvent biaisés parce qu'ils sont écrits par l'une des deux plateformes. Voici la lecture neutre :

- **Malt** est imbattable sur la profondeur de catalogue. Si vous savez exactement qui vous cherchez, vous le trouverez chez eux.
- **Squadly** est imbattable sur la livraison clé en main. Vous ne vous occupez de rien après la signature du brief.

Le choix se fait au regard de votre **bande passante interne**. Une entreprise avec un CTO et un Head of Product n'a pas le même besoin qu'une startup post-seed sans CTO senior.

## Et si on combinait les deux ?

Beaucoup de nos clients utilisent **les deux**. Ils prennent un freelance individuel sur Malt pour les missions ponctuelles ou les renforts ciblés, et viennent vers Squadly quand il faut livrer un projet complet en 8-12 semaines.

Pas de fidélité forcée. Le bon outil pour le bon problème.

## Pour aller plus loin

- [Comment ça marche, étape par étape](/comment-ca-marche)
- [Tarifs détaillés avec calculateur](/pricing)
- [Voir les squads livrées récemment](/squads)

Si vous êtes en train de cadrer un projet et hésitez sur le format, écrivez à charlotte@squadly.fr. Charlotte vous dit en 24 h ouvrées si Squadly est adapté, ou vous oriente vers Malt si non. Pas de pitch commercial, pas d'engagement.
`
  },
  {
    slug: 'comment-rediger-brief-freelance-projet-reussi',
    title: 'Comment rédiger un brief freelance qui ne mourra pas au cadrage',
    description:
      "80 % des projets freelance échouent à cause d'un brief mal posé. Méthodologie, template et erreurs à éviter pour un brief que votre CTO peut signer.",
    publishedAt: '2026-05-12',
    author: 'Eliott Marchetti',
    authorRole: 'CPO & co-fondateur',
    authorInitials: 'EM',
    authorColor: '#0A0A0A',
    readingMinutes: 9,
    keywords: [
      'brief freelance',
      'rédiger brief projet',
      'cahier des charges freelance',
      'template brief',
      'cadrage projet digital'
    ],
    category: 'Méthodologie',
    excerpt:
      "Un brief, c'est un contrat moral entre vous et la squad qui va livrer. Voici la méthodologie que nous appliquons sur les 1 200 squads livrées chez Squadly — version exploitable sans nous.",
    content: `
## Pourquoi 80 % des briefs échouent

Sur 100 projets freelance qui échouent, environ 80 plantent au cadrage, pas à l'exécution. Pas par manque de talent côté freelance, mais par flou du côté client. Voici les 4 erreurs récurrentes :

1. **Objectif non mesurable.** "Refondre le site" n'est pas un objectif. "Faire passer le taux de conversion de 1,2 % à 2,5 %" en est un.
2. **Périmètre élastique.** "On verra ensemble" = scope qui double, projet qui meurt.
3. **Budget caché.** Le freelance propose 22 k€, vous avez 15 k€ en tête, vous coupez 30 % de la valeur en le disant en fin de négo.
4. **Stack et contraintes implicites.** "On utilise Node" — quelle version ? Quel ORM ? Quelle infra ? Le freelance découvre en kick-off et perd 3 jours.

Un bon brief tue ces quatre erreurs avant même de rencontrer un freelance.

## La structure en 7 blocs

Voici la trame que nous utilisons sur Squadly. Elle tient sur une page A4 et règle 80 % des frictions futures.

### 1. Objectif business mesurable

Une phrase, un KPI cible, une échéance. Exemple :

> Faire passer le taux de souscription mobile de 3,2 % à 6 % en six mois post-livraison, sans toucher au pricing.

Si vous n'arrivez pas à formuler comme ça, vous n'êtes pas prêt à briefer. Reprenez d'abord ce travail en interne.

### 2. Périmètre fonctionnel (et hors-scope)

Listez ce qui est dans le scope et **listez aussi ce qui n'y est pas**. Le hors-scope explicite est le plus puissant levier anti-derapage.

Dans le scope :
- Refonte de l'onboarding KYC (8 écrans → 4 écrans)
- Migration KYC vers Veriff
- Dashboard contrat repensé mobile-first

Hors-scope :
- Refonte du back-office admin
- Migration backend Java vers Node
- Internationalisation (anglais/espagnol)

### 3. Stack et contraintes techniques

Soyez précis. Ne dites pas "Node". Dites :

\`Node 20 LTS · Express 4 · Postgres 15 · Redis 7 · Stripe Connect · KYC Veriff\`

Listez aussi les contraintes non-fonctionnelles : RGPD, ANSSI, hébergement (AWS Paris, OVH, on-prem), SLA, accessibilité (RGAA niveau AA).

### 4. Budget et délai

**Donnez une fourchette claire**, pas un montant unique. "Entre 25 et 35 k€" est plus utile que "25 k€" : la fourchette signale que vous êtes prêt à valoriser un meilleur scope.

Donnez aussi le délai cible avec une marge : "Livraison fin septembre, kick-off début juillet".

### 5. Équipe interne et points de contact

- Qui est le sponsor exécutif (signe le contrat) ?
- Qui est le product owner côté client (donne les arbitrages) ?
- Qui est le tech lead côté client (valide les choix techniques) ?
- Qui est le DPO (si données perso) ?
- Qui fait la recette (vérifie la livraison) ?

Sans ces 5 rôles nommés, le projet va piétiner.

### 6. Risques et dépendances identifiés

Listez les risques connus :
- Migration base de données pendant la fenêtre projet : risque de blocage 1 semaine
- Audit ANSSI obligatoire avant go-live : 3 semaines de marge à prévoir
- API tierce déprécie son endpoint en novembre : à anticiper

Un risque écrit n'est pas un problème, c'est un sujet de pilotage. Un risque caché est une bombe.

### 7. Critères d'acceptation de la livraison

Définissez **ce qui sera testé pour valider** la livraison. Exemples :

- KPI conversion mesuré 30 jours après go-live : doit dépasser 4,5 %
- Tests automatisés : couverture > 70 %
- Performance : Lighthouse Performance > 90 sur mobile
- Conformité : audit RGPD signé par le DPO

Sans critères d'acceptation, vous validerez la livraison "à la tête du client", et c'est la pire situation pour tout le monde.

## Le template minimal

\`\`\`markdown
# Brief — [Nom du projet]

## Objectif business
[Une phrase + KPI + échéance]

## Périmètre
### Dans le scope
- ...
### Hors-scope (explicite)
- ...

## Stack & contraintes
- Tech : ...
- Non-fonctionnel : ...

## Budget & délai
- Fourchette : X – Y k€
- Kick-off : ...
- Livraison cible : ...

## Équipe interne
- Sponsor : ...
- Product owner : ...
- Tech lead : ...
- DPO (si applicable) : ...
- Recette : ...

## Risques & dépendances
- ...

## Critères d'acceptation
- ...
\`\`\`

## Combien de temps pour rédiger ça ?

Sur Squadly, l'AI Brief Builder produit ce livrable en **12 minutes** via une conversation guidée. Sans assistant IA, comptez **2 heures de travail en interne** pour le faire bien. Ces 2 heures économisent en moyenne **3 semaines de friction** au cours du projet.

Si vous n'avez pas les 2 heures à investir, c'est que le projet n'est pas prioritaire. Et un projet pas prioritaire ne devrait pas être lancé.

## Les 3 signaux qu'un brief est prêt

1. Vous pouvez lire le brief à voix haute en 3 minutes et il tient debout.
2. Un freelance senior qui n'a jamais entendu parler du projet peut le chiffrer à ±20 % en 30 minutes.
3. Quand vous le montrez à votre CTO, il signe sans modifications.

Si l'un des trois échoue, retravaillez.

## Pour aller plus loin

- [L'AI Brief Builder en action sur Squadly](/comment-ca-marche#brief-builder)
- [Les squads composées à partir de briefs solides](/squads)
- [Démarrer un brief structuré](/contact)
`
  },
  {
    slug: 'freelance-vs-agence-digitale-roi-2026',
    title: 'Freelance, squad ou agence digitale : le vrai calcul de ROI en 2026',
    description:
      "Combien coûte vraiment un projet de 50 k€ selon le format choisi ? Calcul détaillé entre freelance solo, squad pluridisciplinaire et agence digitale, taxes et opportunités cachées comprises.",
    publishedAt: '2026-04-28',
    author: 'Juliette Rousset',
    authorRole: 'CEO & co-fondatrice',
    authorInitials: 'JR',
    authorColor: '#171717',
    readingMinutes: 8,
    keywords: [
      'freelance vs agence',
      'agence digitale coût',
      'squad freelance',
      'roi projet digital',
      'tarif agence vs freelance'
    ],
    category: 'Stratégie',
    excerpt:
      "Le prix affiché par une agence est rarement le coût final. Le prix d'un freelance solo non plus. Voici un calcul honnête sur un projet type à 50 k€.",
    content: `
## Le piège du prix affiché

Quand un dirigeant compare 3 devis pour un projet digital, il regarde le total HT et choisit le moins cher. C'est l'erreur classique. Le coût réel d'un projet inclut :

1. Le prix payé au prestataire
2. Le temps de coordination interne
3. Le coût d'opportunité du retard
4. Le coût de la mauvaise livraison (à reprendre)
5. Les surcoûts liés à la TVA récupérable ou non

Aucun de ces coûts n'apparaît sur un devis. Voici comment les calculer.

## Le cas type : refonte d'une app mobile B2C

Périmètre : refonte d'une app mobile React Native (souscription assurance), 4 mois de projet. Budget cible 50 k€ HT côté prestataire. Équipe nécessaire :

- 1 Product Designer (3 mois, mi-temps)
- 1 Dev React Native senior (4 mois, plein temps)
- 1 PM (4 mois, 1 jour / semaine)
- 1 Dev Backend Node (1,5 mois, plein temps)

## Option 1 : 4 freelances en direct (Malt, Comet, LeHibou…)

**Prix prestataires**

- Designer : 90 jours × 0,5 × 550 €/j = 12 375 €
- Dev RN : 80 jours × 700 €/j = 56 000 €
- PM : 16 jours × 750 €/j = 12 000 €
- Backend : 30 jours × 650 €/j = 19 500 €

Sous-total HT : **99 875 €**

Ouch. Le scope est plus gros qu'estimé. On va dire qu'on coupe le PM à zéro et qu'on réduit le designer à 70 jours :

- Designer : 70 × 0,5 × 550 = 9 625 €
- Dev RN : 60 × 700 = 42 000 €
- Backend : 25 × 650 = 16 250 €

Total : **67 875 € HT**

**Coûts cachés**

- Coordination interne (votre temps en interne, ou celui d'un product manager interne à 80 k€ chargé/an) : 0,4 ETP × 4 mois = 16 000 €
- Risque de désynchro : un freelance livre en avance, un autre en retard. Pertes estimées à 10 % du budget : 6 800 €
- Pas de garantie : si un freelance lâche, vous re-sourcez. Risque pondéré 5 %, coût ~3 400 €

**Coût total réel : ~94 000 € HT**

Pour un projet "budget 50 k€", vous payez quasi 2× plus à cause des dépassements et coûts cachés.

## Option 2 : Une squad pluridisciplinaire (Squadly)

**Prix prestataire**

Ticket affiché : 45 k€ HT, commission 20 % comprise. Le client paie un montant unique, la squad répartit en interne entre les 4 freelances.

Total HT : **45 000 €**

**Coûts cachés**

- Coordination interne : 0,1 ETP × 4 mois = 4 000 € (vous ne gérez que les arbitrages produit)
- Risque désynchro : 0 € — la squad est responsable de sa coordination
- Garantie remplacement 72 h en cas d'incompatibilité : 0 € côté client
- Audit indépendant à chaque jalon : inclus

**Coût total réel : ~49 000 € HT**

Différence vs option 1 : **45 000 € d'économie**, soit 48 % de moins.

## Option 3 : Une agence digitale française

**Prix prestataire**

Pour un projet équivalent, une agence digitale classique facture entre 700 et 900 €/jour-homme TJM tout compris (avec marge agence). Devis type :

- 4 profils ETP × 4 mois (équivalent 320 jours) × 800 €/j = 256 000 € HT

Total HT : **130-180 k€ HT** selon agence (après négo et optimisation périmètre).

**Coûts cachés**

- Coordination interne : 0,2 ETP × 4 mois = 8 000 € (un peu plus que squad, moins que freelances solo)
- Risque désynchro : 0 € — l'agence est responsable
- Garantie contractuelle : forte

**Coût total réel : ~140-190 k€ HT**

L'agence vous garantit un livrable robuste, mais à un coût 3 à 4 × supérieur à une squad de freelances vérifiés.

## Tableau récapitulatif

| Option | Prix HT | Coût total réel HT | Garantie | Coordination |
|---|---|---|---|---|
| Freelances en direct | 50-68 k€ | **~94 k€** | Aucune | Lourde |
| Squad Squadly | 45 k€ | **~49 k€** | Forte | Légère |
| Agence digitale | 130-180 k€ | **~150-190 k€** | Très forte | Moyenne |

## La règle de décision

- **Budget < 15 k€ et besoin ponctuel** → freelance en direct
- **Budget 15-150 k€ et livrable complet à produire** → squad (Squadly ou équivalent)
- **Budget > 200 k€ ou besoin de contractualisation lourde (groupe coté, marché public)** → agence

## Et la TVA dans tout ça ?

Trois points :

1. Les agences et Squadly facturent TVA française récupérable (20 %).
2. Les freelances en direct sont parfois en franchise de TVA (donc 0 % à récupérer mais aussi 0 % à payer côté trésorerie).
3. Pour une PME en TVA réelle, l'option freelance en franchise n'est pas un avantage : la TVA est récupérable.

## Le coût d'opportunité, le vrai sujet

Une refonte mobile qui prend 4 mois au lieu de 6 mois génère du chiffre d'affaires plus tôt. Sur le cas type :

- Tail conversion mensuel apporté par la refonte : ~120 k€ HT
- 2 mois gagnés = 240 k€ HT de revenus en plus
- Cela couvre **5 fois** le surcoût d'une agence vs une squad de freelances

Le coût d'opportunité est presque toujours le poste budgétaire le plus important. Et il est presque toujours absent des devis.

## Pour aller plus loin

- [Comment ça marche, étape par étape](/comment-ca-marche)
- [Calculateur de tarif squad](/pricing)
- [Démarrer un brief](/contact)

Si vous êtes en train d'arbitrer entre 2-3 options pour un projet, écrivez à juliette@squadly.fr. Réponse en 24 h ouvrées, sans pitch commercial.
`
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
