type Props = {
  href: string;
  children: React.ReactNode;
  variante?: "pedido" | "contorno" | "claro";
  externo?: boolean;
  className?: string;
};

const estilos = {
  pedido:
    "bg-rosa-forte text-white shadow-[0_10px_30px_-10px_rgba(210,58,98,0.7)] hover:bg-rosa-forte-hover hover:-translate-y-0.5",
  contorno: "border-2 border-ameixa/15 text-ameixa hover:border-ameixa/40 hover:bg-white",
  claro: "bg-creme text-ameixa hover:bg-white hover:-translate-y-0.5",
};

export function Botao({ href, children, variante = "pedido", externo = false, className = "" }: Props) {
  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-base font-semibold transition-all duration-200 ${estilos[variante]} ${className}`}
    >
      {children}
    </a>
  );
}
