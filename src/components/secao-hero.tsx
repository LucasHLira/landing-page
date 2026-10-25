import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { Botao } from "@/components/botao";
import { IconeWhatsapp } from "@/components/icone-whatsapp";
import { Mancha } from "@/components/mancha";
import { canais, linkWhatsapp, mensagens, sabores, site } from "@/lib/site";

const apps = canais.filter((c) => c.id !== "whatsapp");

export function SecaoHero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <Mancha forma="a" className="absolute -top-40 -right-40 h-[28rem] w-[34rem] text-lilas/70 sm:-top-56 sm:-right-24 sm:h-[38rem] sm:w-[46rem]" />
      <Mancha forma="b" className="absolute -bottom-48 -left-56 h-[24rem] w-[30rem] text-rosa/60 sm:-left-40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-10 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pt-16 lg:pb-28">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-agua-forte shadow-sm ring-1 ring-ameixa/5">
            <MapPin className="size-4" aria-hidden="true" />
            Feita à mão em {site.cidade}, {site.estado}
          </p>

          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Pipoca gourmet{" "}
            <span className="relative inline-block whitespace-nowrap text-lilas-forte">
              artesanal
              <svg viewBox="0 0 220 18" aria-hidden="true" className="absolute -bottom-2 left-0 h-3 w-full text-rosa">
                <path d="M3 12c40-8 80-10 120-6s65 4 94-3" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            que vira assunto na festa
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-ameixa-suave sm:text-xl">
            Crocante, coberta de sabor e feita com milho especial. São {sabores.length} sabores, de Leite Ninho a
            Caramelo com Flor de Sal, para pedir pelo app que você já usa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Botao href={linkWhatsapp(mensagens.geral)} externo>
              <IconeWhatsapp className="size-5" />
              Pedir pelo WhatsApp
            </Botao>
            <Botao href="#sabores" variante="contorno">
              Ver os sabores
              <ArrowDown className="size-4" aria-hidden="true" />
            </Botao>
          </div>

          <p className="mt-8 text-sm text-ameixa-suave">
            Também no{" "}
            {apps.map((a, i) => (
              <span key={a.id}>
                <a href={a.url} target="_blank" rel="noopener noreferrer" className="font-bold text-ameixa underline decoration-lilas decoration-2 underline-offset-4 hover:decoration-lilas-forte">
                  {a.nome}
                </a>
                {i < apps.length - 2 ? ", " : i === apps.length - 2 ? " e " : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-[86%] overflow-hidden rounded-[3rem] rounded-tr-[7rem] shadow-[0_30px_60px_-25px_rgba(45,33,64,0.45)] ring-8 ring-white">
            <Image
              src="/fotos/variedade.webp"
              alt="Três pacotes de pipoca gourmet Pipolu com pipocas de Leite Ninho, Nesquik e Nutella na bandeja"
              fill
              preload
              sizes="(min-width: 1024px) 460px, 86vw"
              className="object-cover"
            />
          </div>

          <div
            className="absolute right-0 bottom-[-6%] w-[44%] animate-flutua overflow-hidden rounded-[2rem] shadow-[0_20px_40px_-20px_rgba(45,33,64,0.5)] ring-6 ring-white"
            style={{ "--giro": "5deg" } as React.CSSProperties}
          >
            <div className="relative aspect-[3/4]">
              <Image
                src="/fotos/caramelo-caindo.webp"
                alt="Pipocas de caramelo com flor de sal caindo dentro do pacote"
                fill
                sizes="(min-width: 1024px) 220px, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute top-[6%] right-[2%] grid size-28 place-items-center sm:size-32">
            <svg viewBox="0 0 120 120" className="absolute inset-0 animate-gira text-ameixa" aria-hidden="true">
              <defs>
                <path id="circulo-selo" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
              </defs>
              <circle cx="60" cy="60" r="58" className="fill-agua" />
              {/* textLength = volta inteira do círculo (2 × π × 46), para o texto fechar sem sobrar */}
              <text className="fill-ameixa font-display text-[12px] font-semibold uppercase" textLength="287" lengthAdjust="spacing">
                <textPath href="#circulo-selo">feita à mão · feita à mão ·</textPath>
              </text>
            </svg>
            <span className="relative text-center font-display leading-none font-semibold text-ameixa">
              <span className="block text-3xl">{sabores.length}</span>
              <span className="text-xs">sabores</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
