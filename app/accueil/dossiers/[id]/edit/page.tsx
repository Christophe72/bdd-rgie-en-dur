"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

const TYPES_INSTALLATION = [
  { value: "RESIDENTIEL", label: "Résidentiel" },
  { value: "TERTIAIRE", label: "Tertiaire" },
  { value: "INDUSTRIEL", label: "Industriel" },
];

const STATUTS = [
  { value: "A_DEVISER", label: "À deviser" },
  { value: "DEVIS_ENVOYE", label: "Devis envoyé" },
  { value: "ACCEPTE", label: "Accepté" },
  { value: "EN_COURS", label: "En cours" },
  { value: "EN_ATTENTE_FOURNISSEUR", label: "En attente fournisseur" },
  { value: "EN_ATTENTE_PAIEMENT", label: "En attente paiement" },
  { value: "CLOTURE", label: "Clôturé" },
];

type FormState = {
  titre: string;
  reference: string;
  typeInstallation: string;
  statut: string;
  description: string;
  adresseChantier: string;
};

export default function EditDossierPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [form, setForm] = useState<FormState | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/dossiers/${id}`)
      .then((r) => r.json())
      .then((d) => {
        setForm({
          titre: d.titre ?? "",
          reference: d.reference ?? "",
          typeInstallation: d.typeInstallation ?? "RESIDENTIEL",
          statut: d.statut ?? "A_DEVISER",
          description: d.description ?? "",
          adresseChantier: d.adresseChantier ?? "",
        });
      })
      .catch(() => setError("Impossible de charger le dossier"))
      .finally(() => setLoading(false));
  }, [id]);

  const set = (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => prev ? { ...prev, [key]: e.target.value } : prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch(`/api/dossiers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erreur lors de la mise à jour");
      setSuccess(true);
      setTimeout(() => router.push("/accueil/dossiers"), 1200);
    } catch (err: unknown) {
      setError((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = "h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-[color:var(--ring)]";
  const labelCls = "grid gap-2 text-sm font-medium text-[color:var(--ink)]";

  return (
    <main className="min-h-screen px-4 py-10 md:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="fade-up mb-8 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-lg text-[color:var(--muted)] transition hover:-translate-y-0.5"
          >
            ←
          </button>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">Édition</p>
            <h1 className="text-2xl font-semibold text-[color:var(--ink)]">Modifier le dossier</h1>
          </div>
        </div>

        {success && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
            Dossier mis à jour — redirection…
          </div>
        )}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="rounded-[28px] border border-black/10 bg-[color:var(--surface)] p-10 text-center text-sm text-[color:var(--muted)]">
            Chargement…
          </div>
        ) : form ? (
          <form
            onSubmit={handleSubmit}
            className="fade-up fade-delay-1 rounded-[28px] border border-black/10 bg-[color:var(--surface)] p-8 shadow-[0_24px_70px_-50px_rgba(0,0,0,0.45)]"
          >
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelCls}>
                  Titre *
                  <input required value={form.titre} onChange={set("titre")} className={inputCls} />
                </label>
                <label className={labelCls}>
                  Référence *
                  <input required value={form.reference} onChange={set("reference")} className={inputCls} />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelCls}>
                  Type d'installation *
                  <select required value={form.typeInstallation} onChange={set("typeInstallation")} className={inputCls}>
                    {TYPES_INSTALLATION.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </label>
                <label className={labelCls}>
                  Statut
                  <select value={form.statut} onChange={set("statut")} className={inputCls}>
                    {STATUTS.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className={labelCls}>
                Adresse du chantier
                <input value={form.adresseChantier} onChange={set("adresseChantier")} className={inputCls} />
              </label>
              <label className={labelCls}>
                Description
                <textarea
                  value={form.description}
                  onChange={set("description")}
                  rows={4}
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-[color:var(--ring)] resize-none"
                />
              </label>
              <button
                type="submit"
                disabled={submitting || success}
                className="mt-2 flex h-12 items-center justify-center rounded-xl bg-[color:var(--accent-2)] text-sm font-semibold text-white shadow-[0_18px_35px_-22px_rgba(31,127,106,0.8)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
              >
                {submitting ? "Enregistrement…" : "Enregistrer les modifications"}
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </main>
  );
}
