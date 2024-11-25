"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function SelfAvatar({ className }: { className?: string }) {
  const { scrollY } = useScroll();
  scrollY.get();
  return (
    <motion.div className={` absolute ${className}`} animate={{ y: 250 }}>
      <Link prefetch href="https://www.github.com/benceszalaiii">
        <Avatar className="w-full h-full cursor-pointer">
          <AvatarImage
            draggable={false}
            src="https://lh3.googleusercontent.com/a/ACg8ocLCrgeRNPRY175ADfCC3V_3wS1iN0ZINWyzEcv8WFkM_hJ45qha=s1000-c"
          ></AvatarImage>
          <AvatarFallback>BSZ</AvatarFallback>
        </Avatar>
      </Link>
    </motion.div>
  );
}
