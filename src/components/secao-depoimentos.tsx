import { Quote } from "lucide-react";
import { Revelar } from "@/components/revelar";
import { TituloSecao } from "@/components/titulo-secao";
import { depoimentos } from "@/lib/site";

const tons = {
  lilas: "bg-lilas-claro [&_svg]:text-lilas-forte",
  agua: "bg-agua-claro [&_svg]:text-agua-forte",
  rosa: "bg-rosa-claro [&_svg]:text-rosa-forte",
};

export function SecaoDepoimentos() {
  return (
    <section aria-labelledby="titulo-depoimentos" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Revelar>
          <div id="titulo-depoimentos">
            <TituloSecao selo="Depoimentos" titulo="Quem prova, volta (e ainda leva para a festa)" centro />
          </div>
        </Revelar>
      </div>

      {/* Celular: carrossel de arrastar com o dedo. Computador: mural em colunas. */}
      <ul className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:px-6 md:mx-auto md:block md:max-w-6xl md:columns-3 md:gap-5 md:overflow-visible">
        {depoimentos.map((d, i) => (
          <li key={d.autor} className="w-[82%] shrink-0 snap-center md:mb-5 md:w-auto md:break-inside-avoid">
            <Revelar atraso={(i % 3) * 0.08} className={`h-full rounded-[2rem] p-6 sm:p-7 ${tons[d.tom]}`}>
              <figure>
                <Quote className="size-8" aria-hidden="true" />
                <blockquote className="mt-4 font-display text-xl leading-snug font-medium">{d.texto}</blockquote>
                <figcaption className="mt-5 text-sm font-bold text-ameixa-suave">{d.autor}</figcaption>
              </figure>
            </Revelar>
          </li>
        ))}
      </ul>
    </section>
  );
}
