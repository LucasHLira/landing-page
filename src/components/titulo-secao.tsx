type Props = {
  selo: string;
  titulo: React.ReactNode;
  texto?: string;
  centro?: boolean;
  escuro?: boolean;
};

export function TituloSecao({ selo, titulo, texto, centro = false, escuro = false }: Props) {
  return (
    <div className={centro ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`font-display text-sm font-semibold tracking-[0.18em] uppercase ${escuro ? "text-agua" : "text-agua-forte"}`}>
        {selo}
      </p>
      <h2 className="mt-3 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
        {titulo}
      </h2>
      {texto && (
        <p className={`mt-4 text-lg leading-relaxed ${escuro ? "text-creme/80" : "text-ameixa-suave"}`}>{texto}</p>
      )}
    </div>
  );
}
