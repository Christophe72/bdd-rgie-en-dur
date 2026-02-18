"use client";

import Link from "next/link";
import { useState } from "react";

const quickLinks = [
  { id: "4.2.2", label: "Protection contact direct" },
  { id: "5.1.1", label: "Calibre des protections" },
  { id: "6.4.5.1", label: "Résistance d'isolement" },
];

export default function Home() {
  const [search, setSearch] = useState(() => {
    if (typeof window !== "undefined") {
      const lastSearch = window.localStorage.getItem("rgie:last-search");
      return lastSearch || "";
    }
    return "";
  });

  const handleSubmit = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("rgie:last-search", search.trim());
    }
  };

  return (
    <main className="mx-auto max-w-230 p-4 md:p-6">
      <section className="rounded-2xl border border-neutral-200 p-5 md:p-6">
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          Base documentaire
        </p>
        <h1 className="mt-2 text-3xl font-semibold md:text-4xl">BDD RGIE</h1>
        <p className="mt-2 text-neutral-600">
          Accès rapide aux prescriptions, explications et recommandations.
        </p>
      </section>

      <section className="mt-5 rounded-2xl border border-neutral-200 p-5">
        <form
          action="/rgie"
          method="get"
          className="grid gap-2"
          onSubmit={handleSubmit}
        >
          <label htmlFor="home-search" className="text-sm font-medium">
            Recherche rapide
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              id="home-search"
              name="q"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Ex: différentiel, salle de bain, 4.2.1"
              className="w-full rounded-[10px] border border-neutral-300 px-3 py-2"
            />
            <button
              type="submit"
              className="rounded-[10px] border border-neutral-300 px-4 py-2 font-medium"
            >
              Rechercher
            </button>
          </div>
        </form>
      </section>

      <section className="mt-4 grid gap-3">
        <Link
          href="/rgie"
          className="block rounded-xl border border-neutral-200 p-4 no-underline transition hover:border-neutral-400"
        >
          <p className="text-sm font-semibold">Rechercher dans la BDD RGIE</p>
          <p className="mt-1.5 text-sm text-neutral-600">
            Ouvrir la recherche par mots-clés, catégorie ou référence.
          </p>
        </Link>
      </section>

      <h2 className="mt-8 text-xl font-semibold">Articles rapides</h2>
      <section className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((link) => (
          <Link
            key={link.id}
            href={`/rgie/${link.id}`}
            className="rounded-xl border border-neutral-200 p-4 transition hover:border-neutral-400"
          >
            <p className="text-xs font-medium text-neutral-500">
              Article {link.id}
            </p>
            <p className="mt-1 font-semibold">{link.label}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
