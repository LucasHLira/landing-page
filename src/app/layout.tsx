import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ProvedorMovimento } from "@/components/provedor-movimento";
import { sabores, site } from "@/lib/site";
import "./globals.css";

// Fontes no repositório (regra do Jarvis): o build não depende do Google.
const fredoka = localFont({
  src: "./fonts/Fredoka.woff2",
  variable: "--font-fredoka",
  weight: "400 700",
  display: "swap",
});

const nunito = localFont({
  src: "./fonts/Nunito.woff2",
  variable: "--font-nunito",
  weight: "400 800",
  display: "swap",
});

const titulo = "Pipolu Pipocas Gourmet | Pipoca gourmet artesanal em Santos";
const descricao = `Pipoca gourmet artesanal feita em Santos (SP). ${sabores.length} sabores, como Leite Ninho, Nutella e Caramelo com Flor de Sal. Peça pelo WhatsApp, iFood, Keeta ou 99Food.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: titulo,
  description: descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.nome,
    title: titulo,
    description: descricao,
  },
  twitter: { card: "summary_large_image", title: titulo, description: descricao },
};

export const viewport: Viewport = {
  themeColor: "#FEFAF7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${nunito.variable} antialiased`}>
      <body className="min-h-dvh font-sans">
        <ProvedorMovimento>{children}</ProvedorMovimento>
      </body>
    </html>
  );
}
