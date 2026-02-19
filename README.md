# Outil Métier RGIE  Next.js

Plateforme de gestion de chantiers électriques conforme au **Règlement Général sur les Installations Électriques (RGIE)** belge.  
Construite avec Next.js 16 (App Router), Prisma 7, PostgreSQL et Tailwind CSS v4.

---

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | Next.js 16.1.6  App Router |
| UI | React 19  Tailwind CSS v4  CSS variables |
| ORM | Prisma 7.4.0 + driver adapter `@prisma/adapter-pg` |
| Base de données | PostgreSQL |
| Langue | TypeScript 5 |
| PWA | `next-pwa` |

---

## Fonctionnalités

### Authentification
- Page de connexion (`/`) avec formulaire login/signup
- Redirection vers le dashboard après connexion

### Dashboard (`/accueil`)
- KPIs statiques (dossiers, chantiers, diagnostics)
- Tâches prioritaires
- Raccourcis vers les modules principaux

### Gestion des dossiers (`/accueil/dossiers`)
- Liste paginée avec recherche textuelle et filtre par statut
- Création de dossier avec client inline (`/accueil/ajout-dossier`)
- Page détail : circuits, protections, diagnostics, points de contrôle RGIE
- Édition complète

### Estimateur câblage & matériel (`/accueil/estimateur`)
- Calcul de métrages de câble (1.5 / 2.5 / 6 mm²) par pièce
- Règles RGIE automatiques : nombre de prises, points lumineux, circuits dédiés
- Steppers +/ avec préconisation RGIE pré-remplie
- Détail formule éclairage : espacement `L/(n+1)`, câble plafond, chutes, interrupteur
- Récapitulatif général et alertes conformité

### Recherche RGIE (`/rgie`)
- Recherche plein texte dans la base RGIE (`rgieData.js`)
- Page détail par article (`/rgie/[id]`)

---

## Structure du projet

```
app/
 page.tsx                    # Login
 layout.tsx
 globals.css                 # Design tokens (CSS variables)
 accueil/
    page.tsx                # Dashboard
    ajout-dossier/page.tsx  # Créer un dossier
    dossiers/
       page.tsx            # Liste des dossiers
       [id]/
           page.tsx        # Détail dossier
           edit/page.tsx   # Édition dossier
    estimateur/page.tsx     # Estimateur câblage
 api/
    dossiers/route.ts       # GET (paginé) + POST
    dossiers/[id]/route.ts  # GET + PATCH + DELETE
    clients/route.ts        # GET (recherche) + POST
 rgie/
     page.tsx                # Recherche RGIE
     [id]/page.tsx           # Détail article RGIE
data/
 rgieData.js                 # Base RGIE en dur
lib/
 prisma.ts                   # Singleton Prisma (PrismaPg adapter)
 generated/prisma/           # Client Prisma généré
prisma/
 schema.prisma               # Schéma BDD (enums + 7 modèles)
 config.ts                   # Config Prisma 7 (datasource.url)
 migrations/                 # Migrations SQL
```

---

## Modèles Prisma

```
Client  Dossier  Chantier
                  Devis[]
                  Diagnostic[]
                  Circuit[]  Protection[]
                              PointControleRgie[]
```

**Enums** : `StatutChantier`, `EtatElement`, `TypeCircuit`, `TypeInstallation`, `StatutDevis`, `StatutDiagnostic`, `StatutRgie`, `TypeProtection`, `CourbeDisjoncteur`, `TypeDifferentiel`

---

## Design system

Variables CSS définies dans `app/globals.css` :

| Token | Light | Dark |
|---|---|---|
| `--background` | `#f7f4ef` | `#080a0e` |
| `--surface` | `#ffffff` | `#131720` |
| `--panel` | `#efe8dd` | `#1f2534` |
| `--ink` | `#1b1b1f` | `#eceef4` |
| `--muted` | `#5f6068` | `#8f95a8` |
| `--accent` | `#e26b2c` | `#ff844a` |
| `--accent-2` | `#1f7f6a` | `#3ecfb2` |

---

## Installation

### Prérequis
- Node.js >= 20
- PostgreSQL en local (ou distant)

### Setup

```bash
npm install
```

Copier et configurer les variables d'environnement :

```bash
cp .env.example .env
# Éditer .env : DATABASE_URL=postgresql://user:pass@localhost:5432/db
```

Générer le client Prisma et appliquer les migrations :

```bash
npx prisma migrate dev --name init
```

Lancer le serveur de développement :

```bash
npm run dev
```

Ouvrir http://localhost:3000

---

## Variables d'environnement

<<<<<<< HEAD
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
=======
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
```

Voir `.env.example` pour le modèle complet.

---

## Note Prisma 7

Prisma 7 ne supporte plus `url` dans le bloc `datasource` du schéma.  
La configuration passe par `prisma.config.ts` :

```ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  datasource: { url: process.env.DATABASE_URL ?? "" },
});
```

Le client généré est placé dans `lib/generated/prisma/` (chemin explicite requis en Prisma 7).
>>>>>>> 6fd144a2e5c984253a74c7b4f37cd2ad48161c98
