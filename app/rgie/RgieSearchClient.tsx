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

export default function RgieSearchClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();

  const query = searchParams.get("q") ?? "";
  const [inputValue, setInputValue] = useState(query);
  const [taskInput, setTaskInput] = useState("");
  const [taskCheck, setTaskCheck] = useState<{
    verdict: "a_preciser" | "attention" | "plutot_ok";
    message: string;
    matches: Array<RgieArticle & { score: number }>;
  } | null>(null);
  const [selectedItem, setSelectedItem] = useState<RgieArticle | null>(null);
  const normalizedQuery = normalize(query);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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

  const verifierTache = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const description = taskInput.trim();
    if (description.length < 10) {
      setTaskCheck({
        verdict: "a_preciser",
        message:
          "Décrivez un peu plus la tâche (matériel, lieu, protection, contrôle) pour vérifier les règles RGIE.",
        matches: [],
      });
      return;
    }

    const normalizedDescription = normalize(description);
    const tokens = Array.from(
      new Set(
        normalizedDescription
          .replace(/[^a-z0-9\s]/g, " ")
          .split(/\s+/)
          .filter((token) => token.length >= 3),
      ),
    );

    const scored = allItems
      .map((item) => {
        const searchable = normalize(
          [
            item.id,
            item.titre,
            item.categorie,
            item.importance,
            item.explication_profane,
            item.contenu,
            ...(Array.isArray(item.mots_cles) ? item.mots_cles : []),
          ].join(" "),
        );

        let score = 0;

        if (normalizedDescription.includes(normalize(item.id))) {
          score += 6;
        }

        for (const token of tokens) {
          if (searchable.includes(token)) {
            score += 1;
          }
        }

        if (Array.isArray(item.mots_cles)) {
          for (const motCle of item.mots_cles) {
            if (normalizedDescription.includes(normalize(motCle))) {
              score += 2;
            }
          }
        }

        return { ...item, score };
      })
      .filter((item) => item.score > 1)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    if (scored.length === 0) {
      setTaskCheck({
        verdict: "a_preciser",
        message:
          "Aucune règle RGIE suffisamment proche trouvée. Ajoutez plus de détails techniques (circuit, section, DDR, salle d'eau, tableau, etc.).",
        matches: [],
      });
      return;
    }

    const hasCritical = scored.some((item) => item.importance === "critique");
    const hasManyMatches = scored.length >= 3;

    if (hasCritical) {
      setTaskCheck({
        verdict: "attention",
        message:
          "Points critiques détectés. Vérifiez ces articles avant exécution pour rester conforme RGIE.",
        matches: scored,
      });
      return;
    }

    setTaskCheck({
      verdict: hasManyMatches ? "plutot_ok" : "attention",
      message: hasManyMatches
        ? "La tâche semble globalement cohérente avec les règles trouvées, sous réserve de contrôle sur chantier."
        : "Des points de vigilance existent; contrôlez les articles proposés avant validation.",
      matches: scored,
    });
  };

  const recommandations = (importance: string) => {
    if (importance === "critique") {
      return "Coupez l'alimentation en cas de doute et faites intervenir un électricien qualifié.";
    }

    if (importance === "élevée") {
      return "Prévoyez une vérification par un professionnel avant mise en service.";
    }

    return "Conservez cette règle comme bonne pratique et contrôlez-la lors d'une prochaine inspection.";
  };

  const importanceClass = (importance: string) => {
    if (importance === "critique") {
      return "border-neutral-700 bg-neutral-700 text-white";
    }
    if (importance === "élevée") {
      return "border-neutral-500 bg-neutral-500 text-white";
    }
    return "border-neutral-300 bg-neutral-100 text-neutral-700";
  };

  const verdictClass = (verdict: "a_preciser" | "attention" | "plutot_ok") => {
    if (verdict === "plutot_ok") {
      return "border-neutral-700 bg-neutral-700 text-white";
    }
    if (verdict === "attention") {
      return "border-neutral-500 bg-neutral-500 text-white";
    }
    return "border-neutral-300 bg-neutral-100 text-neutral-700";
  };

  return (
    <main className="mx-auto max-w-230 p-4 md:p-6">
      <section className="rounded-2xl border border-neutral-200 p-5">
        <h1 className="text-3xl font-semibold md:text-4xl">Recherche RGIE</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Tapez un mot-clé et cliquez sur une carte pour ouvrir l&apos;explication.
        </p>
      </section>

      <div className="mt-5 grid gap-2 rounded-2xl border border-neutral-200 p-5">
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

      <section className="mt-5 rounded-2xl border border-neutral-200 p-5">
        <h2 className="text-lg font-semibold">Vérifier une tâche selon le RGIE</h2>
        <p className="mt-1 text-sm text-neutral-600">
          Décrivez la tâche à faire. Le système compare ensuite votre texte avec les règles de la base [data/rgieData.js].
        </p>

        <form onSubmit={verifierTache} className="mt-3 grid gap-3">
          <textarea
            value={taskInput}
            onChange={(event) => setTaskInput(event.target.value)}
            placeholder="Exemple: Ajouter un circuit prise cuisine en 2,5 mm² avec disjoncteur 20A et DDR 30mA..."
            rows={4}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2"
          />
          <div>
            <button
              type="submit"
              className="rounded-[10px] border border-neutral-300 px-4 py-2 font-medium"
            >
              Vérifier la tâche
            </button>
          </div>
        </form>

        {taskCheck && (
          <div className="mt-4 rounded-xl border border-neutral-200 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-md border px-2 py-1 text-xs font-semibold ${verdictClass(taskCheck.verdict)}`}
              >
                {taskCheck.verdict === "plutot_ok"
                  ? "Verdict: plutôt OK"
                  : taskCheck.verdict === "attention"
                    ? "Verdict: attention"
                    : "Verdict: à préciser"}
              </span>
            </div>

            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              {taskCheck.message}
            </p>

            {taskCheck.matches.length > 0 && (
              <div className="mt-3 grid gap-2">
                <p className="text-sm font-semibold">Articles à vérifier d&apos;abord</p>
                {taskCheck.matches.map((item) => (
                  <Link
                    key={`task-${item.id}`}
                    href={`/rgie/${item.id}`}
                    className="rounded-lg border border-neutral-200 p-3 text-sm transition hover:border-neutral-400"
                  >
                    <span className="font-semibold">
                      {item.id} — {item.titre}
                    </span>
                    <span className="ml-2 text-xs text-neutral-500">
                      ({item.importance})
                    </span>
                    <p className="mt-1 text-neutral-600">
                      {item.explication_profane_mobile}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      <p className="mt-4 text-sm text-neutral-600">
        {items.length} résultat(s)
        {query ? ` pour “${query}”` : ""}
      </p>

      <section className="mt-3 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedItem(item)}
            className="block rounded-xl border border-neutral-200 p-4 text-left transition hover:border-neutral-400"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-neutral-300 px-2 py-0.5 text-xs font-semibold text-neutral-700">
                {item.id}
              </span>
              <span
                className={`rounded-md border px-2 py-0.5 text-xs font-semibold ${importanceClass(item.importance)}`}
              >
                {item.importance}
              </span>
              <span className="rounded-md border border-neutral-300 px-2 py-0.5 text-xs text-neutral-700">
                {item.categorie}
              </span>
            </div>
            <p className="font-semibold">{item.titre}</p>
            <p className="mt-1.5 text-sm text-neutral-600">
              {item.explication_profane_mobile}
            </p>
          </button>
        ))}
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-3xl overflow-auto rounded-2xl border border-neutral-200 bg-background p-5 md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold">
                {selectedItem.id} — {selectedItem.titre}
              </h2>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm"
              >
                Fermer
              </button>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-md border border-neutral-300 px-2 py-1">
                Catégorie : {selectedItem.categorie}
              </span>
              <span
                className={`rounded-md border px-2 py-1 ${importanceClass(selectedItem.importance)}`}
              >
                Importance : {selectedItem.importance}
              </span>
            </div>

            <h3 className="mt-5 font-semibold">Explication</h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              {selectedItem.explication_profane}
            </p>

            <h3 className="mt-4 font-semibold">Recommandation</h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              {recommandations(selectedItem.importance)}
            </p>

            {Array.isArray(selectedItem.mots_cles) &&
              selectedItem.mots_cles.length > 0 && (
                <>
                  <h3 className="mt-4 font-semibold">Mots-clés</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedItem.mots_cles.map((mot) => (
                      <span
                        key={mot}
                        className="rounded-full border border-neutral-300 px-2.5 py-1 text-xs"
                      >
                        {mot}
                      </span>
                    ))}
                  </div>
                </>
              )}

            <div className="mt-5">
              <Link
                href={`/rgie/${selectedItem.id}`}
                className="inline-block rounded-md border border-neutral-300 px-3 py-2 font-medium"
              >
                Voir la fiche complète
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
