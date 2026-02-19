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

```mermaid
classDiagram

class Client {
uuid id PK
text name
text email
text phone
text address
text vat_number
timestamptz created_at
timestamptz updated_at
}

class ConstructionSite {
uuid id PK
uuid client_id FK
text name
text address
text status
date start_date
date end_date
numeric total_budget
timestamptz created_at
timestamptz updated_at
}

class Intervention {
uuid id PK
uuid construction_site_id FK
text intervention_type
text status
timestamptz scheduled_date
timestamptz completed_date
text description
text notes
timestamptz created_at
timestamptz updated_at
}

class Quote {
uuid id PK
uuid construction_site_id FK
text quote_number
text status
numeric total_amount
date valid_until
text notes
timestamptz created_at
timestamptz updated_at
}

class QuoteItem {
uuid id PK
uuid quote_id FK
text description
text category
numeric quantity
text unit
numeric unit_price
numeric total_price
int sort_order
timestamptz created_at
}

class Invoice {
uuid id PK
uuid construction_site_id FK
uuid quote_id FK
text invoice_number
text status
date issue_date
date due_date
date paid_date
numeric subtotal
numeric vat_amount
numeric total_amount
text notes
timestamptz created_at
timestamptz updated_at
}

class Personnel {
uuid id PK
text first_name
text last_name
text email
text phone
text role
numeric hourly_rate
date hire_date
text status
timestamptz created_at
timestamptz updated_at
}

Client "1" --> "0.._" ConstructionSite
ConstructionSite "1" --> "0.._" Intervention
ConstructionSite "1" --> "0.._" Quote
ConstructionSite "1" --> "0.._" Invoice
Quote "1" --> "1.._" QuoteItem
Quote "1" --> "0.._" Invoice
```
