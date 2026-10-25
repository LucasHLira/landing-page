import { sabores } from "@/lib/site";

const cores = { lilas: "bg-lilas", agua: "bg-agua", rosa: "bg-rosa" };

function Lista() {
  return (
    <ul className="flex shrink-0 items-center">
      {sabores.map((s) => (
        <li key={s.nome} className="flex items-center gap-6 pr-6 font-display text-2xl font-medium whitespace-nowrap sm:text-3xl">
          {s.nome}
          <span className={`size-3 rounded-full ${cores[s.tom]}`} />
        </li>
      ))}
    </ul>
  );
}

// Faixa corrida com todos os sabores. A lista aparece duas vezes para o loop não ter emenda.
export function FaixaSabores() {
  return (
    <div className="relative z-10 -my-4 -rotate-2 bg-ameixa py-5 text-creme shadow-xl">
      <p className="sr-only">Sabores da Pipolu: {sabores.map((s) => s.nome).join(", ")}.</p>
      <div className="flex w-max animate-marquee" aria-hidden="true">
        <Lista />
        <Lista />
      </div>
    </div>
  );
}
