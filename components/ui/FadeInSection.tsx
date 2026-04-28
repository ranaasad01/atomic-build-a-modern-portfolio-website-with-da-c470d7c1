"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}

export function FadeInSection({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  once = true,
}: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const adjustedVariants: Variants = {
    hidden: variants.hidden as object,
    visible: {
      ...(variants.visible as object),
      transition: {
        ...((variants.visible as { transition?: object })?.transition ?? {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={adjustedVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
