import { canais, duvidas, sabores, site } from "@/lib/site";

// Índice do site para as IAs (ChatGPT, Perplexity...). Sai dos mesmos dados da página.
export function GET() {
  const texto = `# ${site.nome}
> ${site.resumo}

## Sabores
${sabores.map((s) => `- ${s.nome}`).join("\n")}

## Onde pedir
${canais.map((c) => `- [${c.nome}](${c.url}): ${c.descricao}`).join("\n")}

## Perguntas frequentes
${duvidas.map((d) => `### ${d.pergunta}\n${d.resposta}`).join("\n\n")}

## Páginas
- [Início](${site.url}): sabores, nossa história, depoimentos, encomendas para festas e onde pedir
`;
  return new Response(texto, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
