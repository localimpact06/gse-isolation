export type Article = {
  slug: string
  cat: string
  date: string
  titre: string
  intro: string
  sections: { h2: string; texte: string }[]
  metaDescription: string
}

export const articles: Article[] = [
  {
    slug: "maprimerenov-guide-complet",
    cat: "Aides",
    date: "2026-06-15",
    titre: "MaPrimeRénov 2026 : Guide Complet des Aides",
    metaDescription: "MaPrimeRénov 2026 : conditions, montants par revenus, démarches et cumul avec les autres aides. Guide complet pour financer votre rénovation énergétique.",
    intro: "MaPrimeRénov' est l'aide phare de l'État pour financer vos travaux de rénovation énergétique. Voici tout ce qu'il faut savoir en 2026 : conditions, montants, et démarches pour en bénéficier sans perdre de temps ni d'argent.",
    sections: [
      { h2: "Qu'est-ce que MaPrimeRénov' ?", texte: "MaPrimeRénov' est une aide financière versée par l'Agence nationale de l'habitat (Anah) pour la rénovation énergétique des logements. Elle remplace depuis 2020 le crédit d'impôt pour la transition énergétique (CITE) et les aides Habiter Mieux Agilité. Elle est accessible à tous les propriétaires, occupants comme bailleurs, sans condition de ressources, mais le montant versé varie fortement selon vos revenus et le gain énergétique apporté par les travaux." },
      { h2: "Quels montants en 2026 ?", texte: "Le montant peut atteindre jusqu'à 90% du coût des travaux pour les ménages aux revenus très modestes (catégorie « bleu »), contre des taux dégressifs pour les catégories « jaune », « violet » et « rose ». Le montant dépend aussi du type de travaux : l'isolation des combles bénéficie d'un forfait différent de l'installation d'une pompe à chaleur, par exemple. Un plafond de travaux est fixé selon la nature du projet (geste seul ou rénovation globale)." },
      { h2: "Comment l'obtenir ?", texte: "La demande se fait en ligne sur le site officiel maprimerenov.gouv.fr, avant le démarrage des travaux, avec un devis détaillé d'une entreprise certifiée RGE comme GSE Isolation. L'erreur la plus fréquente est de signer un devis ou de commencer les travaux avant validation du dossier, ce qui entraîne une perte de l'aide. Notre équipe vous accompagne dans toutes les démarches, de la simulation jusqu'au versement effectif de la prime." },
      { h2: "Cumul avec d'autres aides", texte: "MaPrimeRénov' est cumulable avec les CEE (certificats d'économie d'énergie), l'Éco-prêt à taux zéro et la TVA réduite à 5,5%. Ce cumul permet de réduire fortement le reste à charge : pour un projet d'isolation des combles à 5 000€, il n'est pas rare que les aides cumulées couvrent 70 à 90% du montant total selon votre profil." },
      { h2: "Quelles erreurs éviter ?", texte: "Au-delà du respect du calendrier (devis avant travaux), veillez à choisir une entreprise réellement certifiée RGE — vérifiable sur l'annuaire officiel — et à conserver l'ensemble de vos factures et attestations. Un dossier incomplet ou une entreprise non certifiée entraîne un refus pur et simple de l'aide, même après réalisation des travaux." },
      { h2: "Cas concret : une rénovation à Nice", texte: "Pour une maison de 100m² à Nice avec un DPE classé F, une isolation des combles (23€/m² aides déduites) combinée à une isolation des murs par l'extérieur peut représenter jusqu'à 25 000€ d'aides cumulées (MaPrimeRénov' + CEE), ramenant le reste à charge à un niveau très raisonnable pour un gain de plusieurs classes au DPE." },
    ],
  },
  {
    slug: "isolation-combles-prix-guide",
    cat: "Isolation",
    date: "2026-06-10",
    titre: "Isolation des Combles : Prix et Économies en 2026",
    metaDescription: "Prix de l'isolation des combles en 2026 : à partir de 23€/m² aides déduites. Techniques, économies attendues et aides disponibles.",
    intro: "L'isolation des combles est le geste de rénovation énergétique le plus rentable et le plus rapide à mettre en œuvre. À partir de 23€/m² aides déduites, elle permet d'économiser jusqu'à 500€ par an sur votre facture énergétique.",
    sections: [
      { h2: "Pourquoi isoler ses combles en priorité ?", texte: "Jusqu'à 30% des déperditions de chaleur d'une maison passent par la toiture, bien plus que par les murs ou les fenêtres pour un logement non isolé. Isoler les combles est donc le premier réflexe pour un meilleur confort thermique, été comme hiver, avant d'envisager d'autres travaux plus coûteux comme l'isolation des murs." },
      { h2: "Combles perdus ou combles aménagés ?", texte: "La technique diffère selon la configuration : pour des combles perdus (non habités), le soufflage de laine minérale ou de ouate de cellulose est la solution la plus rapide, réalisable en une seule journée. Pour des combles aménagés ou aménageables, on privilégie la pose de panneaux isolants rigides ou semi-rigides sous rampants, un chantier plus long mais qui permet de conserver l'usage de l'espace." },
      { h2: "Quel est le prix réel ?", texte: "Le tarif démarre à 23€/m² aides déduites pour un soufflage classique en combles perdus, contre 40 à 60€/m² sans aides. Pour une isolation sous rampants en combles aménagés, comptez davantage en raison de la complexité technique et des matériaux utilisés." },
      { h2: "Quelles économies attendre ?", texte: "En moyenne, les foyers économisent jusqu'à 500€ par an sur leur facture de chauffage et de climatisation après isolation des combles, avec un retour sur investissement particulièrement rapide, souvent inférieur à 5 ans même hors aides." },
      { h2: "Quelle durée de vie pour l'isolant ?", texte: "Une isolation des combles correctement réalisée conserve ses performances pendant 25 à 30 ans, sous réserve d'une bonne ventilation de la toiture pour éviter tout phénomène de condensation qui dégraderait l'isolant dans le temps." },
      { h2: "Quelles aides mobiliser ?", texte: "MaPrimeRénov', CEE et TVA à 5,5% permettent de réduire fortement le reste à charge sur ce type de travaux, souvent considéré comme le plus accessible de la rénovation énergétique et le premier pas logique vers une rénovation plus globale." },
    ],
  },
  {
    slug: "pompe-chaleur-air-eau-prix",
    cat: "Pompe à chaleur",
    date: "2026-06-05",
    titre: "Pompe à Chaleur Air-Eau : Prix et Aides en 2026",
    metaDescription: "Prix d'une pompe à chaleur air-eau en 2026 : environ 12 000€, jusqu'à 80% d'aides. Fonctionnement, économies et compatibilité avec votre logement.",
    intro: "La pompe à chaleur air-eau permet de chauffer votre logement et votre eau chaude sanitaire avec une consommation électrique très réduite par rapport à une chaudière classique. Voici son coût réel après aides et ce qu'il faut vérifier avant de l'installer.",
    sections: [
      { h2: "Comment fonctionne une PAC air-eau ?", texte: "Elle puise la chaleur de l'air extérieur, même par temps froid, pour la restituer dans votre circuit de chauffage central, qu'il s'agisse de radiateurs basse ou haute température, d'un plancher chauffant, ainsi que dans votre ballon d'eau chaude sanitaire. Le rendement, exprimé en COP (coefficient de performance), indique combien de kWh de chaleur sont produits pour 1 kWh d'électricité consommé : un bon COP se situe autour de 3,5 à 4." },
      { h2: "Quel budget prévoir ?", texte: "Le prix moyen d'installation est d'environ 12 000€ pour une maison standard, matériel et pose compris, mais ce montant varie selon la puissance nécessaire et la complexité du chantier. Les aides cumulées comme MaPrimeRénov' et les CEE peuvent couvrir jusqu'à 80% du montant pour les profils éligibles aux revenus les plus modestes." },
      { h2: "Quelles économies réelles ?", texte: "Les utilisateurs constatent en moyenne 3 000€ d'économies par an sur leur facture de chauffage comparé à une chaudière au fioul ou au gaz de génération ancienne. Ce chiffre varie selon l'isolation du logement, la région et les habitudes de consommation du foyer." },
      { h2: "Est-ce adapté à toutes les maisons ?", texte: "Un audit énergétique préalable permet de vérifier la compatibilité de votre logement, notamment le niveau d'isolation existant et le type d'émetteurs de chaleur déjà installés. Une PAC air-eau est moins efficace dans une maison mal isolée, où les déperditions annulent une partie du gain : c'est pourquoi nous recommandons souvent de coupler ce changement de chauffage avec une isolation des combles ou des murs." },
      { h2: "Quel entretien prévoir ?", texte: "Une PAC air-eau nécessite un entretien annuel par un professionnel certifié, comme pour une chaudière classique, afin de vérifier le bon fonctionnement du circuit frigorifique et de l'unité extérieure. Cet entretien est généralement moins coûteux que celui d'une chaudière au fioul." },
      { h2: "PAC air-eau ou air-air, quelle différence ?", texte: "Contrairement à la PAC air-air qui chauffe directement l'air ambiant (et peut faire office de climatisation réversible), la PAC air-eau s'intègre à un circuit hydraulique existant et peut aussi produire votre eau chaude sanitaire, ce qui en fait souvent le choix privilégié pour remplacer une chaudière dans une maison déjà équipée de radiateurs à eau." },
    ],
  },
  {
    slug: "audit-energetique-obligatoire",
    cat: "Audit",
    date: "2026-05-28",
    titre: "Audit Énergétique : Est-il Obligatoire en 2026 ?",
    metaDescription: "Audit énergétique 2026 : dans quels cas est-il obligatoire pour la vente d'un bien, et pourquoi le réaliser même sans obligation légale.",
    intro: "L'audit énergétique devient une étape incontournable de la rénovation, à la fois pour des raisons réglementaires et pour optimiser efficacement votre budget travaux. Voici dans quels cas il est obligatoire, et pourquoi il reste utile dans tous les cas.",
    sections: [
      { h2: "Dans quels cas est-il obligatoire ?", texte: "L'audit énergétique réglementaire est requis pour la vente de logements classés F ou G au DPE (Diagnostic de Performance Énergétique), c'est-à-dire les logements les plus énergivores. Il informe l'acquéreur sur les travaux nécessaires pour améliorer la performance du bien, avec une estimation du coût et des aides disponibles." },
      { h2: "Pourquoi le faire même sans obligation ?", texte: "Même sans obligation légale, l'audit GSE, gratuit avec une demande de devis, permet d'identifier précisément les postes de déperdition thermique de votre logement et de prioriser vos travaux pour un investissement optimal. Sans cette étape, on isole souvent au hasard, en traitant parfois un poste secondaire avant un poste majeur de déperdition." },
      { h2: "Comment se déroule-t-il ?", texte: "Un spécialiste évalue votre logement, vos équipements de chauffage et de ventilation, ainsi que vos habitudes de consommation. L'étude dure environ 45 minutes et peut être menée par téléphone ou en visioconférence, sans nécessiter de déplacement dans un premier temps." },
      { h2: "Que contient le rapport ?", texte: "Vous recevez un diagnostic complet identifiant les postes de déperdition (toiture, murs, fenêtres, ventilation), ainsi qu'un devis détaillé intégrant les aides auxquelles vous êtes éligible. Le rapport peut également inclure une simulation de gain de classe DPE selon les scénarios de travaux envisagés." },
      { h2: "Audit réglementaire ou audit GSE, quelle différence ?", texte: "L'audit réglementaire obligatoire pour la vente d'un bien F ou G doit être réalisé par un professionnel certifié spécifiquement pour cette mission, avec un format de rapport encadré par la loi. L'audit GSE, lui, est une étude commerciale gratuite destinée à préparer votre projet de travaux : les deux ne se substituent pas l'un à l'autre si vous êtes dans une démarche de vente." },
      { h2: "Quel coût pour un audit réglementaire ?", texte: "Hors notre audit gratuit, un audit énergétique réglementaire facturé par un bureau d'études indépendant coûte généralement entre 500 et 1 000€ selon la taille et la complexité du logement, un coût à anticiper si vous prévoyez de vendre un bien classé F ou G." },
    ],
  },
  {
    slug: "eco-pret-taux-zero",
    cat: "Aides",
    date: "2026-05-20",
    titre: "Éco-Prêt à Taux Zéro (Éco-PTZ) : Guide 2026",
    metaDescription: "Éco-PTZ 2026 : prêt sans intérêt jusqu'à 50 000€ pour financer vos travaux de rénovation énergétique, cumulable avec MaPrimeRénov'.",
    intro: "L'Éco-PTZ permet de financer vos travaux de rénovation énergétique jusqu'à 50 000€ sans payer un centime d'intérêt. Voici comment en bénéficier et pourquoi il complète idéalement les aides directes comme MaPrimeRénov'.",
    sections: [
      { h2: "Qu'est-ce que l'Éco-PTZ ?", texte: "C'est un prêt sans intérêt accordé par les banques partenaires de l'État pour financer des travaux de rénovation énergétique, remboursable sur une durée de 15 à 20 ans selon le montant emprunté. L'État prend en charge les intérêts à la place de l'emprunteur, qui ne remboursera donc que le capital." },
      { h2: "Quel montant maximum ?", texte: "Jusqu'à 50 000€ pour un bouquet de travaux ambitieux combinant isolation, chauffage et ventilation dans un même projet de rénovation globale. Pour un geste seul (isolation des combles uniquement, par exemple), le plafond est généralement plus bas, autour de 15 000€." },
      { h2: "Qui peut en bénéficier ?", texte: "Tous les propriétaires, occupants ou bailleurs, sans condition de ressources, pour leur résidence principale ou un logement mis en location, à condition que la construction date de plus de deux ans." },
      { h2: "Comment l'obtenir concrètement ?", texte: "La demande se fait auprès d'une banque ayant signé une convention avec l'État, sur présentation du devis des travaux établi par une entreprise certifiée RGE. GSE Isolation peut vous orienter dans cette démarche en vous fournissant l'ensemble des documents techniques nécessaires au dossier bancaire." },
      { h2: "Cumul avec MaPrimeRénov'", texte: "L'Éco-PTZ est entièrement cumulable avec MaPrimeRénov', ce qui permet de financer le reste à charge de votre projet sans nécessiter d'apport personnel important. Concrètement, MaPrimeRénov' réduit le montant total des travaux, et l'Éco-PTZ permet d'étaler le paiement du solde restant sans frais financiers." },
      { h2: "Quels travaux sont éligibles ?", texte: "L'isolation thermique (murs, toiture, planchers, fenêtres), l'installation d'un système de chauffage ou de production d'eau chaude utilisant une énergie renouvelable, et l'amélioration de la ventilation sont éligibles, à condition d'être réalisés par un professionnel certifié RGE." },
    ],
  },
  {
    slug: "dpe-comment-ameliorer",
    cat: "DPE",
    date: "2026-05-15",
    titre: "DPE Mauvais ? Comment Passer de F à B en 3 Étapes",
    metaDescription: "Comment améliorer son DPE de F à B : plan d'action en 3 étapes combinant isolation, chauffage performant et ventilation.",
    intro: "Un mauvais DPE pénalise la valeur de votre bien et complique sa location ou sa vente, en plus de signaler des factures énergétiques élevées. Voici un plan d'action concret pour l'améliorer durablement, étape par étape.",
    sections: [
      { h2: "Pourquoi le DPE est-il si important ?", texte: "Le Diagnostic de Performance Énergétique influence directement la valeur de votre bien sur le marché immobilier et, depuis les nouvelles réglementations, la possibilité même de le mettre en location pour les classes les plus dégradées (F et G), désormais qualifiées de « passoires thermiques »." },
      { h2: "Étape 1 : isoler en priorité", texte: "L'isolation des combles et des murs constitue le levier le plus efficace pour gagner plusieurs classes au DPE en une seule intervention, car elle traite directement les plus grosses sources de déperdition thermique du logement. Pour une maison classée F, isoler les combles seules permet déjà fréquemment de gagner une à deux classes." },
      { h2: "Étape 2 : changer le système de chauffage", texte: "Remplacer une chaudière ancienne (fioul, gaz non performant) par une pompe à chaleur améliore fortement la note énergétique du logement, car le DPE prend en compte à la fois les besoins de chauffage et l'efficacité de l'équipement utilisé pour les couvrir." },
      { h2: "Étape 3 : optimiser la ventilation", texte: "Une VMC double flux complète la démarche en assurant un renouvellement d'air sain sans perte de chaleur, un critère de plus en plus pris en compte dans le calcul du DPE depuis sa réforme de 2021, qui valorise les logements bien ventilés sans déperdition associée." },
      { h2: "Quel ordre de priorité selon votre budget ?", texte: "Si votre budget est limité, commencez systématiquement par l'isolation des combles (le geste le moins coûteux et le plus rentable), puis envisagez le chauffage si votre équipement actuel est ancien, et enfin la ventilation et l'isolation des murs en complément pour viser les meilleures classes (A ou B)." },
      { h2: "Quel impact sur la valeur de votre bien ?", texte: "Selon les études notariales, un logement qui passe d'une classe F à une classe C ou B peut voir sa valeur de vente augmenter de plusieurs pourcents, un argument supplémentaire pour engager ces travaux même en l'absence de revente immédiate prévue." },
    ],
  },
  {
    slug: "isolation-exterieure",
    cat: "Isolation",
    date: "2026-05-10",
    titre: "Isolation par l'Extérieur : Prix et Avantages",
    metaDescription: "Isolation thermique par l'extérieur (ITE) : prix à partir de 120€/m², avantages et aides disponibles pour ce type de travaux.",
    intro: "L'isolation thermique par l'extérieur (ITE) est la solution la plus performante pour traiter les ponts thermiques de votre logement tout en valorisant votre façade. Voici tout ce qu'il faut savoir avant de vous lancer.",
    sections: [
      { h2: "Pourquoi choisir l'ITE ?", texte: "Elle traite efficacement les ponts thermiques au niveau des murs, c'est-à-dire les zones où l'isolation est interrompue (jonctions plancher-mur, autour des fenêtres), responsables d'une part importante des déperditions de chaleur. Elle améliore aussi l'esthétique de la façade et ne réduit pas la surface habitable intérieure de votre logement, contrairement à une isolation par l'intérieur." },
      { h2: "Quel est le prix ?", texte: "À partir de 120€/m² aides non déduites, ce tarif comprenant la pose de l'isolant et la finition en enduit. Avec MaPrimeRénov', les aides peuvent réduire fortement ce montant selon votre niveau de revenus, ramenant parfois le reste à charge à moins de la moitié du prix initial." },
      { h2: "Quelles économies attendre ?", texte: "Jusqu'à 25% d'économies d'énergie pour une maison correctement isolée par l'extérieur, sur le chauffage comme sur la climatisation, grâce à une enveloppe thermique continue qui élimine la quasi-totalité des ponts thermiques au niveau des murs." },
      { h2: "Comment se déroule le chantier ?", texte: "Le chantier se déroule entièrement à l'extérieur du logement : vous pouvez continuer à habiter votre maison normalement pendant les travaux, contrairement à une isolation par l'intérieur qui nécessite de libérer les pièces concernées. La durée varie selon la surface de façade, généralement entre une et trois semaines pour une maison individuelle." },
      { h2: "Travaux compatibles", texte: "L'ITE se combine très bien avec un ravalement de façade, offrant un résultat esthétique neuf en plus du gain énergétique, particulièrement appréciable sur les villas anciennes de la Côte d'Azur où l'aspect extérieur compte autant que la performance thermique." },
      { h2: "Quelles limites à connaître ?", texte: "L'ITE n'est pas toujours envisageable sur les façades classées ou en copropriété sans accord de l'assemblée générale, et elle modifie légèrement l'aspect extérieur du bâtiment (épaisseur ajoutée). Dans ces cas, l'isolation par l'intérieur reste une alternative pertinente." },
    ],
  },
  {
    slug: "renovation-globale-guide",
    cat: "Rénovation",
    date: "2026-05-05",
    titre: "Rénovation Globale : Budget et Aides Jusqu'à 80 000€",
    metaDescription: "Rénovation énergétique globale : budget, étapes du projet et aides cumulées pouvant atteindre 80 000€.",
    intro: "La rénovation énergétique globale permet de transformer durablement un logement énergivore en habitat performant, avec un reste à charge très réduit grâce aux aides cumulées pouvant atteindre 80 000€ pour les profils les plus modestes.",
    sections: [
      { h2: "Qu'est-ce qu'une rénovation globale ?", texte: "Elle combine isolation des murs, combles et planchers, changement du système de chauffage (généralement vers une pompe à chaleur), et parfois installation de panneaux solaires, dans un projet cohérent et planifié par notre équipe plutôt qu'une succession de travaux ponctuels et désordonnés." },
      { h2: "Quel budget prévoir ?", texte: "Le coût total varie selon la surface et l'état du bien, généralement entre 30 000 et 60 000€ pour une maison individuelle de taille moyenne traitée intégralement, mais les aides cumulées peuvent atteindre 80 000€ pour les profils les plus modestes, réduisant fortement le reste à charge réel." },
      { h2: "Comment GSE accompagne le projet ?", texte: "Notre équipe réalise l'audit énergétique préalable, propose un plan de travaux hiérarchisé selon votre budget, gère l'ensemble des démarches d'aides (simulation, dossiers, suivi) et coordonne l'ensemble du chantier de A à Z, avec un seul interlocuteur du début à la fin du projet." },
      { h2: "Quel délai pour un projet complet ?", texte: "Comptez en moyenne 2 à 4 mois entre la validation du projet et la fin des travaux, selon l'ampleur du chantier et la disponibilité des artisans, avec généralement un mois supplémentaire pour le montage et la validation des dossiers d'aides en amont." },
      { h2: "Dans quel ordre réaliser les travaux ?", texte: "La logique technique veut que l'on isole avant de changer le système de chauffage : installer une pompe à chaleur performante dans un logement mal isolé revient à surdimensionner inutilement l'équipement. Notre équipe établit donc systématiquement un ordre de priorité isolation puis chauffage, sauf cas particulier identifié lors de l'audit." },
      { h2: "Quel gain de DPE espérer ?", texte: "Une rénovation globale bien menée permet fréquemment de passer d'une classe F ou G à une classe C ou B, un saut de plusieurs niveaux rarement atteignable avec des travaux ponctuels isolés, et qui valorise significativement votre bien sur le marché immobilier." },
    ],
  },
  {
    slug: "5-erreurs-renovation",
    cat: "Conseils",
    date: "2026-04-10",
    titre: "5 Erreurs de Rénovation Énergétique à Éviter",
    metaDescription: "Les 5 erreurs les plus fréquentes en rénovation énergétique : audit négligé, artisan non RGE, aides non cumulées, ventilation oubliée, délais sous-estimés.",
    intro: "Avant de lancer vos travaux, voici les erreurs les plus fréquentes qui font perdre du temps, de l'argent, et parfois l'intégralité des aides de l'État auxquelles vous étiez éligible.",
    sections: [
      { h2: "1. Négliger l'audit énergétique préalable", texte: "Se lancer sans diagnostic précis conduit souvent à prioriser les mauvais travaux et à passer à côté d'économies importantes pourtant accessibles. Beaucoup de propriétaires isolent les murs en premier alors que la toiture, bien moins coûteuse à traiter, représente une déperdition plus importante dans leur cas précis." },
      { h2: "2. Choisir une entreprise non certifiée RGE", texte: "Sans certification RGE (Reconnu Garant de l'Environnement), vous perdez l'accès à la quasi-totalité des aides de l'État, MaPrimeRénov' comme les CEE. Vérifiez toujours cette certification avant de signer un devis, en consultant l'annuaire officiel des professionnels RGE plutôt que de vous fier uniquement à une mention sur un site internet." },
      { h2: "3. Oublier de cumuler les aides", texte: "MaPrimeRénov', CEE, TVA réduite et Éco-PTZ sont cumulables entre eux. Ne pas les combiner, c'est laisser potentiellement plusieurs milliers d'euros sur la table, une erreur fréquente chez les particuliers qui montent leur dossier seuls sans accompagnement spécialisé." },
      { h2: "4. Isoler sans traiter la ventilation", texte: "Une maison bien isolée mais mal ventilée peut développer des problèmes d'humidité et de qualité de l'air intérieur, car l'isolation réduit naturellement le renouvellement d'air par les infiltrations. Pensez à intégrer une VMC adaptée à votre projet d'isolation, particulièrement pour une rénovation globale." },
      { h2: "5. Sous-estimer les délais administratifs", texte: "Les démarches d'aides prennent du temps : comptez plusieurs semaines entre la demande initiale et la validation du dossier. Anticipez et faites-vous accompagner pour éviter les mauvaises surprises de planning sur votre chantier, notamment si vous avez une contrainte de date (vente, location, événement familial)." },
      { h2: "Comment éviter ces erreurs facilement ?", texte: "La meilleure protection contre ces cinq erreurs reste de passer par une entreprise qui gère l'intégralité du parcours : audit, choix des travaux, montage des dossiers d'aides et réalisation du chantier. C'est précisément l'accompagnement de A à Z que propose GSE Isolation à chacun de ses clients." },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find(a => a.slug === slug)
}
