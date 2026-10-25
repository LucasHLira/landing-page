# Pipolu Pipocas Gourmet — site

Landing page da Pipolu, pipoca gourmet artesanal de Santos (SP). Uma página só, com
sabores, nossa história, depoimentos, encomendas para festa, dúvidas e os canais de pedido
(WhatsApp, iFood, Keeta, 99Food e Instadelivery).

Stack do Jarvis: Next.js 16, TypeScript, Tailwind 4, Framer Motion e Lucide.

## Rodar no computador

```bash
npm install
npm run dev
```

Abre em http://localhost:3000.

## Onde mudar cada coisa

| O que | Onde |
|---|---|
| Telefone, sabores, links dos apps, depoimentos, perguntas | `src/lib/site.ts` (só lá) |
| Cores e fontes | `src/styles/design-tokens.ts` e o `@theme` de `src/app/globals.css` |
| Fotos dos sabores | `public/sabores/` (webp, 900 px de largura) |
| Imagem que aparece ao compartilhar o link | `src/app/opengraph-image.jpg` |

Sabor novo com foto: coloque o `.webp` em `public/sabores/` e acrescente a linha em
`sabores` no `src/lib/site.ts`. A página, o Google (JSON-LD) e o `/llms.txt` se atualizam juntos.

## SEO e GEO

Já vem com `robots.txt`, `sitemap.xml`, `llms.txt`, dados estruturados (`FoodEstablishment` e
`FAQPage`) e imagem de compartilhamento. O endereço do site sai de `NEXT_PUBLIC_SITE_URL`
(sem ela, usa `https://pipolulandingpage.vercel.app`).
