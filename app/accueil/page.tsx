import Link from "next/link";

const kpis = [
  { label: "Dossiers ouverts", value: "18", trend: "+3 cette semaine" },
  { label: "Controles planifies", value: "7", trend: "Prochain: jeudi" },
  { label: "Anomalies critiques", value: "2", trend: "A verifier" },
];

const tasks = [
  {
    title: "Verifier les protections differentiels",
    detail: "Atelier Alpha - zone 4",
    status: "Prioritaire",
  },
  {
    title: "Mettre a jour le schema d'implantation",
    detail: "Dossier 21B - revision 2",
    status: "En cours",
  },
  {
    title: "Preparer le rapport de conformite",
    detail: "Inspection 18/02",
    status: "A planifier",
  },
];

const shortcuts = [
  {
    title: "Recherche RGIE",
    description: "Ouvrir la base documentaire complete.",
    href: "/rgie",
  },
  {
    title: "Nouveau dossier",
    description: "Creer un suivi pour une installation.",
    href: "/accueil/ajout-dossier",
  },
  {
    title: "Estimateur câblage",
    description: "Calculer métrés câble et matériel selon RGIE.",
    href: "/accueil/estimateur",
  },
  {
    title: "Tous les dossiers",
    description: "Consulter et gérer les dossiers ouverts.",
    href: "/accueil/dossiers",
  },
];

export default function AccueilPage() {
  return (
    <main className="min-h-screen px-4 py-10 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="fade-up flex flex-wrap items-start justify-between gap-6 rounded-[28px] border border-black/10 bg-[color:var(--surface)] p-8 shadow-[0_24px_70px_-50px_rgba(0,0,0,0.5)]">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Dashboard RGIE
            </p>
            <h1 className="text-3xl font-semibold text-[color:var(--ink)] md:text-4xl">
              Bonjour, voici la vue d'ensemble.
            </h1>
            <p className="text-sm text-[color:var(--muted)]">
              Suivi temps reel des priorites et des controles techniques.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/accueil/ajout-dossier"
              className="inline-flex h-11 items-center rounded-xl border border-black/10 bg-white px-4 text-sm font-semibold text-[color:var(--ink)] transition hover:-translate-y-0.5"
            >
              + Ajouter un dossier
            </Link>
            <Link
              href="/accueil/dossiers"
              className="inline-flex h-11 items-center rounded-xl bg-[color:var(--accent-2)] px-4 text-sm font-semibold text-white shadow-[0_18px_35px_-22px_rgba(31,127,106,0.8)] transition hover:-translate-y-0.5"
            >
              Tous les dossiers
            </Link>
          </div>
        </header>

        <section className="fade-up fade-delay-1 grid gap-4 md:grid-cols-3">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-[24px] border border-black/10 bg-[color:var(--panel)] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                {kpi.label}
              </p>
              <p className="mt-4 text-3xl font-semibold text-[color:var(--ink)]">
                {kpi.value}
              </p>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {kpi.trend}
              </p>
            </div>
          ))}
        </section>

        <section className="fade-up fade-delay-2 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[26px] border border-black/10 bg-[color:var(--surface)] p-6">
            <h2 className="text-lg font-semibold text-[color:var(--ink)]">
              Actions prioritaires
            </h2>
            <div className="mt-4 grid gap-3">
              {tasks.map((task) => (
                <div
                  key={task.title}
                  className="flex flex-col gap-1 rounded-2xl border border-black/10 bg-white/80 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-[color:var(--ink)]">
                      {task.title}
                    </p>
                    <span className="rounded-full bg-[color:var(--accent)] px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                      {task.status}
                    </span>
                  </div>
                  <p className="text-sm text-[color:var(--muted)]">
                    {task.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-black/10 bg-[color:var(--surface)] p-6">
            <h2 className="text-lg font-semibold text-[color:var(--ink)]">
              Raccourcis utiles
            </h2>
            <div className="mt-4 grid gap-3">
              {shortcuts.map((shortcut) => (
                <Link
                  key={shortcut.title}
                  href={shortcut.href}
                  className="rounded-2xl border border-black/10 bg-white/80 p-4 transition hover:-translate-y-0.5"
                >
                  <p className="text-sm font-semibold text-[color:var(--ink)]">
                    {shortcut.title}
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">
                    {shortcut.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
