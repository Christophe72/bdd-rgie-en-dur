import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/dossiers?page=1&limit=20&statut=...&search=...
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const page = Math.max(1, Number(searchParams.get("page") ?? 1));
    const limit = Math.min(100, Math.max(1, Number(searchParams.get("limit") ?? 20)));
    const statut = searchParams.get("statut") ?? undefined;
    const search = searchParams.get("search") ?? undefined;

    const where = {
      ...(statut ? { statut: statut as never } : {}),
      ...(search
        ? {
            OR: [
              { titre: { contains: search, mode: "insensitive" as const } },
              { reference: { contains: search, mode: "insensitive" as const } },
              { adresseChantier: { contains: search, mode: "insensitive" as const } },
            ],
          }
        : {}),
    };

    const [total, dossiers] = await Promise.all([
      prisma.dossier.count({ where }),
      prisma.dossier.findMany({
        where,
        include: { client: { select: { nom: true, prenom: true, email: true } } },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    return NextResponse.json({ data: dossiers, total, page, limit });
  } catch (error) {
    console.error("[GET /api/dossiers]", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// POST /api/dossiers
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { reference, titre, typeInstallation, statut, description, adresseChantier, clientId } = body;

    if (!reference || !titre || !typeInstallation || !clientId) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants : reference, titre, typeInstallation, clientId" },
        { status: 400 }
      );
    }

    const dossier = await prisma.dossier.create({
      data: {
        reference,
        titre,
        typeInstallation,
        statut: statut ?? "A_DEVISER",
        description,
        adresseChantier,
        clientId,
      },
      include: { client: { select: { nom: true, prenom: true, email: true } } },
    });

    return NextResponse.json(dossier, { status: 201 });
  } catch (error: unknown) {
    if ((error as { code?: string }).code === "P2002") {
      return NextResponse.json({ error: "La référence existe déjà" }, { status: 409 });
    }
    console.error("[POST /api/dossiers]", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
