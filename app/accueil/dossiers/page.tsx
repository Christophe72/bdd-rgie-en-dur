"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const STATUTS_LABEL: Record<string, { label: string; color: string }> = {
  A_DEVISER:               { label: "À deviser",             color: "bg-neutral-200 text-neutral-700" },
  DEVIS_ENVOYE:            { label: "Devis envoyé",           color: "bg-blue-100 text-blue-700" },
  ACCEPTE:                 { label: "Accepté",                color: "bg-emerald-100 text-emerald-700" },
  EN_COURS:                { label: "En cours",               color: "bg-amber-100 text-amber-700" },
  EN_ATTENTE_FOURNISSEUR:  { label: "Attente fournisseur",    color: "bg-orange-100 text-orange-700" },
  EN_ATTENTE_PAIEMENT:     { label: "Attente paiement",       color: "bg-rose-100 text-rose-700" },
  CLOTURE:                 { label: "Clôturé",                color: "bg-gray-100 text-gray-500" },
};

const TYPES_LABEL: Record<string, string> = {
  RESIDENTIEL: "Résidentiel",
  TERTIAIRE: "Tertiaire",
  INDUSTRIEL: "Industriel",
};

type Client = { nom: string; prenom: string | null; email: string | null };
type Dossier = {
  id: string;
  reference: string;
  titre: string;
  typeInstallation: string;
  statut: string;
  adresseChantier: string | null;
  createdAt: string;
  client: Client;
};

export default function DossiersPage() {
  const router = useRouter();
  const [dossiers, setDossiers] = useState<Dossier[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statut, setStatut] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const limit = 15;

  const fetchDossiers = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        ...(search ? { search } : {}),
        ...(statut ? { statut } : {}),
      });
      const res = await fetch(`/api/dossiers?${params}`);
      const data = await res.json();
      setDossiers(data.data ?? []);
      setTotal(data.total ?? 0);
    } catch {
      setDossiers([]);
    } finally {
      setLoading(false);
    }
  }, [page, search, statut]);

  useEffect(() => { fetchDossiers(); }, [fetchDossiers]);

  const handleDelete = async (id: string) => {
    setDeleting(id);
    try {
      await fetch(`/api/dossiers/${id}`, { method: "DELETE" });
      fetchDossiers();
    } finally {
      setDeleting(null);
      setConfirmDelete(null);
    }
  };

  const pages = Math.ceil(total / limit);

  return (
    <main className="min-h-screen px-4 py-10 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="fade-up mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-lg text-[color:var(--muted)] transition hover:-translate-y-0.5"
            >
              ←
            </button>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">Gestion</p>
              <h1 className="text-2xl font-semibold text-[color:var(--ink)]">Dossiers RGIE</h1>
            </div>
          </div>
          <Link
            href="/accueil/ajout-dossier"
            className="inline-flex h-11 items-center rounded-xl bg-[color:var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_16px_35px_-22px_rgba(226,107,44,0.8)] transition hover:-translate-y-0.5"
          >
            + Nouveau dossier
          </Link>
        </div>

        {/* Filtres */}
        <div className="fade-up fade-delay-1 mb-5 flex flex-wrap gap-3 rounded-2xl border border-black/10 bg-[color:var(--surface)] p-4">
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Rechercher (titre, référence, adresse)…"
            className="h-10 flex-1 min-w-[200px] rounded-xl border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
          />
          <select
            value={statut}
            onChange={(e) => { setStatut(e.target.value); setPage(1); }}
            className="h-10 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
          >
            <option value="">Tous les statuts</option>
            {Object.entries(STATUTS_LABEL).map(([v, s]) => (
              <option key={v} value={v}>{s.label}</option>
            ))}
          </select>
          <span className="flex h-10 items-center rounded-xl bg-[color:var(--panel)] px-3 text-sm text-[color:var(--muted)]">
            {total} dossier{total !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Table */}
        <div className="fade-up fade-delay-2 overflow-hidden rounded-[24px] border border-black/10 bg-[color:var(--surface)]">
          {loading ? (
            <div className="flex items-center justify-center py-20 text-sm text-[color:var(--muted)]">
              Chargement…
            </div>
          ) : dossiers.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-sm text-[color:var(--muted)]">
              <span className="text-4xl">📂</span>
              Aucun dossier trouvé.{" "}
              <Link href="/accueil/ajout-dossier" className="font-semibold text-[color:var(--accent)] underline underline-offset-2">
                Créer le premier
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/10 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    <th className="px-5 py-4">Référence</th>
                    <th className="px-5 py-4">Titre</th>
                    <th className="px-5 py-4">Client</th>
                    <th className="px-5 py-4">Type</th>
                    <th className="px-5 py-4">Statut</th>
                    <th className="px-5 py-4">Créé le</th>
                    <th className="px-5 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dossiers.map((d) => {
                    const st = STATUTS_LABEL[d.statut] ?? { label: d.statut, color: "bg-gray-100 text-gray-500" };
                    return (
                      <tr
                        key={d.id}
                        className="border-b border-black/5 transition last:border-0 hover:bg-[color:var(--panel)]"
                      >
                        <td className="px-5 py-4 font-mono text-xs font-semibold text-[color:var(--muted)]">
                          {d.reference}
                        </td>
                        <td className="px-5 py-4 font-medium text-[color:var(--ink)]">{d.titre}</td>
                        <td className="px-5 py-4 text-[color:var(--muted)]">
                          {d.client.nom} {d.client.prenom ?? ""}
                        </td>
                        <td className="px-5 py-4 text-[color:var(--muted)]">
                          {TYPES_LABEL[d.typeInstallation] ?? d.typeInstallation}
                        </td>
                        <td className="px-5 py-4">
                          <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${st.color}`}>
                            {st.label}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-[color:var(--muted)]">
                          {new Date(d.createdAt).toLocaleDateString("fr-BE")}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <div className="inline-flex items-center gap-2">
                            <Link
                              href={`/accueil/dossiers/${d.id}`}
                              className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--ink)] transition hover:-translate-y-0.5"
                            >
                              Voir
                            </Link>
                            <Link
                              href={`/accueil/dossiers/${d.id}/edit`}
                              className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--accent-2)] transition hover:-translate-y-0.5"
                            >
                              Modifier
                            </Link>
                            {confirmDelete === d.id ? (
                              <>
                                <button
                                  onClick={() => handleDelete(d.id)}
                                  disabled={deleting === d.id}
                                  className="rounded-lg bg-red-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600 disabled:opacity-50"
                                >
                                  Confirmer
                                </button>
                                <button
                                  onClick={() => setConfirmDelete(null)}
                                  className="rounded-lg border border-black/10 bg-white px-2 py-1.5 text-xs text-[color:var(--muted)]"
                                >
                                  ✕
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => setConfirmDelete(d.id)}
                                className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-500 transition hover:-translate-y-0.5"
                              >
                                Supprimer
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <div className="mt-5 flex items-center justify-center gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="h-9 rounded-xl border border-black/10 bg-white px-4 text-sm font-medium text-[color:var(--muted)] disabled:opacity-40"
            >
              ← Préc.
            </button>
            <span className="text-sm text-[color:var(--muted)]">
              Page {page} / {pages}
            </span>
            <button
              disabled={page >= pages}
              onClick={() => setPage((p) => p + 1)}
              className="h-9 rounded-xl border border-black/10 bg-white px-4 text-sm font-medium text-[color:var(--muted)] disabled:opacity-40"
            >
              Suiv. →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
