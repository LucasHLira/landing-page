"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconeWhatsapp } from "@/components/icone-whatsapp";
import { linkWhatsapp, mensagens } from "@/lib/site";

// Aparece depois que a pessoa passa do topo, para o pedido estar sempre a um toque.
// Some quando o bloco "Escolha onde pedir" está na tela (lá o WhatsApp já aparece).
export function BotaoFlutuante() {
  const [passouDoTopo, setPassouDoTopo] = useState(false);
  const [blocoPedirNaTela, setBlocoPedirNaTela] = useState(false);

  useEffect(() => {
    const aoRolar = () => setPassouDoTopo(window.scrollY > 600);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });

    const blocoPedir = document.getElementById("pedir");
    const observador = new IntersectionObserver(([e]) => setBlocoPedirNaTela(e.isIntersecting), { threshold: 0.15 });
    if (blocoPedir) observador.observe(blocoPedir);

    return () => {
      window.removeEventListener("scroll", aoRolar);
      observador.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {passouDoTopo && !blocoPedirNaTela && (
        <motion.a
          href={linkWhatsapp(mensagens.geral)}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed right-4 bottom-4 z-50 inline-flex min-h-14 items-center gap-2 rounded-full bg-rosa-forte px-5 font-display font-semibold text-white shadow-[0_12px_30px_-8px_rgba(210,58,98,0.8)] hover:bg-rosa-forte-hover sm:right-6 sm:bottom-6"
        >
          <IconeWhatsapp className="size-6" />
          Pedir pelo WhatsApp
        </motion.a>
      )}
    </AnimatePresence>
  );
}
