"use client";

import { useState, useMemo } from "react";

// ----------------------------------------------------------------
// RÈGLES RGIE PAR TYPE DE PIÈCE
// ----------------------------------------------------------------
type TypePiece =
  | "SALON"
  | "SEJOUR"
  | "CHAMBRE"
  | "CUISINE"
  | "SDB"
  | "WC"
  | "BUREAU"
  | "GARAGE"
  | "CAVE"
  | "BUANDERIE"
  | "COULOIR"
  | "AUTRE";

type RegleRgie = {
  label: string;
  prisesMin: number; // nombre de prises minimum RGIE
  prisesParM2: number; // 1 prise tous les X m²
  pointsLumMin: number; // points lumineux minimum absolu
  m2ParLampe: number; // 1 luminaire tous les X m² (0 = utiliser min)
  circuitsDedies: string[]; // circuits dédiés obligatoires
  diffObligatoire: boolean; // différentiel 30mA obligatoire
  notes: string[]; // notes RGIE
};

const REGLES_RGIE: Record<TypePiece, RegleRgie> = {
  SALON: {
    label: "Salon",
    prisesMin: 5,
    prisesParM2: 5,
    pointsLumMin: 1,
    m2ParLampe: 6, // 1 luminaire tous les 6 m²
    circuitsDedies: [],
    diffObligatoire: false,
    notes: [
      "Min 5 prises (Art. 6.6)",
      "1 prise tous les 5 m²",
      "1 luminaire / 6 m² conseillé",
    ],
  },
  SEJOUR: {
    label: "Séjour / Salle à manger",
    prisesMin: 5,
    prisesParM2: 5,
    pointsLumMin: 1,
    m2ParLampe: 6,
    circuitsDedies: [],
    diffObligatoire: false,
    notes: [
      "Min 5 prises (Art. 6.6)",
      "1 prise tous les 5 m²",
      "1 luminaire / 6 m² conseillé",
    ],
  },
  CHAMBRE: {
    label: "Chambre",
    prisesMin: 3,
    prisesParM2: 8,
    pointsLumMin: 1,
    m2ParLampe: 8, // chambre : 1 plafonnier central + 1 chevet / 8 m²
    circuitsDedies: [],
    diffObligatoire: false,
    notes: [
      "Min 3 prises (Art. 6.6)",
      "1 prise tous les 8 m²",
      "1 luminaire / 8 m²",
    ],
  },
  CUISINE: {
    label: "Cuisine",
    prisesMin: 4,
    prisesParM2: 3,
    pointsLumMin: 1,
    m2ParLampe: 4, // cuisine : bonne luminosité requise
    circuitsDedies: [
      "Four (6 mm², 32A)",
      "Plaque (6 mm², 32A)",
      "Lave-vaisselle (2.5 mm², 16A)",
      "Réfrigérateur (2.5 mm², 16A)",
      "Micro-ondes (2.5 mm², 16A)",
    ],
    diffObligatoire: false,
    notes: [
      "Min 4 prises plan de travail (Art. 6.6)",
      "1 prise tous les 3 m²",
      "1 luminaire / 4 m²",
      "Circuit dédié four obligatoire (Art. 6.6.3)",
      "Circuit dédié plaque obligatoire (Art. 6.6.3)",
      "Câble 6 mm² pour four et plaque",
    ],
  },
  SDB: {
    label: "Salle de bain",
    prisesMin: 1,
    prisesParM2: 0,
    pointsLumMin: 1,
    m2ParLampe: 5,
    circuitsDedies: ["Sèche-serviettes (2.5 mm², 16A)"],
    diffObligatoire: true,
    notes: [
      "Différentiel 30 mA obligatoire (Art. 7.0)",
      "Prises interdites dans zone 0 & 1",
      "Prise rasoir autorisée si transformateur d'isolement (zone 2)",
      "Éclairage IP44 minimum en zone 1",
      "Câble sous gaine dans zone humide",
      "1 luminaire / 5 m²",
    ],
  },
  WC: {
    label: "WC",
    prisesMin: 0,
    prisesParM2: 0,
    pointsLumMin: 1,
    m2ParLampe: 0, // 0 = toujours 1 luminaire minimum
    circuitsDedies: [],
    diffObligatoire: false,
    notes: [
      "1 point d'éclairage minimum",
      "Prise possible si hors zone humide",
    ],
  },
  BUREAU: {
    label: "Bureau",
    prisesMin: 3,
    prisesParM2: 6,
    pointsLumMin: 1,
    m2ParLampe: 5,
    circuitsDedies: [],
    diffObligatoire: false,
    notes: [
      "Min 3 prises",
      "1 luminaire / 5 m²",
      "1 circuit informatique recommandé (Art. 6.6)",
    ],
  },
  GARAGE: {
    label: "Garage",
    prisesMin: 2,
    prisesParM2: 0,
    pointsLumMin: 1,
    m2ParLampe: 10,
    circuitsDedies: ["Borne de recharge (si EV, 32A/7.4kW)"],
    diffObligatoire: true,
    notes: [
      "Différentiel 30 mA obligatoire (Art. 7.0)",
      "Câble protégé mécaniquement",
      "1 luminaire / 10 m²",
      "Borne EV : circuit dédié 32A (RGIE Art. 6.10)",
    ],
  },
  CAVE: {
    label: "Cave",
    prisesMin: 1,
    prisesParM2: 0,
    pointsLumMin: 1,
    m2ParLampe: 10,
    circuitsDedies: [],
    diffObligatoire: true,
    notes: [
      "Différentiel 30 mA recommandé (local humide)",
      "Matériel IP44 minimum",
      "1 luminaire / 10 m²",
    ],
  },
  BUANDERIE: {
    label: "Buanderie",
    prisesMin: 2,
    prisesParM2: 0,
    pointsLumMin: 1,
    m2ParLampe: 8,
    circuitsDedies: ["Lave-linge (2.5 mm², 16A)", "Sèche-linge (2.5 mm², 16A)"],
    diffObligatoire: true,
    notes: [
      "Différentiel 30 mA obligatoire",
      "Circuit dédié lave-linge et sèche-linge",
      "Matériel IP44 minimum",
    ],
  },
  COULOIR: {
    label: "Couloir / Entrée / Hall",
    prisesMin: 1,
    prisesParM2: 0,
    pointsLumMin: 1,
    m2ParLampe: 4, // couloir : éclairage tous les 4 m² (~tous les 2-3 m linéaires)
    circuitsDedies: [],
    diffObligatoire: false,
    notes: [
      "Min 1 prise",
      "1 luminaire / 4 m²",
      "Télérupteur recommandé pour éclairage multi-points",
    ],
  },
  AUTRE: {
    label: "Autre",
    prisesMin: 1,
    prisesParM2: 0,
    pointsLumMin: 1,
    m2ParLampe: 8,
    circuitsDedies: [],
    diffObligatoire: false,
    notes: [],
  },
};

// ----------------------------------------------------------------
// SECTIONS DE CÂBLE
// ----------------------------------------------------------------
const SECTIONS = {
  "1.5": {
    label: "1.5 mm² — Éclairage (10A)",
    color: "bg-yellow-100 text-yellow-800",
  },
  "2.5": {
    label: "2.5 mm² — Prises (16A)",
    color: "bg-blue-100 text-blue-800",
  },
  "6": {
    label: "6 mm² — Gros appareils (32A)",
    color: "bg-orange-100 text-orange-800",
  },
  "10": {
    label: "10 mm² — Tableau / général",
    color: "bg-red-100 text-red-800",
  },
};

// ----------------------------------------------------------------
// TYPES
// ----------------------------------------------------------------
type Piece = {
  id: string;
  type: TypePiece;
  longueur: number; // m
  largeur: number; // m
  hauteur: number; // m
  distTableau: number; // m (distance estimée au tableau)
  nbPrisesManuel: number | null; // override manuel
  nbPointsLumManuel: number | null;
  appareils: string[]; // circuits dédiés sélectionnés
};

type DetailCable15 = {
  distTableau: number;
  cablePlafond: number; // L + l (une passe longueur + largeur)
  chutesLuminaires: number; // n × 0.5 m (stub plafond → boîtier)
  monteeInterrupteur: number; // hauteur (montée/descente murale unique)
  spacing: number; // L / (n+1) — espacement entre luminaires
  totalBrut: number; // avant facteur de pose
};

type ResultatPiece = Piece & {
  surface: number;
  perimetre: number;
  nbPrisesCalc: number;
  nbPointsLumCalc: number;
  cable15: number;
  cable25: number;
  cable6: number;
  nbCircuitsEclairage: number;
  nbCircuitsPrises: number;
  regle: RegleRgie;
  alertes: string[];
  detailCable15: DetailCable15;
};

// ----------------------------------------------------------------
// CALCULS
// ----------------------------------------------------------------
const FACTEUR_POSE = 1.25; // +25% pour courbes, fixations
const CHUTE_LUMINAIRE = 0.5; // m — stub plafond → boîtier de chaque luminaire
const STUB_PRISE = 0.3; // m — stub horizontal → boîtier de chaque prise

function calculerPiece(p: Piece): ResultatPiece {
  const regle = REGLES_RGIE[p.type];
  const surface = p.longueur * p.largeur;
  const perimetre = 2 * (p.longueur + p.largeur);

  // ── Nombre de prises ────────────────────────────────────────────
  const prisesParSurface =
    regle.prisesParM2 > 0
      ? Math.ceil(surface / regle.prisesParM2)
      : regle.prisesMin;
  const nbPrisesCalc =
    p.nbPrisesManuel !== null
      ? p.nbPrisesManuel
      : Math.max(regle.prisesMin, prisesParSurface);

  // ── Nombre de luminaires ─────────────────────────────────────────
  // Ex : 3 lampes dans 5 m → espacement = 5/(3+1) = 1.25 m
  const nbLampesAuto =
    regle.m2ParLampe > 0
      ? Math.max(regle.pointsLumMin, Math.ceil(surface / regle.m2ParLampe))
      : regle.pointsLumMin;
  const nbPointsLumCalc =
    p.nbPointsLumManuel !== null ? p.nbPointsLumManuel : nbLampesAuto;

  // Espacement entre luminaires (sur la longueur)
  const spacing =
    nbPointsLumCalc > 0
      ? parseFloat((p.longueur / (nbPointsLumCalc + 1)).toFixed(2))
      : p.longueur;

  // ── Câble 1.5 mm² (éclairage) ────────────────────────────────────
  // Détail par composante :
  //   distTableau      → amenée depuis le tableau
  //   cablePlafond     → L + l  (une passe plafond longueur + largeur)
  //   chutesLuminaires → n × 0.5 m  (montée/descente vers chaque boîtier de lampe)
  //   monteeInterrupteur → hauteur  (une seule montée/descente murale pour interrupteur)
  const cablePlafond = p.longueur + p.largeur;
  const chutesLuminaires = nbPointsLumCalc * CHUTE_LUMINAIRE;
  const monteeInterrupteur = p.hauteur;
  const totalBrut15 =
    p.distTableau + cablePlafond + chutesLuminaires + monteeInterrupteur;

  const nbCircuitsEclairage = Math.ceil(nbPointsLumCalc / 8);
  const cable15 = Math.ceil(totalBrut15 * nbCircuitsEclairage * FACTEUR_POSE);

  const detailCable15: DetailCable15 = {
    distTableau: p.distTableau,
    cablePlafond,
    chutesLuminaires,
    monteeInterrupteur,
    spacing,
    totalBrut: parseFloat(totalBrut15.toFixed(2)),
  };

  // ── Câble 2.5 mm² (prises) ───────────────────────────────────────
  // Chemin mural : périmètre de la pièce à ~0.3 m du sol
  // + stub pour chaque prise (0.3 m)
  // + amenée depuis tableau
  const nbCircuitsPrises = Math.ceil(nbPrisesCalc / 8);
  const cable25 = Math.ceil(
    (p.distTableau + perimetre + nbPrisesCalc * STUB_PRISE) *
      nbCircuitsPrises *
      FACTEUR_POSE,
  );

  // ── Câble 6 mm² (gros appareils) ─────────────────────────────────
  // Un tirage direct depuis le tableau par appareil avec câble 6 mm²
  const nbCirDedies6mm = p.appareils.filter((a) => a.includes("6 mm")).length;
  const cable6 = Math.ceil(nbCirDedies6mm * p.distTableau * FACTEUR_POSE * 1.3);

  // ── Alertes RGIE ────────────────────────────────────────────────
  const alertes: string[] = [];
  if (nbPrisesCalc < regle.prisesMin)
    alertes.push(
      `⚠ Nombre de prises inférieur au minimum RGIE (${regle.prisesMin})`,
    );
  if (regle.diffObligatoire)
    alertes.push("⚡ Différentiel 30 mA obligatoire dans cette pièce");
  if (p.type === "CUISINE" && !p.appareils.some((a) => a.includes("Four")))
    alertes.push(
      "⚠ Circuit dédié four non prévu (obligatoire RGIE Art. 6.6.3)",
    );
  if (p.type === "CUISINE" && !p.appareils.some((a) => a.includes("Plaque")))
    alertes.push(
      "⚠ Circuit dédié plaque non prévu (obligatoire RGIE Art. 6.6.3)",
    );

  return {
    ...p,
    surface,
    perimetre,
    nbPrisesCalc,
    nbPointsLumCalc,
    cable15,
    cable25,
    cable6,
    nbCircuitsEclairage,
    nbCircuitsPrises,
    regle,
    alertes,
    detailCable15,
  };
}

// ----------------------------------------------------------------
// IDs
// ----------------------------------------------------------------
let _id = 0;
const uid = () => `p${++_id}`;

// ----------------------------------------------------------------
// COMPOSANTS
// ----------------------------------------------------------------
const inputCls =
  "h-10 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:ring-2 focus:ring-[color:var(--ring)]";
const labelCls = "grid gap-1.5 text-xs font-medium text-[color:var(--muted)]";

export default function EstimateurPage() {
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [distDefaut, setDistDefaut] = useState(8); // distance tableau par défaut

  const resultats: ResultatPiece[] = useMemo(
    () => pieces.map(calculerPiece),
    [pieces],
  );

  const totaux = useMemo(() => {
    const cable15 = resultats.reduce((s, r) => s + r.cable15, 0);
    const cable25 = resultats.reduce((s, r) => s + r.cable25, 0);
    const cable6 = resultats.reduce((s, r) => s + r.cable6, 0);
    const prises = resultats.reduce((s, r) => s + r.nbPrisesCalc, 0);
    const points = resultats.reduce((s, r) => s + r.nbPointsLumCalc, 0);
    const circEcl = resultats.reduce((s, r) => s + r.nbCircuitsEclairage, 0);
    const circPr = resultats.reduce((s, r) => s + r.nbCircuitsPrises, 0);
    const circDed = resultats.reduce((s, r) => s + r.appareils.length, 0);
    const alertes = resultats.flatMap((r) =>
      r.alertes.map((a) => `[${REGLES_RGIE[r.type].label}] ${a}`),
    );
    return {
      cable15,
      cable25,
      cable6,
      prises,
      points,
      circEcl,
      circPr,
      circDed,
      alertes,
    };
  }, [resultats]);

  const addPiece = () => {
    setPieces((prev) => [
      ...prev,
      {
        id: uid(),
        type: "CHAMBRE",
        longueur: 4,
        largeur: 3.5,
        hauteur: 2.5,
        distTableau: distDefaut,
        nbPrisesManuel: null,
        nbPointsLumManuel: null,
        appareils: [],
      },
    ]);
  };

  const updatePiece = <K extends keyof Piece>(
    id: string,
    key: K,
    value: Piece[K],
  ) =>
    setPieces((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [key]: value } : p)),
    );

  const removePiece = (id: string) =>
    setPieces((prev) => prev.filter((p) => p.id !== id));

  const toggleAppareil = (id: string, app: string) =>
    setPieces((prev) =>
      prev.map((p) =>
        p.id !== id
          ? p
          : {
              ...p,
              appareils: p.appareils.includes(app)
                ? p.appareils.filter((a) => a !== app)
                : [...p.appareils, app],
            },
      ),
    );

  // Changement de type → reset prises/lum/appareils au RGIE auto
  const changePieceType = (id: string, newType: TypePiece) =>
    setPieces((prev) =>
      prev.map((p) =>
        p.id !== id
          ? p
          : {
              ...p,
              type: newType,
              nbPrisesManuel: null,
              nbPointsLumManuel: null,
              appareils: [],
            },
      ),
    );

  // Stepper générique pour prises / luminaires
  const StepperField = ({
    label,
    value,
    isAuto,
    rgieBadge,
    onIncrement,
    onDecrement,
    onReset,
    warn,
  }: {
    label: string;
    value: number;
    isAuto: boolean;
    rgieBadge: string;
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
    warn?: string;
  }) => (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-semibold text-[color:var(--ink)]">
          {label}
        </span>
        {isAuto ? (
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">
            RGIE auto
          </span>
        ) : (
          <button
            onClick={onReset}
            className="rounded-full bg-[color:var(--panel)] px-2 py-0.5 text-[10px] font-semibold text-[color:var(--muted)] hover:bg-red-50 hover:text-red-500 transition"
          >
            ↺ auto
          </button>
        )}
        {warn && (
          <span className="ml-auto text-[10px] font-bold text-red-500">
            {warn}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onDecrement}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-xl font-bold text-[color:var(--muted)] transition hover:bg-[color:var(--panel)] hover:text-[color:var(--ink)] active:scale-95"
        >
          −
        </button>
        <div
          className={`flex h-10 min-w-[3.5rem] items-center justify-center rounded-xl border-2 px-3 text-xl font-bold transition ${
            !isAuto
              ? "border-[color:var(--accent)] bg-orange-50 text-[color:var(--accent)]"
              : "border-black/10 bg-[color:var(--panel)] text-[color:var(--ink)]"
          }`}
        >
          {value}
        </div>
        <button
          onClick={onIncrement}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-xl font-bold text-[color:var(--muted)] transition hover:bg-[color:var(--panel)] hover:text-[color:var(--ink)] active:scale-95"
        >
          +
        </button>
        <span className="text-xs text-[color:var(--muted)]">{rgieBadge}</span>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen px-4 py-10 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-6">
        {/* Header */}
        <div className="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Outil RGIE
          </p>
          <h1 className="text-3xl font-semibold text-[color:var(--ink)]">
            Estimateur câblage & matériel
          </h1>
          <p className="mt-1 text-sm text-[color:var(--muted)]">
            Saisir les pièces, dimensions et équipements. Les quantités de câble
            et matériel sont calculées selon les règles RGIE.
          </p>
        </div>

        {/* Config globale */}
        <div className="fade-up rounded-2xl border border-black/10 bg-[color:var(--surface)] p-5">
          <p className="mb-3 text-sm font-semibold text-[color:var(--ink)]">
            Paramètres généraux
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className={labelCls}>
              Distance tableau par défaut (m)
              <input
                type="number"
                min={1}
                step={0.5}
                value={distDefaut}
                onChange={(e) => setDistDefaut(Number(e.target.value))}
                className={inputCls}
              />
            </label>
            <div className="flex flex-col justify-end">
              <p className="mb-1 text-xs text-[color:var(--muted)]">
                Facteur de pose appliqué
              </p>
              <div className="flex h-10 items-center rounded-xl border border-black/10 bg-[color:var(--panel)] px-3 text-sm font-semibold text-[color:var(--ink)]">
                ×{FACTEUR_POSE} (+25 % courbes/fixations)
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <p className="mb-1 text-xs text-[color:var(--muted)]">
                Max prises par circuit (RGIE)
              </p>
              <div className="flex h-10 items-center rounded-xl border border-black/10 bg-[color:var(--panel)] px-3 text-sm font-semibold text-[color:var(--ink)]">
                8 prises × circuit 16A
              </div>
            </div>
          </div>
        </div>

        {/* Liste des pièces */}
        <div className="space-y-4">
          {pieces.map((piece, idx) => {
            const regle = REGLES_RGIE[piece.type];
            const res = resultats[idx];
            return (
              <div
                key={piece.id}
                className="fade-up rounded-[24px] border border-black/10 bg-[color:var(--surface)] p-5 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.2)]"
              >
                {/* En-tête pièce */}
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[color:var(--accent)] text-sm font-bold text-white">
                        {idx + 1}
                      </span>
                      <select
                        title={regle.notes.join("\n")}
                        value={piece.type}
                        onChange={(e) =>
                          changePieceType(piece.id, e.target.value as TypePiece)
                        }
                        className="h-9 rounded-xl border border-black/10 bg-white px-3 text-sm font-semibold text-[color:var(--ink)] outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                      >
                        {(Object.keys(REGLES_RGIE) as TypePiece[]).map((t) => (
                          <option key={t} value={t}>
                            {REGLES_RGIE[t].label}
                          </option>
                        ))}
                      </select>
                      {regle.diffObligatoire && (
                        <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600">
                          ⚡ Diff. 30 mA
                        </span>
                      )}
                    </div>
                    {/* Chips résumé live */}
                    {res && (
                      <div className="ml-11 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-[color:var(--panel)] px-2 py-0.5 text-[10px] font-semibold text-[color:var(--muted)]">
                          {res.surface.toFixed(1)} m²
                        </span>
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                          🔌 {res.nbPrisesCalc} prise
                          {res.nbPrisesCalc !== 1 ? "s" : ""}
                        </span>
                        <span className="rounded-full bg-yellow-50 px-2 py-0.5 text-[10px] font-semibold text-yellow-700">
                          💡 {res.nbPointsLumCalc} pt
                          {res.nbPointsLumCalc !== 1 ? "s" : ""} lum.
                        </span>
                        <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-700">
                          ⚡{" "}
                          {res.nbCircuitsEclairage +
                            res.nbCircuitsPrises +
                            res.appareils.length}{" "}
                          circuit
                          {res.nbCircuitsEclairage +
                            res.nbCircuitsPrises +
                            res.appareils.length !==
                          1
                            ? "s"
                            : ""}
                        </span>
                        <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-semibold text-yellow-800">
                          {res.cable15} m 1.5mm²
                        </span>
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-800">
                          {res.cable25} m 2.5mm²
                        </span>
                        {res.cable6 > 0 && (
                          <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-semibold text-orange-800">
                            {res.cable6} m 6mm²
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => removePiece(piece.id)}
                    className="rounded-lg border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-500 hover:bg-red-100"
                  >
                    Supprimer
                  </button>
                </div>

                {/* Dimensions */}
                <div className="mb-4 grid gap-3 sm:grid-cols-4">
                  <label className={labelCls}>
                    Longueur (m)
                    <input
                      type="number"
                      min={0.5}
                      step={0.1}
                      value={piece.longueur}
                      onChange={(e) =>
                        updatePiece(
                          piece.id,
                          "longueur",
                          Number(e.target.value),
                        )
                      }
                      className={inputCls}
                    />
                  </label>
                  <label className={labelCls}>
                    Largeur (m)
                    <input
                      type="number"
                      min={0.5}
                      step={0.1}
                      value={piece.largeur}
                      onChange={(e) =>
                        updatePiece(piece.id, "largeur", Number(e.target.value))
                      }
                      className={inputCls}
                    />
                  </label>
                  <label className={labelCls}>
                    Hauteur (m)
                    <input
                      type="number"
                      min={1}
                      step={0.1}
                      value={piece.hauteur}
                      onChange={(e) =>
                        updatePiece(piece.id, "hauteur", Number(e.target.value))
                      }
                      className={inputCls}
                    />
                  </label>
                  <label className={labelCls}>
                    Distance tableau (m)
                    <input
                      type="number"
                      min={1}
                      step={0.5}
                      value={piece.distTableau}
                      onChange={(e) =>
                        updatePiece(
                          piece.id,
                          "distTableau",
                          Number(e.target.value),
                        )
                      }
                      className={inputCls}
                    />
                  </label>
                </div>

                {/* Steppers prises & luminaires */}
                <div className="mb-4 grid gap-4 rounded-2xl border border-black/10 bg-[color:var(--panel)] p-4 sm:grid-cols-2">
                  <StepperField
                    label="Prises"
                    value={res?.nbPrisesCalc ?? regle.prisesMin}
                    isAuto={piece.nbPrisesManuel === null}
                    rgieBadge={`min ${regle.prisesMin} RGIE`}
                    warn={
                      res && res.nbPrisesCalc < regle.prisesMin
                        ? `⚠ min RGIE: ${regle.prisesMin}`
                        : undefined
                    }
                    onIncrement={() =>
                      updatePiece(
                        piece.id,
                        "nbPrisesManuel",
                        (res?.nbPrisesCalc ?? regle.prisesMin) + 1,
                      )
                    }
                    onDecrement={() =>
                      updatePiece(
                        piece.id,
                        "nbPrisesManuel",
                        Math.max(0, (res?.nbPrisesCalc ?? regle.prisesMin) - 1),
                      )
                    }
                    onReset={() =>
                      updatePiece(piece.id, "nbPrisesManuel", null)
                    }
                  />
                  <StepperField
                    label="Points lumineux"
                    value={res?.nbPointsLumCalc ?? regle.pointsLumMin}
                    isAuto={piece.nbPointsLumManuel === null}
                    rgieBadge={`min ${regle.pointsLumMin} RGIE`}
                    warn={
                      res && res.nbPointsLumCalc < regle.pointsLumMin
                        ? `⚠ min RGIE: ${regle.pointsLumMin}`
                        : undefined
                    }
                    onIncrement={() =>
                      updatePiece(
                        piece.id,
                        "nbPointsLumManuel",
                        (res?.nbPointsLumCalc ?? regle.pointsLumMin) + 1,
                      )
                    }
                    onDecrement={() =>
                      updatePiece(
                        piece.id,
                        "nbPointsLumManuel",
                        Math.max(
                          0,
                          (res?.nbPointsLumCalc ?? regle.pointsLumMin) - 1,
                        ),
                      )
                    }
                    onReset={() =>
                      updatePiece(piece.id, "nbPointsLumManuel", null)
                    }
                  />
                </div>

                {/* Circuits dédiés */}
                {regle.circuitsDedies.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold text-[color:var(--muted)]">
                      Circuits dédiés (cocher les appareils présents)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {regle.circuitsDedies.map((app) => (
                        <button
                          key={app}
                          type="button"
                          onClick={() => toggleAppareil(piece.id, app)}
                          className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${
                            piece.appareils.includes(app)
                              ? "border-[color:var(--accent-2)] bg-[color:var(--accent-2)] text-white"
                              : "border-black/10 bg-white text-[color:var(--muted)] hover:border-black/30"
                          }`}
                        >
                          {app}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Résultat pièce */}
                {res && (
                  <div className="rounded-2xl border border-black/10 bg-[color:var(--panel)] p-4">
                    <div className="mb-3 grid grid-cols-2 gap-2 text-xs text-[color:var(--muted)] sm:grid-cols-4">
                      <span>
                        Surface :{" "}
                        <strong className="text-[color:var(--ink)]">
                          {res.surface.toFixed(1)} m²
                        </strong>
                      </span>
                      <span>
                        Prises :{" "}
                        <strong className="text-[color:var(--ink)]">
                          {res.nbPrisesCalc}
                        </strong>
                      </span>
                      <span>
                        Points lum. :{" "}
                        <strong className="text-[color:var(--ink)]">
                          {res.nbPointsLumCalc}
                        </strong>
                      </span>
                      <span>
                        Circuits :{" "}
                        <strong className="text-[color:var(--ink)]">
                          {res.nbCircuitsEclairage +
                            res.nbCircuitsPrises +
                            res.appareils.length}
                        </strong>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-xl bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                        1.5 mm² : {res.cable15} m
                      </span>
                      <span className="rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                        2.5 mm² : {res.cable25} m
                      </span>
                      {res.cable6 > 0 && (
                        <span className="rounded-xl bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800">
                          6 mm² : {res.cable6} m
                        </span>
                      )}
                    </div>
                    {/* Détail formule éclairage */}
                    <details className="mt-3">
                      <summary className="cursor-pointer text-xs font-semibold text-[color:var(--muted)]">
                        Détail formule éclairage 1.5 mm²
                      </summary>
                      <div className="mt-2 space-y-1 rounded-xl bg-yellow-50 p-3 text-xs text-yellow-900">
                        <p>
                          <strong>Luminaires calculés :</strong>{" "}
                          {res.nbPointsLumCalc} pt (surface{" "}
                          {res.surface.toFixed(1)} m² ÷ {regle.m2ParLampe}{" "}
                          m²/pt)
                        </p>
                        <p>
                          <strong>Espacement entre luminaires :</strong>{" "}
                          {res.detailCable15.spacing.toFixed(2)} m = L (
                          {piece.longueur} m) ÷ (n+1) = {piece.longueur} /{" "}
                          {res.nbPointsLumCalc + 1}
                        </p>
                        <p>
                          <strong>Câble en plafond :</strong>{" "}
                          {res.detailCable15.cablePlafond.toFixed(2)} m = L + l
                          = {piece.longueur} + {piece.largeur}
                        </p>
                        <p>
                          <strong>
                            Chutes luminaires ({res.nbPointsLumCalc} × 0.5 m) :
                          </strong>{" "}
                          {res.detailCable15.chutesLuminaires.toFixed(2)} m
                        </p>
                        <p>
                          <strong>Montée interrupteur :</strong>{" "}
                          {res.detailCable15.monteeInterrupteur.toFixed(2)} m{" "}
                          (hauteur plafond)
                        </p>
                        <p>
                          <strong>Distance tableau :</strong>{" "}
                          {res.detailCable15.distTableau.toFixed(2)} m
                        </p>
                        <p className="rounded-lg bg-yellow-200 px-2 py-1 font-semibold">
                          Total brut / circuit :{" "}
                          {res.detailCable15.totalBrut.toFixed(2)} m → ×{" "}
                          {res.nbCircuitsEclairage} circuit(s) × 1.25 (chute) ={" "}
                          <strong>{res.cable15} m</strong>
                        </p>
                      </div>
                    </details>

                    {/* Alertes */}
                    {res.alertes.length > 0 && (
                      <div className="mt-3 space-y-1">
                        {res.alertes.map((a, i) => (
                          <p
                            key={i}
                            className="text-xs font-medium text-amber-700"
                          >
                            {a}
                          </p>
                        ))}
                      </div>
                    )}
                    {/* Notes RGIE */}
                    {regle.notes.length > 0 && (
                      <details className="mt-2">
                        <summary className="cursor-pointer text-xs font-semibold text-[color:var(--muted)]">
                          Prescriptions RGIE ({regle.notes.length})
                        </summary>
                        <ul className="mt-2 space-y-1 pl-3">
                          {regle.notes.map((n, i) => (
                            <li
                              key={i}
                              className="text-xs text-[color:var(--muted)] before:mr-1.5 before:content-['→']"
                            >
                              {n}
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          <button
            onClick={addPiece}
            className="w-full rounded-[24px] border-2 border-dashed border-black/10 py-5 text-sm font-semibold text-[color:var(--muted)] transition hover:border-black/25 hover:text-[color:var(--ink)]"
          >
            + Ajouter une pièce
          </button>
        </div>

        {/* RÉCAPITULATIF TOTAL */}
        {pieces.length > 0 && (
          <div className="fade-up rounded-[28px] border border-black/10 bg-[color:var(--surface)] p-8 shadow-[0_24px_70px_-50px_rgba(0,0,0,0.45)]">
            <h2 className="mb-6 text-xl font-semibold text-[color:var(--ink)]">
              Récapitulatif général — {pieces.length} pièce
              {pieces.length > 1 ? "s" : ""}
            </h2>

            {/* Câbles */}
            <div className="mb-6 grid gap-3 sm:grid-cols-3">
              {(
                [
                  {
                    key: "cable15",
                    label: "Câble 1.5 mm²",
                    sublabel: "Éclairage — 10A",
                    value: totaux.cable15,
                    color: "bg-yellow-50 border-yellow-200 text-yellow-800",
                  },
                  {
                    key: "cable25",
                    label: "Câble 2.5 mm²",
                    sublabel: "Prises — 16A",
                    value: totaux.cable25,
                    color: "bg-blue-50 border-blue-200 text-blue-800",
                  },
                  {
                    key: "cable6",
                    label: "Câble 6 mm²",
                    sublabel: "Gros appareils — 32A",
                    value: totaux.cable6,
                    color: "bg-orange-50 border-orange-200 text-orange-800",
                  },
                ] as const
              ).map((c) => (
                <div
                  key={c.key}
                  className={`rounded-2xl border p-5 ${c.color}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
                    {c.sublabel}
                  </p>
                  <p className="mt-2 text-3xl font-bold">{c.value} m</p>
                  <p className="mt-1 text-sm font-semibold">{c.label}</p>
                </div>
              ))}
            </div>

            {/* Matériel */}
            <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "Prises",
                  value: totaux.prises,
                  sub: "total installation",
                },
                {
                  label: "Points lumineux",
                  value: totaux.points,
                  sub: "total installation",
                },
                {
                  label: "Circuits éclairage",
                  value: totaux.circEcl,
                  sub: "disj. 10A / 1.5 mm²",
                },
                {
                  label: "Circuits prises",
                  value: totaux.circPr,
                  sub: "disj. 16A / 2.5 mm²",
                },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-black/10 bg-[color:var(--panel)] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {m.label}
                  </p>
                  <p className="mt-3 text-3xl font-bold text-[color:var(--ink)]">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs text-[color:var(--muted)]">
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Circuits dédiés */}
            {totaux.circDed > 0 && (
              <div className="mb-6 rounded-2xl border border-orange-200 bg-orange-50 p-4">
                <p className="text-sm font-semibold text-orange-800">
                  {totaux.circDed} circuit{totaux.circDed > 1 ? "s" : ""} dédié
                  {totaux.circDed > 1 ? "s" : ""} prévu
                  {totaux.circDed > 1 ? "s" : ""}
                </p>
                <p className="mt-1 text-xs text-orange-700">
                  {resultats
                    .flatMap((r) =>
                      r.appareils.map(
                        (a) => `[${REGLES_RGIE[r.type].label}] ${a}`,
                      ),
                    )
                    .join(" · ")}
                </p>
              </div>
            )}

            {/* Tableau / disjoncteurs */}
            <div className="mb-6 rounded-2xl border border-black/10 bg-[color:var(--panel)] p-5">
              <p className="mb-3 text-sm font-semibold text-[color:var(--ink)]">
                Tableau électrique estimé
              </p>
              <div className="grid gap-2 sm:grid-cols-3 text-sm">
                <span className="text-[color:var(--muted)]">
                  Disjoncteurs 10A (éclairage) :{" "}
                  <strong className="text-[color:var(--ink)]">
                    {totaux.circEcl}
                  </strong>
                </span>
                <span className="text-[color:var(--muted)]">
                  Disjoncteurs 16A (prises) :{" "}
                  <strong className="text-[color:var(--ink)]">
                    {totaux.circPr}
                  </strong>
                </span>
                <span className="text-[color:var(--muted)]">
                  Circuits dédiés (16A/32A) :{" "}
                  <strong className="text-[color:var(--ink)]">
                    {totaux.circDed}
                  </strong>
                </span>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-3 text-sm">
                <span className="text-[color:var(--muted)]">
                  Différentiels 30mA requis :{" "}
                  <strong className="text-[color:var(--ink)]">
                    {resultats.filter((r) => r.regle.diffObligatoire).length}{" "}
                    pièce
                    {resultats.filter((r) => r.regle.diffObligatoire).length > 1
                      ? "s"
                      : ""}
                  </strong>
                </span>
                <span className="text-[color:var(--muted)]">
                  Total modules tableau :{" "}
                  <strong className="text-[color:var(--ink)]">
                    {totaux.circEcl + totaux.circPr + totaux.circDed + 2}
                  </strong>{" "}
                  <span className="text-xs">(+2 différentiels généraux)</span>
                </span>
              </div>
            </div>

            {/* Alertes globales */}
            {totaux.alertes.length > 0 && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="mb-3 text-sm font-semibold text-amber-800">
                  ⚠ {totaux.alertes.length} point
                  {totaux.alertes.length > 1 ? "s" : ""} RGIE à vérifier
                </p>
                <ul className="space-y-1">
                  {totaux.alertes.map((a, i) => (
                    <li
                      key={i}
                      className="text-xs text-amber-700 before:mr-2 before:content-['•']"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer */}
            <p className="mt-6 text-center text-xs text-[color:var(--muted)]">
              Estimations basées sur les règles RGIE (éd. 2024) · Facteur de
              pose ×{FACTEUR_POSE} · À affiner avec métrés réels sur plan.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
