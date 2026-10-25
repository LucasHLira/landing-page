// Fatos do negócio — moram SÓ aqui. Página, SEO (JSON-LD), llms.txt e links
// de WhatsApp leem deste arquivo. Trocou telefone, sabor ou link? Muda aqui.

export const site = {
  nome: "Pipolu Pipocas Gourmet",
  nomeCurto: "Pipolu",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pipolulandingpage.vercel.app",
  cidade: "Santos",
  estado: "SP",
  bairro: "Marapé",
  whatsapp: "5513991186957",
  whatsappVisivel: "(13) 99118-6957",
  resumo:
    "Pipoca gourmet artesanal feita em Santos (SP), em 16 sabores, com pedido pelo WhatsApp, iFood, Keeta, 99Food e Instadelivery.",
};

export function linkWhatsapp(mensagem: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const mensagens = {
  geral: "Oi! Vim pelo site e quero ver os sabores e valores das pipocas.",
  festa: "Oi! Vim pelo site e quero fazer uma encomenda de pipoca para uma festa.",
  sabor: (sabor: string) => `Oi! Vim pelo site e quero a pipoca de ${sabor}.`,
};

export type Canal = {
  id: "whatsapp" | "ifood" | "keeta" | "noventa" | "instadelivery";
  nome: string;
  descricao: string;
  url: string;
};

export const canais: Canal[] = [
  {
    id: "whatsapp",
    nome: "WhatsApp",
    descricao: "Fale direto com a gente: tire dúvidas, escolha os sabores e combine a entrega.",
    url: linkWhatsapp(mensagens.geral),
  },
  {
    id: "ifood",
    nome: "iFood",
    descricao: "Peça pelo app do iFood.",
    url: "https://www.ifood.com.br/delivery/santos-sp/pipolu---pipocas-gourmet-marape/18824721-f655-41ba-8d59-b21a1a9a0f41",
  },
  {
    id: "keeta",
    nome: "Keeta",
    descricao: "Peça pelo app do Keeta.",
    url: "https://url-eu.mykeeta.com/zN2ensXz",
  },
  {
    id: "noventa",
    nome: "99Food",
    descricao: "Peça pelo app da 99.",
    url: "https://oia.99app.com/dlp9/yUm7QM",
  },
  {
    id: "instadelivery",
    nome: "Instadelivery",
    descricao: "Cardápio online com pedido direto para a loja.",
    url: "https://instadelivery.com.br/pipolupipocasgourmet",
  },
];

export type Sabor = { nome: string; foto?: string; tom: "lilas" | "agua" | "rosa" };

// Os 9 com foto aparecem como card; os outros entram no card "e mais".
export const sabores: Sabor[] = [
  { nome: "Leite Ninho", foto: "/sabores/leite-ninho.webp", tom: "lilas" },
  { nome: "Nutella", foto: "/sabores/nutella.webp", tom: "rosa" },
  { nome: "Caramelo com Flor de Sal", foto: "/sabores/caramelo-flor-de-sal.webp", tom: "agua" },
  { nome: "Ovomaltine", foto: "/sabores/ovomaltine.webp", tom: "lilas" },
  { nome: "Mousse de Maracujá", foto: "/sabores/mousse-de-maracuja.webp", tom: "agua" },
  { nome: "Paçoca com Chocolate", foto: "/sabores/pacoca-com-chocolate.webp", tom: "rosa" },
  { nome: "Sensação", foto: "/sabores/sensacao.webp", tom: "rosa" },
  { nome: "Amendoim", foto: "/sabores/amendoim.webp", tom: "agua" },
  { nome: "Nesquik", foto: "/sabores/nesquik.webp", tom: "lilas" },
  { nome: "Paçoca", tom: "agua" },
  { nome: "Oreo", tom: "lilas" },
  { nome: "Napolitano", tom: "rosa" },
  { nome: "Chocolate 50% Cacau", tom: "lilas" },
  { nome: "Coco", tom: "agua" },
  { nome: "Pistache", tom: "agua" },
  { nome: "Limão Siciliano", tom: "rosa" },
];

export type Depoimento = { texto: string; autor: string; tom: "lilas" | "agua" | "rosa" };

// Mensagens reais de clientes (vieram do site anterior; emojis tirados).
export const depoimentos: Depoimento[] = [
  {
    texto:
      "Estou passando só para agradecer, as pipocas estavam maravilhosas e todo mundo do aniversário que comeu vinha falar pra mim: nossa, muito perfeita!",
    autor: "Helo",
    tom: "lilas",
  },
  {
    texto:
      "Primeira compra no 99Food e tinha que ser com você... Sem dúvida as melhores pipocas gourmet da Baixada. Uma delíciaa!",
    autor: "Cliente do 99Food",
    tom: "agua",
  },
  {
    texto:
      "Devia ter pego mais pipoca, foi sucesso! Teve até briga kkkk. Mas já vamos começar a preparar as coisas para o Chá de Bebê e vocês vão estar presentes de novo.",
    autor: "Cliente feliz",
    tom: "rosa",
  },
  {
    texto: "As pipocas estavam uma delícia (como de costume kkkk), não teve uma pessoa que não elogiou.",
    autor: "Cliente satisfeita",
    tom: "agua",
  },
  {
    texto: "Que pipoca maravilhosa, eu ameiii!",
    autor: "Cliente Pipolu",
    tom: "lilas",
  },
];

const nomesSabores = sabores.map((s) => s.nome);

export const duvidas: { pergunta: string; resposta: string }[] = [
  {
    pergunta: "Onde fica a Pipolu?",
    resposta: `A Pipolu é de ${site.cidade}, no litoral de São Paulo, no bairro do ${site.bairro}. Os pedidos saem pelos aplicativos de entrega e pelo WhatsApp.`,
  },
  {
    pergunta: "Quais sabores de pipoca gourmet vocês têm?",
    resposta: `São ${sabores.length} sabores: ${nomesSabores.slice(0, -1).join(", ")} e ${nomesSabores.at(-1)}. A disponibilidade pode mudar no dia; confira no app ou pergunte no WhatsApp.`,
  },
  {
    pergunta: "Como faço meu pedido?",
    resposta: `Pelo WhatsApp ${site.whatsappVisivel} ou pelos aplicativos ${canais
      .filter((c) => c.id !== "whatsapp")
      .map((c) => c.nome)
      .join(", ")
      .replace(/, ([^,]*)$/, " e $1")}.`,
  },
  {
    pergunta: "Vocês fazem pipoca para festas?",
    resposta:
      "Sim. A Pipolu já esteve em aniversários e chás de bebê. Para encomendar, chame no WhatsApp com a data, a quantidade e os sabores que você quer.",
  },
];
