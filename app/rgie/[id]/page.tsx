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

export default async function RgieDetailPage({ params }: Props) {
  const { id } = await params;
  const article = (rgieArticles as RgieArticle[]).find(
    (entry) => entry.id === id,
  );

  if (!article) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: "1rem" }}>
      <p>
        <Link href="/rgie">← Retour recherche</Link>
      </p>
      <h1>
        {article.id} — {article.titre}
      </h1>
      <p>
        <strong>Catégorie:</strong> {article.categorie}
      </p>
      <p>
        <strong>Importance:</strong> {article.importance}
      </p>

      <h2>Explication simple</h2>
      <p>{article.explication_profane}</p>

      <h2>Texte technique</h2>
      <p>{article.contenu}</p>

      {Array.isArray(article.mots_cles) && article.mots_cles.length > 0 && (
        <>
          <h2>Mots-clés</h2>
          <p>{article.mots_cles.join(", ")}</p>
        </>
      )}
    </main>
  );
}
