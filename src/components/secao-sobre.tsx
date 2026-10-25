import Image from "next/image";
import { HandHeart, Sparkles, Wheat } from "lucide-react";
import { Mancha } from "@/components/mancha";
import { Revelar } from "@/components/revelar";
import { TituloSecao } from "@/components/titulo-secao";

const pilares = [
  { icone: HandHeart, titulo: "Feita à mão", texto: "Cada pipoca é preparada de forma artesanal.", cor: "bg-rosa-claro text-rosa-forte" },
  { icone: Wheat, titulo: "Milho especial", texto: "A base certa para ficar crocante e redondinha.", cor: "bg-agua-claro text-agua-forte" },
  { icone: Sparkles, titulo: "Ingredientes selecionados", texto: "Coberturas de verdade, sem economizar no sabor.", cor: "bg-lilas-claro text-lilas-forte" },
];

export function SecaoSobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-creme-escuro py-24">
      <Mancha forma="c" className="absolute top-10 -left-32 h-72 w-80 text-agua/30" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Revelar className="relative mx-auto w-full max-w-sm lg:order-2">
          <div className="relative aspect-[3/4] -rotate-3 overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-25px_rgba(45,33,64,0.45)] ring-8 ring-white">
            <Image
              src="/fotos/na-mao.webp"
              alt="Mão segurando um pacote de pipoca gourmet Pipolu de caramelo na rua"
              fill
              sizes="(min-width: 1024px) 384px, 80vw"
              className="object-cover"
            />
          </div>
          <p className="absolute -bottom-5 -left-3 rotate-3 rounded-2xl bg-white px-5 py-3 font-display text-lg font-semibold shadow-lg sm:-left-8">
            do nosso coração <span className="text-rosa-forte">para o seu paladar</span>
          </p>
        </Revelar>

        <div>
          <Revelar>
            <TituloSecao
              selo="Nossa história"
              titulo="Feita com amor e ingredientes selecionados"
              texto="Na Pipolu, cada pipoca é feita de forma artesanal, com milho especial e ingredientes de alta qualidade. Nosso compromisso é entregar sabores sofisticados, crocantes e preparados com muito carinho."
            />
          </Revelar>
          <ul className="mt-10 grid gap-4">
            {pilares.map((p, i) => (
              <li key={p.titulo}>
                <Revelar atraso={i * 0.08} className="flex items-start gap-4 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-ameixa/5">
                  <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${p.cor}`}>
                    <p.icone className="size-6" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold">{p.titulo}</span>
                    <span className="block text-ameixa-suave">{p.texto}</span>
                  </span>
                </Revelar>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
