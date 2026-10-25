import Image from "next/image";
import { Baby, Cake, PartyPopper } from "lucide-react";
import { Botao } from "@/components/botao";
import { IconeWhatsapp } from "@/components/icone-whatsapp";
import { Revelar } from "@/components/revelar";
import { TituloSecao } from "@/components/titulo-secao";
import { linkWhatsapp, mensagens } from "@/lib/site";

const ocasioes = [
  { icone: Cake, rotulo: "Aniversários" },
  { icone: Baby, rotulo: "Chás de bebê" },
  { icone: PartyPopper, rotulo: "Comemorações" },
];

export function SecaoFestas() {
  return (
    <section id="festas" className="px-4 pb-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-lilas-claro lg:grid-cols-[1fr_1.1fr]">
        <div className="relative min-h-80 lg:min-h-full">
          <Image
            src="/fotos/bandeja.webp"
            alt="Bandeja dourada com pacotes de pipoca gourmet Pipolu de vários sabores"
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover"
          />
        </div>
        <Revelar className="p-8 sm:p-12 lg:p-14">
          <TituloSecao
            selo="Encomendas"
            titulo="Festa boa tem pipoca Pipolu"
            texto="A Pipolu já esteve em aniversários, chás de bebê e muitas comemorações. Para encomendar, chame no WhatsApp com a data, a quantidade e os sabores que você quer."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {ocasioes.map((o) => (
              <li key={o.rotulo} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-display text-sm font-semibold">
                <o.icone className="size-4 text-lilas-forte" aria-hidden="true" />
                {o.rotulo}
              </li>
            ))}
          </ul>
          <Botao href={linkWhatsapp(mensagens.festa)} externo className="mt-8">
            <IconeWhatsapp className="size-5" />
            Fazer minha encomenda
          </Botao>
        </Revelar>
      </div>
    </section>
  );
}
