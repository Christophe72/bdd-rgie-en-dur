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
    <main className="mx-auto max-w-230 p-4">
      <h1 className="mb-2 text-3xl font-semibold">BDD RGIE</h1>
      <p className="mt-0">Accès rapide à la base de connaissances RGIE.</p>

      <section className="mt-4 grid gap-3">
        <form
          action="/rgie"
          method="get"
          className="grid gap-2"
          onSubmit={handleSubmit}
        >
          <label htmlFor="home-search" className="text-sm font-medium">
            Recherche rapide
          </label>
          <div className="flex gap-2">
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
              className="rounded-[10px] border border-neutral-300 px-4 py-2"
            >
              Rechercher
            </button>
          </div>
        </form>

        <Link
          href="/rgie"
          className="block rounded-[10px] border border-neutral-200 p-3 no-underline"
        >
          <strong>Rechercher dans la BDD RGIE</strong>
          <p className="mt-1.5">
            Ouvrir la recherche par mots-clés, catégorie ou référence.
          </p>
        </Link>
      </section>

      <h2 className="mt-6 text-xl font-semibold">Articles rapides</h2>
      <section className="grid gap-2">
        {quickLinks.map((link) => (
          <Link key={link.id} href={`/rgie/${link.id}`}>
            {link.id} — {link.label}
          </Link>
        ))}
      </section>
    </main>
  );
}
