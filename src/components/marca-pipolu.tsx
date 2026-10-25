import Image from "next/image";

export function MarcaPipolu({ className }: { className?: string }) {
  return (
    <Image
      src="/marcas/pipolu.png"
      alt="Pipolu Pipocas Gourmet"
      width={880}
      height={240}
      className={className}
      sizes="200px"
    />
  );
}
