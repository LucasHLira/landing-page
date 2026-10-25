import { MarcaPipolu } from "@/components/marca-pipolu";

const links = [
  { href: "#sabores", rotulo: "Sabores" },
  { href: "#sobre", rotulo: "Nossa história" },
  { href: "#festas", rotulo: "Festas" },
  { href: "#duvidas", rotulo: "Dúvidas" },
];

export function Cabecalho() {
  return (
    <header className="sticky top-0 z-40 border-b border-ameixa/5 bg-creme/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <a href="#inicio" aria-label="Pipolu, voltar ao início">
          <MarcaPipolu className="h-9 w-auto sm:h-11" />
        </a>
        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex items-center gap-8 font-display text-[15px] font-medium text-ameixa-suave">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ameixa">
                  {l.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#pedir"
          className="inline-flex min-h-11 items-center rounded-full bg-ameixa px-5 font-display text-sm font-semibold text-creme transition-colors hover:bg-lilas-forte"
        >
          Pedir agora
        </a>
      </div>
    </header>
  );
}
