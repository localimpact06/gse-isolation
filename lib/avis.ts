export type Avis = {
  texte: string
  contexte: string
}

// Avis réels récupérés depuis gse-isolation.fr (vérifiés Google via Trustindex)
export const avisReels: Avis[] = [
  {
    texte: "Entreprise sérieuse, isolation extérieure s'est déroulée très bien. Propre en fin de chantier. Merci !",
    contexte: "Isolation extérieure",
  },
  {
    texte: "Satisfait de la prestation de A à Z. J'ai rénové en quasi totalité ma maison en rénovation énergétique globale et je n'avais pas le temps ni envie de comprendre le fonctionnement des aides, dispositifs MaPrimeRénov' etc. Ils s'en sont chargés parfaitement. Je n'ai rien eu à faire. Commercialement, Stéphane sait absolument de quoi il parle. On est dans du sérieux !",
    contexte: "Rénovation énergétique globale",
  },
]

// Note moyenne réelle constatée sur les annuaires professionnels (Mappy)
export const noteMoyenne = "5/5"
export const nombreAvis = 6
