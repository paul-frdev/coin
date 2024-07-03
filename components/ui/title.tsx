import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}
export const Title: React.FC<TitleProps> = ({ children, className, variants }) => {
  return (
    <motion.h2
      variants={variants}
      className={cn(`scroll-m-20 text-[32px] fade-in-100 text-basic font-goggleSans font-bold tracking-tight transition-colors first:mt-0`, className)}
    >
      {children}
    </motion.h2>
  );
};
