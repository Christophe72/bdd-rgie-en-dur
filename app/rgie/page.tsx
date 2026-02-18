"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { rgieArticles } from "../../data/rgieData.js";

type RgieArticle = {
  id: string;
  titre: string;
  categorie: string;
  importance: string;
  explication_profane_mobile: string;
  explication_profane: string;
  contenu: string;
  mots_cles?: string[];
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

export default function RgiePage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();

  const query = searchParams.get("q") ?? "";
  const [inputValue, setInputValue] = useState(query);
  const normalizedQuery = normalize(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams(searchParamsString);
      if (inputValue.trim().length > 0) {
        params.set("q", inputValue);
      } else {
        params.delete("q");
      }

      const nextQuery = params.get("q") ?? "";
      if (nextQuery === query) {
        return;
      }

      const nextUrl = params.toString()
        ? `${pathname}?${params.toString()}`
        : pathname;
      router.replace(nextUrl, { scroll: false });
    }, 150);

    return () => window.clearTimeout(timer);
  }, [inputValue, pathname, query, router, searchParamsString]);

  const allItems = rgieArticles as RgieArticle[];
  const filteredItems =
    normalizedQuery.length === 0
      ? allItems
      : allItems.filter((item) => {
          const haystack = [
            item.id,
            item.titre,
            item.categorie,
            item.importance,
            item.explication_profane,
            item.contenu,
            ...(Array.isArray(item.mots_cles) ? item.mots_cles : []),
          ]
            .join(" ")
            .toString();

          return normalize(haystack).includes(normalizedQuery);
        });

  const items = filteredItems.slice(0, 100);

  return (
    <main className="mx-auto max-w-230 p-4">
      <h1 className="mb-3 text-3xl font-semibold">
        Recherche RGIE (classique)
      </h1>

      <div className="grid gap-2">
        <label htmlFor="rgie-search" className="text-sm font-medium">
          Rechercher dans la base
        </label>
        <input
          id="rgie-search"
          name="q"
          type="search"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Ex: différentiel, salle de bain, 4.2.1"
          className="w-full rounded-[10px] border border-neutral-300 px-3 py-2"
        />
      </div>

      <p className="mt-4 text-sm text-neutral-600">
        {items.length} résultat(s)
        {query ? ` pour “${query}”` : ""}
      </p>

      <section className="mt-3 grid gap-3">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/rgie/${item.id}`}
            className="block rounded-[10px] border border-neutral-200 p-3 no-underline"
          >
            <strong>
              {item.id} — {item.titre}
            </strong>
            <p className="mt-1.5">{item.explication_profane_mobile}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
