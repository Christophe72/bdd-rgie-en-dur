import { Suspense } from "react";
import RgieSearchClient from "./RgieSearchClient";

export default function RgiePage() {
  return (
    <Suspense
      fallback={<main className="mx-auto max-w-230 p-4">Chargement…</main>}
    >
      <RgieSearchClient />
    </Suspense>
  );
}
