"use client";

import { MotionConfig } from "framer-motion";

// Quem pediu "reduzir movimento" no celular/computador não vê animação.
export function ProvedorMovimento({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
