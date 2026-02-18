"use client";

import { useRouter } from "next/navigation";
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

type Client = { id: string; nom: string; prenom: string | null; email: string | null };

type FormState = {
  titre: string;
  reference: string;
  typeInstallation: string;
  statut: string;
  description: string;
  adresseChantier: string;
  clientId: string;
};

const EMPTY: FormState = {
  titre: "",
  reference: "",
  typeInstallation: "RESIDENTIEL",
  statut: "A_DEVISER",
  description: "",
  adresseChantier: "",
  clientId: "",
};

export default function AjoutDossierPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [clients, setClients] = useState<Client[]>([]);
  const [clientSearch, setClientSearch] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Nouveau client inline
  const [showNewClient, setShowNewClient] = useState(false);
  const [newClient, setNewClient] = useState({ nom: "", prenom: "", email: "", telephone: "" });
  const [creatingClient, setCreatingClient] = useState(false);

  useEffect(() => {
    fetch(`/api/clients?search=${encodeURIComponent(clientSearch)}`)
      .then((r) => r.json())
      .then((data) => setClients(Array.isArray(data) ? data : []))
      .catch(() => setClients([]));
  }, [clientSearch]);

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleCreateClient = async () => {
    if (!newClient.nom.trim()) return;
    setCreatingClient(true);
    try {
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newClient),
      });
      const created = await res.json();
      if (!res.ok) throw new Error(created.error ?? "Erreur");
      setClients((prev) => [created, ...prev]);
      setForm((prev) => ({ ...prev, clientId: created.id }));
      setShowNewClient(false);
      setNewClient({ nom: "", prenom: "", email: "", telephone: "" });
    } catch (err: unknown) {
      setError((err as Error).message);
    } finally {
      setCreatingClient(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.clientId) { setError("Veuillez sélectionner ou créer un client."); return; }
    setSubmitting(true);
    try {
      const res = await fetch("/api/dossiers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erreur lors de la création");
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
        {/* Header */}
        <div className="fade-up mb-8 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-lg text-[color:var(--muted)] transition hover:-translate-y-0.5"
          >
            ←
          </button>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Nouveau dossier
            </p>
            <h1 className="text-2xl font-semibold text-[color:var(--ink)]">
              Créer un dossier RGIE
            </h1>
          </div>
        </div>

        {success && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
            Dossier créé avec succès — redirection en cours…
          </div>
        )}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="fade-up fade-delay-1 rounded-[28px] border border-black/10 bg-[color:var(--surface)] p-8 shadow-[0_24px_70px_-50px_rgba(0,0,0,0.45)]"
        >
          <div className="grid gap-5">
            {/* Titre + Reference */}
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelCls}>
                Titre du dossier *
                <input required value={form.titre} onChange={set("titre")} placeholder="Ex: Rénovation tableau RDC" className={inputCls} />
              </label>
              <label className={labelCls}>
                Référence *
                <input required value={form.reference} onChange={set("reference")} placeholder="Ex: DOS-2026-001" className={inputCls} />
              </label>
            </div>

            {/* Type + Statut */}
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

            {/* Adresse */}
            <label className={labelCls}>
              Adresse du chantier
              <input value={form.adresseChantier} onChange={set("adresseChantier")} placeholder="Rue, code postal, ville" className={inputCls} />
            </label>

            {/* Description */}
            <label className={labelCls}>
              Description
              <textarea
                value={form.description}
                onChange={set("description")}
                rows={3}
                placeholder="Contexte, observations, exigences particulières…"
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-[color:var(--ring)] resize-none"
              />
            </label>

            {/* Client */}
            <div className="rounded-2xl border border-black/10 bg-[color:var(--panel)] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-[color:var(--ink)]">Client *</p>
                <button
                  type="button"
                  onClick={() => setShowNewClient((v) => !v)}
                  className="text-xs font-semibold text-[color:var(--accent-2)] underline underline-offset-2"
                >
                  {showNewClient ? "Annuler" : "+ Nouveau client"}
                </button>
              </div>

              {showNewClient ? (
                <div className="grid gap-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      value={newClient.nom}
                      onChange={(e) => setNewClient((p) => ({ ...p, nom: e.target.value }))}
                      placeholder="Nom *"
                      className={inputCls}
                    />
                    <input
                      value={newClient.prenom}
                      onChange={(e) => setNewClient((p) => ({ ...p, prenom: e.target.value }))}
                      placeholder="Prénom"
                      className={inputCls}
                    />
                    <input
                      type="email"
                      value={newClient.email}
                      onChange={(e) => setNewClient((p) => ({ ...p, email: e.target.value }))}
                      placeholder="Email"
                      className={inputCls}
                    />
                    <input
                      value={newClient.telephone}
                      onChange={(e) => setNewClient((p) => ({ ...p, telephone: e.target.value }))}
                      placeholder="Téléphone"
                      className={inputCls}
                    />
                  </div>
                  <button
                    type="button"
                    disabled={creatingClient || !newClient.nom.trim()}
                    onClick={handleCreateClient}
                    className="h-10 rounded-xl bg-[color:var(--accent-2)] text-sm font-semibold text-white disabled:opacity-50"
                  >
                    {creatingClient ? "Création…" : "Créer le client"}
                  </button>
                </div>
              ) : (
                <div className="grid gap-3">
                  <input
                    value={clientSearch}
                    onChange={(e) => setClientSearch(e.target.value)}
                    placeholder="Rechercher un client…"
                    className={inputCls}
                  />
                  <div className="max-h-48 overflow-y-auto rounded-xl border border-black/10 bg-white">
                    {clients.length === 0 ? (
                      <p className="px-4 py-3 text-sm text-[color:var(--muted)]">Aucun client trouvé</p>
                    ) : (
                      clients.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, clientId: c.id }))}
                          className={`w-full px-4 py-3 text-left text-sm transition hover:bg-[color:var(--panel)] ${
                            form.clientId === c.id ? "bg-[color:var(--panel)] font-semibold" : ""
                          }`}
                        >
                          <span className="font-medium text-[color:var(--ink)]">
                            {c.nom} {c.prenom ?? ""}
                          </span>
                          {c.email && (
                            <span className="ml-2 text-[color:var(--muted)]">— {c.email}</span>
                          )}
                          {form.clientId === c.id && (
                            <span className="ml-2 text-[color:var(--accent-2)]">✓</span>
                          )}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting || success}
              className="mt-2 flex h-12 items-center justify-center rounded-xl bg-[color:var(--accent)] text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(226,107,44,0.8)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
            >
              {submitting ? "Enregistrement…" : "Créer le dossier"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
