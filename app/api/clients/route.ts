import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/clients?search=...
export async function GET(req: NextRequest) {
  try {
    const search = req.nextUrl.searchParams.get("search") ?? undefined;

    const clients = await prisma.client.findMany({
      where: search
        ? {
            OR: [
              { nom: { contains: search, mode: "insensitive" } },
              { prenom: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } },
            ],
          }
        : {},
      orderBy: { nom: "asc" },
      take: 50,
    });

    return NextResponse.json(clients);
  } catch (error) {
    console.error("[GET /api/clients]", error);
    const message =
      process.env.NODE_ENV === "development"
        ? error instanceof Error
          ? error.message
          : "Erreur serveur"
        : "Erreur serveur";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// POST /api/clients
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nom, prenom, email, telephone, adresse } = body;

    if (!nom) {
      return NextResponse.json(
        { error: "Le champ 'nom' est obligatoire" },
        { status: 400 },
      );
    }

    const client = await prisma.client.create({
      data: { nom, prenom, email, telephone, adresse },
    });

    return NextResponse.json(client, { status: 201 });
  } catch (error: unknown) {
    if ((error as { code?: string }).code === "P2002") {
      return NextResponse.json(
        { error: "Cet email est déjà utilisé" },
        { status: 409 },
      );
    }
    console.error("[POST /api/clients]", error);
    const message =
      process.env.NODE_ENV === "development"
        ? error instanceof Error
          ? error.message
          : "Erreur serveur"
        : "Erreur serveur";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
