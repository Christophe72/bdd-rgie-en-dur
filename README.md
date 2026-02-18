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
