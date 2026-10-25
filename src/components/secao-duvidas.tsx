import { Plus } from "lucide-react";
import { Revelar } from "@/components/revelar";
import { TituloSecao } from "@/components/titulo-secao";
import { duvidas } from "@/lib/site";

export function SecaoDuvidas() {
  return (
    <section id="duvidas" className="mx-auto grid max-w-6xl gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
      <Revelar>
        <TituloSecao selo="Dúvidas" titulo="Perguntas que sempre chegam no WhatsApp" />
      </Revelar>
      <div className="grid gap-3">
        {duvidas.map((d, i) => (
          <Revelar key={d.pergunta} atraso={i * 0.06}>
            <details className="group rounded-3xl bg-white px-6 py-5 shadow-sm ring-1 ring-ameixa/5 open:ring-lilas">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {d.pergunta}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-lilas-claro text-lilas-forte transition-transform duration-300 group-open:rotate-45">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-ameixa-suave">{d.resposta}</p>
            </details>
          </Revelar>
        ))}
      </div>
    </section>
  );
}
