import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { IconeWhatsapp } from "@/components/icone-whatsapp";
import type { Canal } from "@/lib/site";

// Quadradinho com a marca de cada app de pedido.
export function SeloCanal({ id, className = "size-14" }: { id: Canal["id"]; className?: string }) {
  const base = `grid shrink-0 place-items-center overflow-hidden rounded-2xl ${className}`;
  switch (id) {
    case "whatsapp":
      return (
        <span className={`${base} bg-whatsapp text-white`}>
          <IconeWhatsapp className="size-[55%]" />
        </span>
      );
    case "ifood":
      return (
        <span className={`${base} bg-ifood p-2`}>
          <Image src="/marcas/ifood.png" alt="" width={280} height={150} className="h-auto w-full" />
        </span>
      );
    case "keeta":
      return (
        <span className={base}>
          <Image src="/marcas/keeta.png" alt="" width={160} height={160} className="size-full" />
        </span>
      );
    case "noventa":
      return (
        <span className={`${base} bg-noventa font-display text-xl font-bold text-ameixa`} aria-hidden="true">
          99
        </span>
      );
    case "instadelivery":
      return (
        <span className={`${base} bg-instadelivery text-white`}>
          <ShoppingBag className="size-[45%]" aria-hidden="true" />
        </span>
      );
  }
}
