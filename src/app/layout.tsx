import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Case Study : Industrial Lighting PIM & Spatial Extraction Pipeline",
  description: "Comment nous avons transformé 3 catalogues PDF chaotiques en une base PIM de 16 781 références avec 0% d'erreur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased selection:bg-gold-200 selection:text-gold-900">
        {children}
      </body>
    </html>
  );
}
