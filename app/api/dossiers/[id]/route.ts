import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { params: Promise<{ id: string }> };

// GET /api/dossiers/:id
export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const dossier = await prisma.dossier.findUnique({
      where: { id },
      include: {
        client: true,
        chantier: true,
        devis: { orderBy: { createdAt: "desc" } },
        diagnostics: { orderBy: { createdAt: "desc" } },
        circuits: { include: { protections: true }, orderBy: { createdAt: "asc" } },
        pointsControle: { orderBy: { articleRgie: "asc" } },
      },
    });

    if (!dossier) {
      return NextResponse.json({ error: "Dossier introuvable" }, { status: 404 });
    }

    return NextResponse.json(dossier);
  } catch (error) {
    console.error("[GET /api/dossiers/:id]", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// PATCH /api/dossiers/:id
export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { reference, titre, typeInstallation, statut, description, adresseChantier, clientId } = body;

    const dossier = await prisma.dossier.update({
      where: { id },
      data: {
        ...(reference !== undefined && { reference }),
        ...(titre !== undefined && { titre }),
        ...(typeInstallation !== undefined && { typeInstallation }),
        ...(statut !== undefined && { statut }),
        ...(description !== undefined && { description }),
        ...(adresseChantier !== undefined && { adresseChantier }),
        ...(clientId !== undefined && { clientId }),
      },
      include: { client: { select: { nom: true, prenom: true } } },
    });

    return NextResponse.json(dossier);
  } catch (error: unknown) {
    if ((error as { code?: string }).code === "P2025") {
      return NextResponse.json({ error: "Dossier introuvable" }, { status: 404 });
    }
    if ((error as { code?: string }).code === "P2002") {
      return NextResponse.json({ error: "La référence existe déjà" }, { status: 409 });
    }
    console.error("[PATCH /api/dossiers/:id]", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// DELETE /api/dossiers/:id
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    await prisma.dossier.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if ((error as { code?: string }).code === "P2025") {
      return NextResponse.json({ error: "Dossier introuvable" }, { status: 404 });
    }
    console.error("[DELETE /api/dossiers/:id]", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
