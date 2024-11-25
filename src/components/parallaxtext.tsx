import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { useRef } from "react";
interface ParallaxProps {
  children: string;
  title: string;
  baseVelocity: number;
}
export function ParallaxText({ children, title, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  const handledText = children.split(" ").map((item) => { return item.replaceAll("~", " ")});
  return (
    <div className="parallax" title={title}>
      <motion.div
        className="py-6 font-mono tracking-wider text-gray-500 whitespace scroller"
        style={{ x }}
      >
        <p className="flex flex-row gap-1 cursor-pointer selection:bg-transparent ">
          {handledText.map((item) => {
            return <span className="transition-all duration-500 select-all hover:text-yellow-500 selection:text-yellow-600 hover:scale-110" key={item}>{item}</span>;
          })}{" "}
        </p>
        <p className="flex flex-row gap-1 cursor-pointer selection:bg-transparent ">
          {handledText.map((item) => {
            return <span className="transition-all duration-500 select-all hover:text-yellow-500 selection:text-yellow-600 hover:scale-110" key={item}>{item}</span>;
          })}{" "}
        </p>
        <p className="flex flex-row gap-1 cursor-pointer selection:bg-transparent ">
          {handledText.map((item) => {
            return <span className="transition-all duration-500 select-all hover:text-yellow-500 selection:text-yellow-600 hover:scale-110" key={item}>{item}</span>;
          })}{" "}
        </p>
        <p className="flex flex-row gap-1 cursor-pointer selection:bg-transparent ">
          {handledText.map((item) => {
            return <span className="transition-all duration-500 select-all hover:text-yellow-500 selection:text-yellow-600 hover:scale-110" key={item}>{item}</span>;
          })}{" "}
        </p>
        <p className="flex flex-row gap-1 cursor-pointer selection:bg-transparent ">
          {handledText.map((item) => {
            return <span className="transition-all duration-500 select-all hover:text-yellow-500 selection:text-yellow-600 hover:scale-110" key={item}>{item}</span>;
          })}{" "}
        </p>
        <p className="flex flex-row gap-1 cursor-pointer selection:bg-transparent ">
          {handledText.map((item) => {
            return <span className="transition-all duration-500 select-all hover:text-yellow-500 selection:text-yellow-600 hover:scale-110" key={item}>{item}</span>;
          })}{" "}
        </p>
      </motion.div>
    </div>
  );
}
