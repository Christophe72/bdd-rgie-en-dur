-- CreateEnum
CREATE TYPE "StatutChantier" AS ENUM ('A_DEVISER', 'DEVIS_ENVOYE', 'ACCEPTE', 'EN_COURS', 'EN_ATTENTE_FOURNISSEUR', 'EN_ATTENTE_PAIEMENT', 'CLOTURE');

-- CreateEnum
CREATE TYPE "EtatElement" AS ENUM ('PREVU', 'EN_COURS', 'TERMINE', 'NON_CONFORME', 'CONFORME');

-- CreateEnum
CREATE TYPE "TypeCircuit" AS ENUM ('ECLAIRAGE', 'PRISES', 'MIXTE', 'FOUR', 'TAQUE', 'MACHINE_LAVER', 'SECHOIR', 'CHAUFFE_EAU', 'POMPE', 'BORNE_RECHARGE', 'TABLEAU', 'AUTRE');

-- CreateEnum
CREATE TYPE "TypeInstallation" AS ENUM ('RESIDENTIEL', 'TERTIAIRE', 'INDUSTRIEL');

-- CreateEnum
CREATE TYPE "StatutDevis" AS ENUM ('BROUILLON', 'ENVOYE', 'ACCEPTE', 'REFUSE', 'EXPIRE');

-- CreateEnum
CREATE TYPE "StatutDiagnostic" AS ENUM ('EN_ATTENTE', 'EN_COURS', 'TERMINE', 'BLOQUANT');

-- CreateEnum
CREATE TYPE "StatutRgie" AS ENUM ('CONFORME', 'NON_CONFORME', 'AVERTISSEMENT');

-- CreateEnum
CREATE TYPE "TypeProtection" AS ENUM ('DISJONCTEUR', 'DIFFERENTIEL', 'FUSIBLE');

-- CreateEnum
CREATE TYPE "CourbeDisjoncteur" AS ENUM ('B', 'C', 'D');

-- CreateEnum
CREATE TYPE "TypeDifferentiel" AS ENUM ('AC', 'A', 'F', 'B');

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT,
    "email" TEXT,
    "telephone" TEXT,
    "adresse" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dossier" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "typeInstallation" "TypeInstallation" NOT NULL,
    "statut" "StatutChantier" NOT NULL DEFAULT 'A_DEVISER',
    "description" TEXT,
    "adresseChantier" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "Dossier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chantier" (
    "id" TEXT NOT NULL,
    "etat" "EtatElement" NOT NULL DEFAULT 'PREVU',
    "dateDebut" TIMESTAMP(3),
    "dateFin" TIMESTAMP(3),
    "responsable" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dossierId" TEXT NOT NULL,

    CONSTRAINT "Chantier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devis" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "statut" "StatutDevis" NOT NULL DEFAULT 'BROUILLON',
    "montantHT" DECIMAL(10,2) NOT NULL,
    "tva" DECIMAL(5,2) NOT NULL DEFAULT 21,
    "montantTTC" DECIMAL(10,2) NOT NULL,
    "dateEmission" TIMESTAMP(3),
    "dateExpiration" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dossierId" TEXT NOT NULL,

    CONSTRAINT "Devis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diagnostic" (
    "id" TEXT NOT NULL,
    "statut" "StatutDiagnostic" NOT NULL DEFAULT 'EN_ATTENTE',
    "observations" TEXT,
    "conclusions" TEXT,
    "realiseAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dossierId" TEXT NOT NULL,

    CONSTRAINT "Diagnostic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Circuit" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "type" "TypeCircuit" NOT NULL,
    "etat" "EtatElement" NOT NULL DEFAULT 'PREVU',
    "amperage" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dossierId" TEXT NOT NULL,

    CONSTRAINT "Circuit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Protection" (
    "id" TEXT NOT NULL,
    "type" "TypeProtection" NOT NULL,
    "calibre" INTEGER NOT NULL,
    "courbe" "CourbeDisjoncteur",
    "typeDiff" "TypeDifferentiel",
    "sensibilite" INTEGER,
    "marque" TEXT,
    "reference" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "circuitId" TEXT NOT NULL,

    CONSTRAINT "Protection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PointControleRgie" (
    "id" TEXT NOT NULL,
    "articleRgie" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,
    "statut" "StatutRgie" NOT NULL,
    "observation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dossierId" TEXT NOT NULL,

    CONSTRAINT "PointControleRgie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Dossier_reference_key" ON "Dossier"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "Chantier_dossierId_key" ON "Chantier"("dossierId");

-- CreateIndex
CREATE UNIQUE INDEX "Devis_numero_key" ON "Devis"("numero");

-- AddForeignKey
ALTER TABLE "Dossier" ADD CONSTRAINT "Dossier_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chantier" ADD CONSTRAINT "Chantier_dossierId_fkey" FOREIGN KEY ("dossierId") REFERENCES "Dossier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devis" ADD CONSTRAINT "Devis_dossierId_fkey" FOREIGN KEY ("dossierId") REFERENCES "Dossier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnostic" ADD CONSTRAINT "Diagnostic_dossierId_fkey" FOREIGN KEY ("dossierId") REFERENCES "Dossier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circuit" ADD CONSTRAINT "Circuit_dossierId_fkey" FOREIGN KEY ("dossierId") REFERENCES "Dossier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Protection" ADD CONSTRAINT "Protection_circuitId_fkey" FOREIGN KEY ("circuitId") REFERENCES "Circuit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointControleRgie" ADD CONSTRAINT "PointControleRgie_dossierId_fkey" FOREIGN KEY ("dossierId") REFERENCES "Dossier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
