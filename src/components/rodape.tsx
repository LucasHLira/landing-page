import { MapPin } from "lucide-react";
import { IconeWhatsapp } from "@/components/icone-whatsapp";
import { MarcaPipolu } from "@/components/marca-pipolu";
import { canais, linkWhatsapp, mensagens, site } from "@/lib/site";

export function Rodape() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pt-6 pb-28 sm:px-6 md:pb-12">
      <div className="flex flex-col gap-8 border-t border-ameixa/10 pt-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <MarcaPipolu className="h-11 w-auto" />
          <p className="mt-4 text-ameixa-suave">Pipoca gourmet artesanal, crocante e feita com carinho.</p>
        </div>
        <address className="grid gap-3 not-italic">
          <span className="inline-flex items-center gap-2 text-ameixa-suave">
            <MapPin className="size-4 text-agua-forte" aria-hidden="true" />
            {site.bairro}, {site.cidade} – {site.estado}
          </span>
          <a
            href={linkWhatsapp(mensagens.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold hover:text-rosa-forte"
          >
            <IconeWhatsapp className="size-4 text-agua-forte" />
            {site.whatsappVisivel}
          </a>
        </address>
        <nav aria-label="Onde pedir">
          <p className="font-display font-semibold">Onde pedir</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 text-ameixa-suave">
            {canais.map((c) => (
              <li key={c.id}>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-ameixa">
                  {c.nome}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mt-10 text-sm text-ameixa-suave">© {site.nome}</p>
    </footer>
  );
}
