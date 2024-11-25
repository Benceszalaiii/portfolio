"use client"
import { useEffect } from "react";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { useMousePosition } from "@/lib/hooks/usemousepos";
import { motion } from "framer-motion";
import useCursorTheme from "@/lib/hooks/usecursortheme";

export default function CursorGlow() {
  const mousePos = useMousePosition();
  const isMobile = useIsMobile();
  const {setCursorDefault}= useCursorTheme();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(setCursorDefault, [])
  return (
    <div
      className={`fixed left-0 top-0 -z-10 h-full w-full overflow-hidden`}
    >
      <motion.div
        hidden={isMobile || (mousePos.x === 0 && mousePos.y === 0)}
        className={`bg-cursor fixed h-28 w-28 rounded-xl opacity-55 blur-2xl transition-colors duration-700`}
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ duration: 0.2, ease: "easeOut", stiffness: 100 }}
      />
    </div>
  );
}