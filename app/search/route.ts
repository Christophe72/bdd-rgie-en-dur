import { NextRequest, NextResponse } from "next/server";
import { rgieArticles } from "../../data/rgieData.js";

type RgieArticle = {
  id: string;
  titre: string;
  categorie: string;
  importance: "critique" | "élevée" | "moyenne" | string;
  description?: string;
  explication_profane?: string;
  explication_profane_mobile?: string;
  mots_cles?: string[];
};

const toText = (value: unknown) => (typeof value === "string" ? value : "");

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("q") || "").trim().toLowerCase();
  const categorie = (searchParams.get("categorie") || "").trim();
  const importance = (searchParams.get("importance") || "").trim();
  const limit = Number(searchParams.get("limit") || 30);

  let resultats = [...(rgieArticles as RgieArticle[])];

  if (query.length > 0) {
    resultats = resultats.filter((article) => {
      const titre = toText(article.titre).toLowerCase();
      const description = toText(article.description).toLowerCase();
      const explication = toText(article.explication_profane).toLowerCase();
      const motsCles = Array.isArray(article.mots_cles)
        ? article.mots_cles.join(" ").toLowerCase()
        : "";

      return (
        article.id.toLowerCase().includes(query) ||
        titre.includes(query) ||
        description.includes(query) ||
        explication.includes(query) ||
        motsCles.includes(query)
      );
    });
  }

  if (categorie.length > 0) {
    resultats = resultats.filter((article) => article.categorie === categorie);
  }

  if (importance.length > 0) {
    resultats = resultats.filter(
      (article) => article.importance === importance,
    );
  }

  const payload = resultats
    .slice(0, Number.isFinite(limit) ? Math.max(limit, 1) : 30)
    .map((article) => ({
      id: article.id,
      titre: article.titre,
      categorie: article.categorie,
      importance: article.importance,
      explication_profane_mobile:
        article.explication_profane_mobile ||
        article.explication_profane ||
        article.description ||
        "",
    }));

  return NextResponse.json({
    total: payload.length,
    data: payload,
  });
}
