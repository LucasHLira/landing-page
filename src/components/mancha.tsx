// Manchas orgânicas iguais às da logo. Decoração: invisível para leitor de tela.
const formas = {
  a: "M421 66c56 55 76 150 46 226-31 77-112 135-198 150-87 15-178-13-226-77C-5 301-10 202 33 128 76 54 168 4 254 3c69-1 113 9 167 63Z",
  b: "M398 54c62 47 101 135 79 213-22 79-104 149-193 168-88 19-183-14-238-82C-9 285-25 182 24 112 72 41 185 2 268 3c55 1 79 13 130 51Z",
  c: "M446 112c42 70 28 171-27 236-55 64-150 92-235 75C99 406 24 343 6 262-12 181 27 82 102 37 177-9 289-1 355 25c39 15 66 42 91 87Z",
};

type Props = {
  forma?: keyof typeof formas;
  className?: string;
};

export function Mancha({ forma = "a", className }: Props) {
  return (
    <svg viewBox="0 0 480 480" aria-hidden="true" className={className} preserveAspectRatio="none">
      <path d={formas[forma]} fill="currentColor" />
    </svg>
  );
}
