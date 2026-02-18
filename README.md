<<<<<<< HEAD
@startuml
title Outil Métier - Gestion Chantier (Core Domain Model)

skinparam classAttributeIconSize 0

' =========================
' ENUMS
' =========================
enum Role {
  ADMIN
  TECHNICIEN
}

enum StatutChantier {
  EN_COURS
  TERMINE
  SUSPENDU
}

enum StatutDevis {
  BROUILLON
  ENVOYE
  ACCEPTE
  REFUSE
}

enum StatutFacture {
  EN_ATTENTE
  PAYEE
}

' =========================
' ENTITES
' =========================

class Societe {
  +id: UUID
  nom: String
  tva: String
  adresse: String
  createdAt: DateTime
}

class Utilisateur {
  +id: UUID
  email: String
  passwordHash: String
  role: Role
  societeId: UUID
}

class Client {
  +id: UUID
  nom: String
  adresse: String
  email: String
  telephone: String
  societeId: UUID
}

class Chantier {
  +id: UUID
  titre: String
  description: String
  statut: StatutChantier
  clientId: UUID
  createdAt: DateTime
}

class Intervention {
  +id: UUID
  date: Date
  dureeHeures: Decimal
  description: String
  chantierId: UUID
  technicienId: UUID
}

class Devis {
  +id: UUID
  numero: String
  montantHT: Decimal
  statut: StatutDevis
  chantierId: UUID
}

class Facture {
  +id: UUID
  numero: String
  montantHT: Decimal
  statut: StatutFacture
  dateEmission: Date
  devisId: UUID
}

' =========================
' RELATIONS
' =========================

Societe "1" -- "0..*" Utilisateur
Societe "1" -- "0..*" Client
Client "1" -- "0..*" Chantier
Chantier "1" -- "0..*" Intervention
Chantier "1" -- "0..*" Devis
Devis "1" -- "0..1" Facture
Utilisateur "1" -- "0..*" Intervention

@enduml
=======
# MVP RGIE pour PWA Next.js

Ce dossier contient un kit minimal pour exploiter `rgieData.js` dans une app Next.js (App Router) avec mode PWA.

## Fichiers

- `app/api/rgie/search/route.ts`: endpoint de recherche RGIE
- `app/rgie/page.tsx`: page de recherche (liste + cartes courtes)
- `app/rgie/[id]/page.tsx`: page détail d’un article
- `next.config.js`: configuration `next-pwa`

## Intégration rapide

1. Dans ton projet Next.js, installe la dépendance:

```bash
npm i next-pwa
```

2. Copie ces fichiers en gardant la même arborescence.

3. Adapte les imports de données selon ton projet:

- Dans `route.ts` et `[id]/page.tsx`, l’import actuel pointe vers:
  - `../../../../data/rgieData.js`

4. Lance ton app:

```bash
npm run dev
```

5. Ouvre:

- `/rgie` pour la recherche
- `/rgie/[id]` pour le détail

## Notes

- Le champ `explication_profane_mobile` est utilisé pour les cartes compactes.
- Le champ `explication_profane` est utilisé pour l’explication complète.
- Pour de meilleures performances, tu peux pré-générer un JSON RGIE dédié côté Next.
>>>>>>> 6fde3021a210007405934c0ec05019fce7a60d28
