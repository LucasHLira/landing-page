import { ArrowUpRight } from "lucide-react";
import { Mancha } from "@/components/mancha";
import { Revelar } from "@/components/revelar";
import { SeloCanal } from "@/components/selo-canal";
import { TituloSecao } from "@/components/titulo-secao";
import { canais } from "@/lib/site";

export function SecaoPedir() {
  return (
    <section id="pedir" className="px-4 pb-16 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ameixa px-6 py-16 text-creme sm:px-12 sm:py-20">
        <Mancha forma="b" className="absolute -top-32 -right-24 h-80 w-96 text-lilas/25" />
        <Mancha forma="a" className="absolute -bottom-36 -left-28 h-80 w-96 text-rosa/20" />

        <div className="relative">
          <Revelar>
            <TituloSecao
              selo="Peça agora"
              titulo="Bateu vontade? Escolha onde pedir."
              texto="A mesma pipoca em todos os canais. Escolha o que for mais prático para você."
              escuro
              centro
            />
          </Revelar>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {canais.map((c, i) => (
              <li key={c.id} className={c.id === "whatsapp" ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}>
                <Revelar atraso={i * 0.06} className="h-full">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex h-full items-center gap-4 rounded-3xl p-5 transition-all duration-200 hover:-translate-y-1 ${
                      c.id === "whatsapp"
                        ? "bg-creme text-ameixa lg:flex-col lg:items-start lg:justify-between lg:p-7"
                        : "bg-creme/[0.07] ring-1 ring-creme/10 hover:bg-creme/[0.12]"
                    }`}
                  >
                    <SeloCanal id={c.id} className={c.id === "whatsapp" ? "size-14 lg:size-16" : "size-14"} />
                    <span className="flex-1">
                      <span className="flex items-center gap-2 font-display text-xl font-semibold">
                        {c.nome}
                        {c.id === "whatsapp" && (
                          <span className="rounded-full bg-rosa-forte px-2.5 py-0.5 text-xs text-white">direto com a gente</span>
                        )}
                      </span>
                      <span className={`mt-1 block text-[15px] leading-snug ${c.id === "whatsapp" ? "text-ameixa-suave" : "text-creme/75"}`}>
                        {c.descricao}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 lg:self-end"
                      aria-hidden="true"
                    />
                  </a>
                </Revelar>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
