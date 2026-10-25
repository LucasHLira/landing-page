import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { linkWhatsapp, mensagens, type Sabor } from "@/lib/site";

const tons = {
  lilas: { fundo: "bg-lilas-claro", ponto: "bg-lilas" },
  agua: { fundo: "bg-agua-claro", ponto: "bg-agua" },
  rosa: { fundo: "bg-rosa-claro", ponto: "bg-rosa" },
};

// Card clicável: abre o WhatsApp já com o sabor escrito na mensagem.
export function CardSabor({ sabor }: { sabor: Sabor & { foto: string } }) {
  const tom = tons[sabor.tom];
  return (
    <a
      href={linkWhatsapp(mensagens.sabor(sabor.nome))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Pedir a pipoca de ${sabor.nome} pelo WhatsApp`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-2 transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-[-1deg] ${tom.fundo}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
        <Image
          src={sabor.foto}
          alt={`Pipoca gourmet sabor ${sabor.nome}`}
          fill
          sizes="(min-width: 1024px) 220px, 45vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-2.5 right-2.5 grid size-9 place-items-center rounded-full bg-white/90 text-ameixa shadow-sm transition-colors group-hover:bg-rosa-forte group-hover:text-white">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 items-center gap-2 px-2 pt-3 pb-2">
        <span className={`size-2.5 shrink-0 rounded-full ${tom.ponto}`} aria-hidden="true" />
        <h3 className="font-display text-base leading-tight font-semibold sm:text-lg">{sabor.nome}</h3>
      </div>
    </a>
  );
}
