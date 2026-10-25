import { canais, duvidas, sabores, site } from "@/lib/site";

// JSON-LD: diz ao Google e às IAs, sem ambiguidade, quem é a Pipolu.
export function DadosEstruturados() {
  const negocio = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: site.nome,
    description: site.resumo,
    url: site.url,
    image: `${site.url}/opengraph-image.jpg`,
    logo: `${site.url}/marcas/pipolu.png`,
    telephone: `+${site.whatsapp}`,
    servesCuisine: "Pipoca gourmet",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.cidade,
      addressRegion: site.estado,
      addressCountry: "BR",
    },
    areaServed: { "@type": "City", name: site.cidade },
    sameAs: canais.filter((c) => c.id !== "whatsapp").map((c) => c.url),
    hasMenu: {
      "@type": "Menu",
      hasMenuSection: {
        "@type": "MenuSection",
        name: "Sabores",
        hasMenuItem: sabores.map((s) => ({ "@type": "MenuItem", name: `Pipoca gourmet ${s.nome}` })),
      },
    },
  };

  const perguntas = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: duvidas.map((d) => ({
      "@type": "Question",
      name: d.pergunta,
      acceptedAnswer: { "@type": "Answer", text: d.resposta },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(negocio) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(perguntas) }} />
    </>
  );
}
