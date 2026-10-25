// ============================================================
// DESIGN TOKENS — fonte única de verdade visual do projeto.
// ------------------------------------------------------------
// R1 — Tokens sempre. Nunca cor/tamanho hardcoded no componente. Sempre daqui
//      (o Tailwind lê os mesmos valores no @theme de src/app/globals.css).
// R2 — Paleta escolhida pelo usuário em 25/10/2026: "Creme da marca", tirada da
//      logo da Pipolu (lilás, verde-água e rosa sobre o creme do fundo da logo).
// R3 — Hierarquia por peso, não por cor: rosa forte só nos botões de pedido.
//      Lilás, verde-água e rosa claro são decoração (manchas, selos, fundos).
// R4 — Números em tabular-nums.
// R5 — Mobile-first.
//
// Contraste medido (mínimo 4,5): ameixa/creme 14,4 · ameixaSuave/creme 7,1 ·
// branco/rosaForte 4,6 · lilasForte/creme 5,4 · aguaForte/creme 5,4.
//
// Tema: só claro (landing page de marca; o usuário escolheu o creme).
// ============================================================

// Cores da MARCA — as três da logo, amostradas do arquivo original.
export const brand = {
  lilas: "#C1A2E8",
  agua: "#73CECF",
  rosa: "#F87C94",
  // Variações escuras para TEXTO e BOTÃO (as da logo não passam no contraste)
  lilasForte: "#7651C4",
  aguaForte: "#1F7275",
  rosaForte: "#D23A62", // botão de pedido (texto branco)
  rosaForteHover: "#B92F55",
  // Variações claras para fundos de seção e cards
  lilasClaro: "#F1E8FB",
  aguaClaro: "#DFF4F4",
  rosaClaro: "#FDE6EB",
};

// Tema CLARO
export const light = {
  bgApp: "#FEFAF7", // o creme exato do fundo da logo (a marca encaixa sem emenda)
  bgCard: "#FFFFFF",
  bgSubtle: "#F7EEE8",
  border: "rgba(45,33,64,0.10)",
  textPrimary: "#2D2140", // ameixa
  textSecondary: "#5E5072",
  textOnDark: "#FEFAF7",
  bgDark: "#2D2140", // faixa de sabores e bloco final
};

// Cores dos apps de entrega (marca de terceiros, só nos selos deles)
export const apps = {
  whatsapp: "#25D366",
  ifood: "#EA1D2C",
  noventaENove: "#FFD400",
  instadelivery: "#5B2EFF",
};

export const fonts = {
  display: "Fredoka", // títulos — arredondada como as letras da logo
  body: "Nunito", // corpo
  weights: { regular: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800 },
};

// Escala base-4.
export const spacing = {
  xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "32px", "2xl": "48px", "3xl": "64px",
};

export const borderRadius = {
  sm: "6px", md: "10px", lg: "16px", xl: "24px", "2xl": "32px", full: "9999px",
};

export const breakpoints = {
  mobile: "375px", tablet: "768px", laptop: "1024px", desktop: "1440px",
};
