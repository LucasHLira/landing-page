import { CardSabor } from "@/components/card-sabor";
import { Revelar } from "@/components/revelar";
import { TituloSecao } from "@/components/titulo-secao";
import { sabores, type Sabor } from "@/lib/site";

const comFoto = sabores.filter((s): s is Sabor & { foto: string } => Boolean(s.foto));
const semFoto = sabores.filter((s) => !s.foto);

export function SecaoSabores() {
  return (
    <section id="sabores" className="mx-auto max-w-6xl px-4 pt-28 pb-24 sm:px-6">
      <Revelar>
        <TituloSecao
          selo="Cardápio"
          titulo={
            <>
              Escolha seu sabor favorito <span className="text-rosa-forte">(ou vários)</span>
            </>
          }
          texto="Toque no sabor e ele já vai escrito na mensagem do WhatsApp."
        />
      </Revelar>

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
        {comFoto.map((s, i) => (
          <li key={s.nome}>
            <Revelar atraso={(i % 5) * 0.06} className="h-full">
              <CardSabor sabor={s} />
            </Revelar>
          </li>
        ))}
        <li>
          <Revelar atraso={0.24} className="h-full">
            <div className="flex h-full flex-col rounded-[1.75rem] bg-ameixa p-5 text-creme">
              <p className="font-display text-4xl font-semibold text-agua">+{semFoto.length}</p>
              <p className="mt-1 font-display text-lg leading-tight font-semibold">sabores para provar</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {semFoto.map((s) => (
                  <li key={s.nome} className="rounded-full bg-creme/10 px-2.5 py-1 text-[13px] font-semibold">
                    {s.nome}
                  </li>
                ))}
              </ul>
            </div>
          </Revelar>
        </li>
      </ul>

      <p className="mt-6 text-sm text-ameixa-suave">
        Os sabores disponíveis podem mudar no dia. Confira no app ou pergunte no WhatsApp.
      </p>
    </section>
  );
}
