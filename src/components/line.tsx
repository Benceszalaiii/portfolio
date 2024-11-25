"use client";

import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useState } from "react";

export default function ScrollLine() {
  const { scrollYProgress } = useScroll({ axis: "y" });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (window.scrollY > 1){

      if (latest > 0.98) {
        setFullScreen(true);
      } else {
        setFullScreen(false);
      }
    }else{
      setFullScreen(false);
    }
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <AnimatePresence key={"presence"} presenceAffectsLayout={false} mode="sync">
      {fullScreen && (
        <div className="fixed top-0 flex h-screen w-screen z-30 items-start justify-center">
          <motion.div
          key={"fullScreen-box"}
            hidden={!fullScreen}
            className="fixed z-30 bg-yellow-500 flex items-center flex-col justify-center gap-4"
            initial={{
              height: "8px",
              width: "50%",
              textAlign: "center",
              borderRadius: "0% 0% 50% 50%",
            }}
            exit={{ height: "8px", width: "8px", borderRadius: "0% 0% 20% 20%" }}
            animate={{ height: "100vh", width: "100%", borderRadius: 0 }}
            layout="position"
            id="fullScreen-box"
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "keyframes",
              ease: "circInOut",
            }}
          >
            <motion.div
            key={"fullScreen-text"}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              layoutId="fullScreen-box"
              className="fixed z-30 hover:cursor-pointer text-black font-semibold text-3xl "
              initial={{ visibility: "hidden" }}
              exit={{ visibility: "hidden", color: "transparent" }}
              animate={{ visibility: "visible" }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                type: "keyframes",
                ease: "circInOut",
              }}
            >
              <p>
              Have a great day :&#41;
              </p>
              <p className="text-right mt-4 text-sm">Bence Szalai</p>
            </motion.div>
          </motion.div>
        </div>
      )}
      <motion.div
        key={"scrollLine"}
        className={clsx("w-full z-20 h-2 bg-yellow-500 fixed top-0 left-0")}
        style={{ scaleX: scaleX }}
      ></motion.div>
    </AnimatePresence>
  );
}
