"use client";

import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

const STATUTS_LABEL: Record<string, { label: string; color: string }> = {
  A_DEVISER:              { label: "À deviser",           color: "bg-neutral-200 text-neutral-700" },
  DEVIS_ENVOYE:           { label: "Devis envoyé",         color: "bg-blue-100 text-blue-700" },
  ACCEPTE:                { label: "Accepté",              color: "bg-emerald-100 text-emerald-700" },
  EN_COURS:               { label: "En cours",             color: "bg-amber-100 text-amber-700" },
  EN_ATTENTE_FOURNISSEUR: { label: "Attente fournisseur",  color: "bg-orange-100 text-orange-700" },
  EN_ATTENTE_PAIEMENT:    { label: "Attente paiement",     color: "bg-rose-100 text-rose-700" },
  CLOTURE:                { label: "Clôturé",              color: "bg-gray-100 text-gray-500" },
};

const RGIE_COLOR: Record<string, string> = {
  CONFORME:     "bg-emerald-100 text-emerald-700",
  NON_CONFORME: "bg-red-100 text-red-700",
  AVERTISSEMENT:"bg-amber-100 text-amber-700",
};

type Dossier = {
  id: string;
  reference: string;
  titre: string;
  typeInstallation: string;
  statut: string;
  description: string | null;
  adresseChantier: string | null;
  createdAt: string;
  client: { nom: string; prenom: string | null; email: string | null; telephone: string | null; adresse: string | null };
  circuits: { id: string; nom: string; type: string; etat: string; amperage: number | null; protections: { id: string; type: string; calibre: number; courbe: string | null; typeDiff: string | null }[] }[];
  pointsControle: { id: string; articleRgie: string; libelle: string; statut: string; observation: string | null }[];
  diagnostics: { id: string; statut: string; observations: string | null; conclusions: string | null; realiseAt: string | null }[];
};

export default function DossierDetailPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [dossier, setDossier] = useState<Dossier | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/dossiers/${id}`)
      .then((r) => { if (!r.ok) throw new Error("Dossier introuvable"); return r.json(); })
      .then(setDossier)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4 text-sm text-[color:var(--muted)]">
        Chargement…
      </main>
    );
  }

  if (error || !dossier) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <p className="text-sm font-medium text-red-600">{error ?? "Dossier introuvable"}</p>
          <button onClick={() => router.back()} className="mt-4 text-sm underline text-[color:var(--muted)]">Retour</button>
        </div>
      </main>
    );
  }

  const st = STATUTS_LABEL[dossier.statut] ?? { label: dossier.statut, color: "bg-gray-100 text-gray-500" };

  return (
    <main className="min-h-screen px-4 py-10 md:px-8">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        {/* Header */}
        <div className="fade-up flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-lg text-[color:var(--muted)] transition hover:-translate-y-0.5"
            >
              ←
            </button>
            <div>
              <p className="font-mono text-xs text-[color:var(--muted)]">{dossier.reference}</p>
              <h1 className="text-2xl font-semibold text-[color:var(--ink)]">{dossier.titre}</h1>
            </div>
          </div>
          <div className="flex gap-3">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${st.color}`}>
              {st.label}
            </span>
            <Link
              href={`/accueil/dossiers/${dossier.id}/edit`}
              className="inline-flex h-10 items-center rounded-xl border border-black/10 bg-white px-4 text-sm font-semibold text-[color:var(--accent-2)] transition hover:-translate-y-0.5"
            >
              Modifier
            </Link>
          </div>
        </div>

        {/* Infos principales */}
        <div className="fade-up fade-delay-1 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Type d'installation", value: dossier.typeInstallation },
            { label: "Adresse chantier", value: dossier.adresseChantier ?? "—" },
            { label: "Client", value: `${dossier.client.nom} ${dossier.client.prenom ?? ""}` },
            { label: "Email", value: dossier.client.email ?? "—" },
            { label: "Téléphone", value: dossier.client.telephone ?? "—" },
            { label: "Créé le", value: new Date(dossier.createdAt).toLocaleDateString("fr-BE") },
          ].map((info) => (
            <div key={info.label} className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">{info.label}</p>
              <p className="mt-2 text-sm font-medium text-[color:var(--ink)]">{info.value}</p>
            </div>
          ))}
        </div>

        {dossier.description && (
          <div className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Description</p>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]">{dossier.description}</p>
          </div>
        )}

        {/* Circuits */}
        {dossier.circuits.length > 0 && (
          <div className="rounded-[24px] border border-black/10 bg-[color:var(--surface)] p-6">
            <h2 className="text-base font-semibold text-[color:var(--ink)]">Circuits ({dossier.circuits.length})</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {dossier.circuits.map((c) => (
                <div key={c.id} className="rounded-2xl border border-black/10 bg-white/80 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[color:var(--ink)]">{c.nom}</p>
                    <span className="text-xs text-[color:var(--muted)]">{c.type}</span>
                  </div>
                  {c.amperage && <p className="mt-1 text-xs text-[color:var(--muted)]">{c.amperage} A</p>}
                  {c.protections.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {c.protections.map((p) => (
                        <span key={p.id} className="rounded-md bg-[color:var(--panel)] px-2 py-0.5 text-[11px] font-medium text-[color:var(--muted)]">
                          {p.type} {p.calibre}A{p.courbe ? ` C${p.courbe}` : ""}{p.typeDiff ? ` ${p.typeDiff}` : ""}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Points contrôle RGIE */}
        {dossier.pointsControle.length > 0 && (
          <div className="rounded-[24px] border border-black/10 bg-[color:var(--surface)] p-6">
            <h2 className="text-base font-semibold text-[color:var(--ink)]">Points de contrôle RGIE ({dossier.pointsControle.length})</h2>
            <div className="mt-4 divide-y divide-black/5">
              {dossier.pointsControle.map((p) => (
                <div key={p.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                  <span className={`mt-0.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${RGIE_COLOR[p.statut] ?? "bg-gray-100 text-gray-500"}`}>
                    {p.statut.replace("_", " ")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[color:var(--ink)]">
                      <span className="font-mono text-xs text-[color:var(--muted)]">{p.articleRgie} </span>
                      {p.libelle}
                    </p>
                    {p.observation && (
                      <p className="mt-0.5 text-xs text-[color:var(--muted)]">{p.observation}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Diagnostics */}
        {dossier.diagnostics.length > 0 && (
          <div className="rounded-[24px] border border-black/10 bg-[color:var(--surface)] p-6">
            <h2 className="text-base font-semibold text-[color:var(--ink)]">Diagnostics ({dossier.diagnostics.length})</h2>
            <div className="mt-4 grid gap-3">
              {dossier.diagnostics.map((d) => (
                <div key={d.id} className="rounded-2xl border border-black/10 bg-white/80 p-4">
                  <p className="text-sm font-semibold text-[color:var(--ink)]">{d.statut}</p>
                  {d.observations && <p className="mt-1 text-xs text-[color:var(--muted)]">{d.observations}</p>}
                  {d.conclusions && <p className="mt-1 text-xs font-medium text-[color:var(--ink)]">{d.conclusions}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
