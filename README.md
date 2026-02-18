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
