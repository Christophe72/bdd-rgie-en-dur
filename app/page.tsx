"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const highlights = [
  {
    title: "Recherche RGIE instantanee",
    description: "Accede aux prescriptions, schemas et references en un clic.",
  },
  {
    title: "Tableau de bord equipe",
    description: "Suis les dossiers en cours et les controles prioritaires.",
  },
  {
    title: "Historique unifie",
    description: "Centralise les demandes et les decisions techniques.",
  },
];

export default function Home() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    router.push("/accueil");
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-10 md:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(226,107,44,0.22),_transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 rounded-full bg-[radial-gradient(circle,_rgba(31,127,106,0.25),_transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="fade-up flex flex-col justify-between gap-8 rounded-[28px] border border-black/10 bg-[color:var(--panel)] p-8 shadow-[0_30px_80px_-50px_rgba(20,18,15,0.5)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
              BDD RGIE Pro
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-[color:var(--ink)] md:text-5xl">
              Connecte-toi pour piloter les dossiers RGIE.
            </h1>
            <p className="max-w-xl text-base text-[color:var(--muted)] md:text-lg">
              Un espace unique pour consulter les prescriptions, coordonner les
              equipes et preparer les controles en atelier.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-1 rounded-2xl border border-black/10 bg-white/70 p-4"
              >
                <p className="text-sm font-semibold text-[color:var(--ink)]">
                  {item.title}
                </p>
                <p className="text-sm text-[color:var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="fade-up fade-delay-1 flex flex-col justify-center">
          <div className="rounded-[28px] border border-black/10 bg-[color:var(--surface)] p-8 shadow-[0_28px_80px_-50px_rgba(0,0,0,0.55)]">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">
                Acces securise
              </p>
              <h2 className="text-3xl font-semibold text-[color:var(--ink)]">
                Connexion
              </h2>
              <p className="text-sm text-[color:var(--muted)]">
                Utilise tes identifiants metier pour ouvrir le tableau de bord.
              </p>
            </div>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
                Email professionnel
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="prenom.nom@entreprise.fr"
                  className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-[color:var(--ring)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
                Mot de passe
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-[color:var(--ring)]"
                />
              </label>

              <div className="flex items-center justify-between text-sm text-[color:var(--muted)]">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 rounded border-black/20 text-[color:var(--accent-2)] focus:ring-[color:var(--ring)]"
                  />
                  Se souvenir de moi
                </label>
                <span className="text-xs">Besoin d'aide ?</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex h-12 items-center justify-center rounded-xl bg-[color:var(--accent)] text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(226,107,44,0.8)] transition hover:translate-y-[-1px] hover:shadow-[0_24px_50px_-22px_rgba(226,107,44,0.9)] disabled:cursor-wait disabled:opacity-70"
              >
                {isSubmitting ? "Connexion..." : "Entrer dans le dashboard"}
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-xs text-[color:var(--muted)]">
            Derniere mise a jour: 18 fevrier 2026.
          </p>
        </section>
      </div>
    </main>
  );
}
