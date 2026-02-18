# Déploiement Hostinger (webelec.be)

Ce projet est préparé en **export statique** (sans VPS, sans Node.js côté serveur).

## 1) Générer les fichiers du site

```bash
npm install
npm run build
```

Le dossier à publier est : `out/`

## 2) Publier sur Hostinger

### Option A — File Manager (hPanel)

1. Ouvrir hPanel → **Hosting** → **Manage**
2. Ouvrir **File Manager**
3. Aller dans `public_html/` (ou le dossier du domaine `webelec.be`)
4. Supprimer/archiver les anciens fichiers
5. Uploader **tout le contenu** du dossier `out/` dans `public_html/`

### Option B — FTP

1. Configurer un client FTP (FileZilla)
2. Se connecter au compte Hostinger
3. Uploader le contenu du dossier `out/` vers `public_html/`

## 3) Lier le domaine webelec.be

Si le domaine est déjà sur le même compte Hostinger :

- hPanel → **Domains** → **webelec.be**
- Vérifier que le domaine pointe vers le bon hébergement/site

Si le DNS est externe :

- Soit changer les nameservers vers ceux de Hostinger
- Soit pointer l'enregistrement `A` du domaine vers l'IP de l'hébergement Hostinger

## 4) Vérification

- Ouvrir `https://webelec.be`
- Tester :
  - `/`
  - `/rgie/`
  - `/rgie/4.2.2/` (exemple de page article statique)

## 5) Redéploiement

À chaque changement :

```bash
npm run build
```

Puis re-uploader le contenu de `out/`.
