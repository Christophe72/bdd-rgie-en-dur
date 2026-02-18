import Link from "next/link";
import { notFound } from "next/navigation";
import { rgieArticles } from "../../../data/rgieData.js";
type RgieArticle = {
  id: string;
  titre: string;
  categorie: string;
  importance: string;
  explication_profane: string;
  contenu: string;
  mots_cles?: string[];
};

type Props = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return (rgieArticles as RgieArticle[]).map((article) => ({
    id: article.id,
  }));
}

export default async function RgieDetailPage({ params }: Props) {
  const { id } = await params;
  const article = (rgieArticles as RgieArticle[]).find(
    (entry) => entry.id === id,
  );

  if (!article) {
    notFound();
  }

  const importanceClass =
    article.importance === "critique"
      ? "border-neutral-700 bg-neutral-700 text-white"
      : article.importance === "élevée"
        ? "border-neutral-500 bg-neutral-500 text-white"
        : "border-neutral-300 bg-neutral-100 text-neutral-700";

  return (
    <main className="mx-auto max-w-230 p-4 md:p-6">
      <Link
        href="/rgie"
        className="inline-block rounded-md border border-neutral-300 px-3 py-1.5 text-sm"
      >
        ← Retour recherche
      </Link>

      <section className="mt-4 rounded-2xl border border-neutral-200 p-5 md:p-6">
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          Article {article.id}
        </p>
        <h1 className="mt-2 text-2xl font-semibold md:text-3xl">
          {article.titre}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-md border border-neutral-300 px-2 py-1">
            Catégorie : {article.categorie}
          </span>
          <span className={`rounded-md border px-2 py-1 ${importanceClass}`}>
            Importance : {article.importance}
          </span>
        </div>
      </section>

      <section className="mt-4 rounded-2xl border border-neutral-200 p-5 md:p-6">
        <h2 className="text-lg font-semibold">Explication simple</h2>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          {article.explication_profane}
        </p>
      </section>

      <section className="mt-4 rounded-2xl border border-neutral-200 p-5 md:p-6">
        <h2 className="text-lg font-semibold">Texte technique</h2>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          {article.contenu}
        </p>
      </section>

      {Array.isArray(article.mots_cles) && article.mots_cles.length > 0 && (
        <section className="mt-4 rounded-2xl border border-neutral-200 p-5 md:p-6">
          <h2 className="text-lg font-semibold">Mots-clés</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {article.mots_cles.map((mot) => (
              <span
                key={mot}
                className="rounded-full border border-neutral-300 px-2.5 py-1 text-xs"
              >
                {mot}
              </span>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
