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

type TodoStep = {
  id: string;
  label: string;
  done: boolean;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const BRAND_NAME = "Webelec";
const BRAND_DOMAIN = "webelec.be";

export default function RgieSearchClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();

  const query = searchParams.get("q") ?? "";
  const [inputValue, setInputValue] = useState(query);
  const [taskInput, setTaskInput] = useState("");
  const [taskLieu, setTaskLieu] = useState("");
  const [taskProtection, setTaskProtection] = useState("");
  const [taskSection, setTaskSection] = useState("");
  const [taskCheck, setTaskCheck] = useState<{
    verdict: "a_preciser" | "attention" | "plutot_ok";
    message: string;
    matches: Array<RgieArticle & { score: number }>;
  } | null>(null);
  const [noviceGuide, setNoviceGuide] = useState<{
    reformulation: string;
    explication: string;
    etapes: string[];
    raccordement: string[];
    checklist: string[];
    vigilances: string[];
    references: Array<RgieArticle & { score: number }>;
  } | null>(null);
  const [selectedItem, setSelectedItem] = useState<RgieArticle | null>(null);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [todoSteps, setTodoSteps] = useState<TodoStep[]>([]);
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
    setNoviceGuide(null);
    setPdfError(null);

    const description = taskInput.trim();
    if (description.length < 10) {
      setTodoSteps([]);
      setTaskCheck({
        verdict: "a_preciser",
        message:
          "Décrivez un peu plus la tâche (matériel, lieu, protection, contrôle) pour vérifier les règles RGIE.",
        matches: [],
      });
      return;
    }

    const contextualDescription = normalize(
      [description, taskLieu, taskProtection, taskSection].join(" "),
    );
    const tokens = Array.from(
      new Set(
        contextualDescription
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

        if (contextualDescription.includes(normalize(item.id))) {
          score += 6;
        }

        if (taskLieu && searchable.includes(normalize(taskLieu))) {
          score += 2;
        }
        if (taskProtection && searchable.includes(normalize(taskProtection))) {
          score += 2;
        }
        if (taskSection && searchable.includes(normalize(taskSection))) {
          score += 1;
        }

        for (const token of tokens) {
          if (searchable.includes(token)) {
            score += 1;
          }
        }

        if (Array.isArray(item.mots_cles)) {
          for (const motCle of item.mots_cles) {
            if (contextualDescription.includes(normalize(motCle))) {
              score += 2;
            }
          }
        }

        return { ...item, score };
      })
      .filter((item) => item.score > 1)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    const todoFromCheck: TodoStep[] = [
      {
        id: "todo-1",
        label:
          "Sécuriser l'intervention: couper l'alimentation et vérifier l'absence de tension.",
        done: false,
      },
      {
        id: "todo-2",
        label: taskSection
          ? `Valider la section des conducteurs (${taskSection}) selon le circuit.`
          : "Valider la section des conducteurs selon le circuit à réaliser.",
        done: false,
      },
      {
        id: "todo-3",
        label: taskProtection
          ? `Contrôler la protection prévue (${taskProtection}) et son emplacement au tableau.`
          : "Définir/contrôler la protection (DDR/disjoncteur) avant raccordement.",
        done: false,
      },
      {
        id: "todo-4",
        label:
          "Raccorder phase, neutre et terre dans l'ordre, puis vérifier serrage et repérage.",
        done: false,
      },
      {
        id: "todo-5",
        label:
          "Effectuer les contrôles finaux: continuité terre, isolement, test protections et conformité locale.",
        done: false,
      },
    ];

    if (scored.length > 0) {
      const refs = scored
        .slice(0, 3)
        .map((item) => item.id)
        .join(", ");
      todoFromCheck.splice(3, 0, {
        id: "todo-rgie",
        label: `Vérifier les articles RGIE prioritaires: ${refs}.`,
        done: false,
      });
    }

    setTodoSteps(todoFromCheck);

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
    const hasSensitiveContext =
      contextualDescription.includes("salle de bain") ||
      contextualDescription.includes("douche") ||
      contextualDescription.includes("piscine") ||
      contextualDescription.includes("tableau") ||
      contextualDescription.includes("borne") ||
      contextualDescription.includes("prise");
    const missingProtection = hasSensitiveContext && !taskProtection;

    if (hasCritical) {
      setTaskCheck({
        verdict: "attention",
        message: missingProtection
          ? "Points critiques détectés et protection non précisée. Indiquez aussi DDR/disjoncteur avant exécution."
          : "Points critiques détectés. Vérifiez ces articles avant exécution pour rester conforme RGIE.",
        matches: scored,
      });
      return;
    }

    setTaskCheck({
      verdict: hasManyMatches && !missingProtection ? "plutot_ok" : "attention",
      message:
        hasManyMatches && !missingProtection
          ? "La tâche semble globalement cohérente avec les règles trouvées, sous réserve de contrôle sur chantier."
          : missingProtection
            ? "Des points sensibles sont détectés mais la protection n'est pas précisée. Ajoutez DDR/disjoncteur pour une vérification fiable."
            : "Des points de vigilance existent; contrôlez les articles proposés avant validation.",
      matches: scored,
    });
  };

  const toggleTodoStep = (index: number) => {
    setTodoSteps((previous) =>
      previous.map((step, i) => {
        if (i !== index) {
          return step;
        }

        if (i > 0 && !previous[i - 1].done) {
          return step;
        }

        return { ...step, done: !step.done };
      }),
    );
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

  const genererGuideNovice = () => {
    if (!taskCheck || taskCheck.matches.length === 0) {
      return;
    }

    const references = taskCheck.matches.slice(0, 3);
    const contextualDescription = normalize(
      [taskInput, taskLieu, taskProtection, taskSection].join(" "),
    );

    const reformulationParts = [
      taskInput.trim() || "réaliser une intervention électrique",
      taskLieu ? `dans un contexte ${taskLieu}` : "",
      taskSection ? `avec une section ${taskSection}` : "",
      taskProtection ? `et une protection ${taskProtection}` : "",
    ].filter(Boolean);

    const reformulation = `Vous souhaitez ${reformulationParts.join(" ")}.`;

    const explication =
      references
        .map(
          (item) => item.explication_profane_mobile || item.explication_profane,
        )
        .slice(0, 2)
        .join(" ") ||
      "Il faut surtout vérifier la protection des personnes, le bon dimensionnement et la conformité de l'installation.";

    const etapes = [
      "Décrire précisément le circuit concerné (usage, puissance, local).",
      taskSection
        ? `Vérifier que la section ${taskSection} est cohérente avec la protection prévue.`
        : "Déterminer la section du câble selon l'usage et le calibre de protection.",
      taskProtection
        ? `Confirmer la présence et le calibre de la protection (${taskProtection}).`
        : "Définir clairement le dispositif de protection (DDR/disjoncteur) avant exécution.",
      "Comparer le projet avec les articles RGIE proposés puis contrôler sur chantier.",
    ];

    const raccordement = [
      "Couper l'alimentation générale et vérifier l'absence de tension avant toute intervention.",
      "Identifier le départ au tableau (disjoncteur, neutre, terre) correspondant au circuit concerné.",
      taskSection
        ? `Préparer les conducteurs avec la section ${taskSection} et un repérage clair des fils.`
        : "Choisir la section des conducteurs avant raccordement et repérer clairement les fils.",
      taskProtection
        ? `Raccorder la protection prévue (${taskProtection}) au bon emplacement dans le tableau.`
        : "Installer d'abord la protection adaptée (DDR/disjoncteur) avant de raccorder les points d'usage.",
      "Raccorder phase, neutre et terre dans l'ordre, en respectant les bornes et le serrage constructeur.",
      "Finaliser par contrôle de serrage, repérage des circuits et fermeture des enveloppes de protection.",
    ];

    const checklist = [
      "Section des câbles cohérente avec le calibre de protection.",
      "Présence et bon choix de DDR/disjoncteur selon le circuit.",
      "Continuité du conducteur de protection (terre) vérifiée.",
      "Respect des exigences spécifiques du local (salle de bain, piscine, atelier...).",
      "Polarité, isolement et déclenchement des protections testés.",
      "Repérage du circuit au tableau et documentation de l'intervention.",
    ];

    const vigilances: string[] = [];
    if (!taskProtection) {
      vigilances.push(
        "Protection non précisée : vous devez indiquer DDR/disjoncteur pour une validation fiable.",
      );
    }
    if (!taskSection) {
      vigilances.push(
        "Section câble non précisée : le dimensionnement doit être vérifié avant travaux.",
      );
    }
    if (
      contextualDescription.includes("salle de bain") ||
      contextualDescription.includes("douche") ||
      contextualDescription.includes("piscine")
    ) {
      vigilances.push(
        "Local à risque accru (eau) : appliquer strictement les règles d'emplacements spéciaux.",
      );
    }
    if (references.some((item) => item.importance === "critique")) {
      vigilances.push(
        "Articles critiques détectés : faire valider l'installation avant mise en service.",
      );
    }

    setNoviceGuide({
      reformulation,
      explication,
      etapes,
      raccordement,
      checklist,
      vigilances,
      references,
    });
  };

  const exporterGuidePdf = async () => {
    if (!taskCheck || !noviceGuide) {
      return;
    }

    try {
      setPdfError(null);
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "mm", format: "a4" });

      const marginLeft = 15;
      const marginRight = 15;
      const pageWidth = 210;
      const maxWidth = pageWidth - marginLeft - marginRight;
      const contentBottomY = 278;
      const pageTopY = 20;
      let cursorY = pageTopY;
      let currentPage = 1;

      const colors = {
        primary: [30, 64, 175] as const,
        accent: [14, 116, 144] as const,
        text: [31, 41, 55] as const,
        muted: [100, 116, 139] as const,
        light: [241, 245, 249] as const,
        border: [203, 213, 225] as const,
        ok: [22, 101, 52] as const,
        warn: [161, 98, 7] as const,
        neutral: [71, 85, 105] as const,
      };

      const now = new Date();
      const dateText = now.toLocaleDateString("fr-BE");
      const reportId = `RGIE-${now.toISOString().slice(0, 10)}-${now
        .toTimeString()
        .slice(0, 8)
        .replace(/:/g, "")}`;

      const cleanPdfText = (text: string) =>
        text
          .replace(/[’`]/g, "'")
          .replace(/[“”]/g, '"')
          .replace(/[–—]/g, "-")
          .replace(/•/g, "-")
          .replace(/[^\x20-\x7E\xA0-\xFF]/g, " ");

      const addPageBranding = (pageCurrent: number, pageCount: number) => {
        doc.setFillColor(...colors.primary);
        doc.rect(0, 0, pageWidth, 14, "F");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(255, 255, 255);
        doc.text(`${BRAND_NAME} - ${BRAND_DOMAIN}`, marginLeft, 9.5);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.text(
          cleanPdfText(`Rapport: ${reportId}`),
          pageWidth - marginRight,
          9.5,
          {
            align: "right",
          },
        );

        doc.setDrawColor(...colors.border);
        doc.line(marginLeft, 287, pageWidth - marginRight, 287);

        doc.setTextColor(...colors.muted);
        doc.text(
          cleanPdfText(`Page ${pageCurrent}/${pageCount}`),
          pageWidth - marginRight,
          292,
          {
            align: "right",
          },
        );
        doc.text("Assistant RGIE - usage informatif", marginLeft, 292);
      };

      addPageBranding(1, 1);

      const ensureSpace = (needed = 8) => {
        if (cursorY + needed > contentBottomY) {
          doc.addPage();
          currentPage += 1;
          cursorY = pageTopY;
          addPageBranding(currentPage, currentPage);
        }
      };

      const addTitle = (text: string) => {
        ensureSpace(12);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(17);
        doc.setTextColor(...colors.primary);
        doc.text(cleanPdfText(text), marginLeft, cursorY);
        cursorY += 8;
      };

      const addHeading = (text: string) => {
        ensureSpace(12);
        doc.setFillColor(...colors.light);
        doc.setDrawColor(...colors.border);
        doc.rect(marginLeft, cursorY - 4.8, maxWidth, 7.5, "FD");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11.5);
        doc.setTextColor(...colors.accent);
        doc.text(cleanPdfText(text), marginLeft, cursorY);
        cursorY += 7.5;
      };

      const addParagraph = (text: string) => {
        const lines = doc.splitTextToSize(cleanPdfText(text), maxWidth);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(...colors.text);

        const lineHeight = 4.8;
        const paragraphPadding = 1;
        const neededHeight = lines.length * lineHeight + paragraphPadding;
        ensureSpace(neededHeight);

        for (const line of lines) {
          doc.text(line, marginLeft, cursorY);
          cursorY += lineHeight;
        }
        cursorY += paragraphPadding;
      };

      const addBullets = (items: string[]) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(...colors.text);
        for (const item of items) {
          const lines = doc.splitTextToSize(cleanPdfText(item), maxWidth - 6);
          ensureSpace(lines.length * 5 + 3);
          doc.setTextColor(...colors.accent);
          doc.text("•", marginLeft, cursorY);
          doc.setTextColor(...colors.text);
          doc.text(lines, marginLeft + 4, cursorY);
          cursorY += lines.length * 4.8 + 1;
        }
        cursorY += 1;
      };

      const addNumbered = (items: string[]) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(...colors.text);
        items.forEach((item, index) => {
          const prefix = `${index + 1}.`;
          const lines = doc.splitTextToSize(cleanPdfText(item), maxWidth - 8);
          ensureSpace(lines.length * 5 + 3);
          doc.setTextColor(...colors.accent);
          doc.text(prefix, marginLeft, cursorY);
          doc.setTextColor(...colors.text);
          doc.text(lines, marginLeft + 6, cursorY);
          cursorY += lines.length * 4.8 + 1;
        });
        cursorY += 1;
      };

      const addVerdictBadge = () => {
        const verdictLabel =
          taskCheck.verdict === "plutot_ok"
            ? "Verdict: plutôt OK"
            : taskCheck.verdict === "attention"
              ? "Verdict: attention"
              : "Verdict: à préciser";

        const badgeColor =
          taskCheck.verdict === "plutot_ok"
            ? colors.ok
            : taskCheck.verdict === "attention"
              ? colors.warn
              : colors.neutral;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        const text = cleanPdfText(verdictLabel);
        const width = doc.getTextWidth(text) + 8;
        const [badgeR, badgeG, badgeB] = badgeColor;

        ensureSpace(8);
        doc.setFillColor(badgeR, badgeG, badgeB);
        doc.setDrawColor(badgeR, badgeG, badgeB);
        doc.rect(marginLeft, cursorY - 4.5, width, 6.5, "F");
        doc.setTextColor(255, 255, 255);
        doc.text(text, marginLeft + 4, cursorY);
        cursorY += 8;
      };

      addTitle(`${BRAND_NAME} - Rapport RGIE Assistant novice`);
      addParagraph(`Date: ${dateText}`);
      addParagraph(`Référence rapport: ${reportId}`);
      addVerdictBadge();
      addParagraph(`Message: ${taskCheck.message}`);

      addHeading("Tâche saisie");
      addParagraph(taskInput || "(non précisée)");

      addHeading("Contexte déclaré");
      addBullets([
        `Local: ${taskLieu || "non précisé"}`,
        `Protection: ${taskProtection || "non précisée"}`,
        `Section câble: ${taskSection || "non précisée"}`,
      ]);

      addHeading("Reformulation simple");
      addParagraph(noviceGuide.reformulation);

      addHeading("Explication pour débutant");
      addParagraph(noviceGuide.explication);

      addHeading("Étapes conseillées");
      addBullets(noviceGuide.etapes);

      addHeading("Comment raccorder (ordre conseillé)");
      addNumbered(noviceGuide.raccordement);

      addHeading("Checklist de vérification complète");
      addBullets(noviceGuide.checklist);

      if (noviceGuide.vigilances.length > 0) {
        addHeading("Points de vigilance");
        addBullets(noviceGuide.vigilances);
      }

      addHeading("Références RGIE utilisées");
      addBullets(
        noviceGuide.references.map(
          (item) => `${item.id} — ${item.titre} (${item.importance})`,
        ),
      );

      addParagraph(
        "Note: ce rapport assiste la préparation et le contrôle. Il ne remplace pas une vérification réglementaire sur site par un professionnel qualifié.",
      );

      const pageTotal = doc.getNumberOfPages();
      for (let page = 1; page <= pageTotal; page += 1) {
        doc.setPage(page);
        currentPage = page;
        addPageBranding(page, pageTotal);
      }

      const fileDate = now.toISOString().slice(0, 10);
      doc.save(`rapport-rgie-${BRAND_DOMAIN}-${fileDate}.pdf`);
    } catch (error) {
      console.error("Erreur export PDF", error);
      setPdfError(
        "Erreur lors de l'export PDF. Réessayez après avoir régénéré le guide IA.",
      );
    }
  };

  return (
    <main className="mx-auto max-w-230 p-4 md:p-6">
      <section className="rounded-2xl border border-neutral-200 p-5">
        <h1 className="text-3xl font-semibold md:text-4xl">Recherche RGIE</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Tapez un mot-clé et cliquez sur une carte pour ouvrir
          l&apos;explication.
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
        <h2 className="text-lg font-semibold">
          Vérifier une tâche selon le RGIE
        </h2>
        <p className="mt-1 text-sm text-neutral-600">
          Décrivez la tâche à faire. Le système compare ensuite votre texte avec
          les règles de la base [data/rgieData.js].
        </p>

        <form onSubmit={verifierTache} className="mt-3 grid gap-3">
          <textarea
            value={taskInput}
            onChange={(event) => setTaskInput(event.target.value)}
            placeholder="Exemple: Ajouter un circuit prise cuisine en 2,5 mm² avec disjoncteur 20A et DDR 30mA..."
            rows={4}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2"
          />

          <div className="grid gap-3 sm:grid-cols-3">
            <label className="grid gap-1 text-sm">
              <span className="font-medium">Type de local</span>
              <select
                value={taskLieu}
                onChange={(event) => setTaskLieu(event.target.value)}
                className="rounded-[10px] border border-neutral-300 px-3 py-2"
              >
                <option value="">Non précisé</option>
                <option value="domestique">Domestique</option>
                <option value="salle de bain">Salle de bain</option>
                <option value="piscine">Piscine</option>
                <option value="atelier">Atelier / pro</option>
              </select>
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-medium">Protection</span>
              <select
                value={taskProtection}
                onChange={(event) => setTaskProtection(event.target.value)}
                className="rounded-[10px] border border-neutral-300 px-3 py-2"
              >
                <option value="">Non précisée</option>
                <option value="DDR 30mA">DDR 30mA</option>
                <option value="DDR">DDR</option>
                <option value="disjoncteur 16A">Disjoncteur 16A</option>
                <option value="disjoncteur 20A">Disjoncteur 20A</option>
              </select>
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-medium">Section câble</span>
              <input
                value={taskSection}
                onChange={(event) => setTaskSection(event.target.value)}
                placeholder="Ex: 1,5 mm² / 2,5 mm²"
                className="rounded-[10px] border border-neutral-300 px-3 py-2"
              />
            </label>
          </div>

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

            {todoSteps.length > 0 && (
              <div className="mt-4 rounded-lg border border-neutral-200 p-3">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold">
                    Todo liste de travail (ordre conseillé)
                  </p>
                  <span className="text-xs text-neutral-500">
                    {todoSteps.filter((step) => step.done).length}/
                    {todoSteps.length}
                  </span>
                </div>
                <div className="grid gap-2">
                  {todoSteps.map((step, index) => {
                    const blocked = index > 0 && !todoSteps[index - 1].done;
                    return (
                      <label
                        key={step.id}
                        className={`flex items-start gap-2 rounded-md border px-2.5 py-2 text-sm ${blocked ? "border-neutral-200 opacity-60" : "border-neutral-300"}`}
                      >
                        <input
                          type="checkbox"
                          checked={step.done}
                          disabled={blocked}
                          onChange={() => toggleTodoStep(index)}
                          className="mt-0.5"
                        />
                        <span
                          className={
                            step.done ? "line-through text-neutral-500" : ""
                          }
                        >
                          {index + 1}. {step.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {taskCheck.matches.length > 0 && (
              <div className="mt-3 grid gap-2">
                <p className="text-sm font-semibold">
                  Articles à vérifier d&apos;abord
                </p>
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

            {taskCheck.matches.length > 0 && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={genererGuideNovice}
                  className="rounded-[10px] border border-neutral-300 px-4 py-2 text-sm font-medium"
                >
                  Reformuler et expliquer pour novice (IA)
                </button>
              </div>
            )}

            {noviceGuide && (
              <div className="mt-4 rounded-xl border border-neutral-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Assistant IA guidé par la base RGIE
                </p>

                <div className="mt-3">
                  <button
                    type="button"
                    onClick={exporterGuidePdf}
                    className="rounded-[10px] border border-neutral-300 px-4 py-2 text-sm font-medium"
                  >
                    Exporter en PDF
                  </button>
                  {pdfError && (
                    <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                      {pdfError}
                    </p>
                  )}
                </div>

                <h3 className="mt-2 font-semibold">Reformulation simple</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                  {noviceGuide.reformulation}
                </p>

                <h3 className="mt-3 font-semibold">
                  Explication pour débutant
                </h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                  {noviceGuide.explication}
                </p>

                <h3 className="mt-3 font-semibold">Étapes conseillées</h3>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                  {noviceGuide.etapes.map((etape) => (
                    <li key={etape}>{etape}</li>
                  ))}
                </ul>

                <h3 className="mt-3 font-semibold">
                  Comment raccorder (ordre conseillé)
                </h3>
                <ol className="mt-1 list-decimal space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                  {noviceGuide.raccordement.map((etape) => (
                    <li key={etape}>{etape}</li>
                  ))}
                </ol>

                <h3 className="mt-3 font-semibold">
                  Checklist de vérification complète
                </h3>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                  {noviceGuide.checklist.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {noviceGuide.vigilances.length > 0 && (
                  <>
                    <h3 className="mt-3 font-semibold">Points de vigilance</h3>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                      {noviceGuide.vigilances.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}

                <p className="mt-3 text-xs text-neutral-500">
                  Base utilisée : articles{" "}
                  {noviceGuide.references.map((item) => item.id).join(", ")}.
                </p>
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
