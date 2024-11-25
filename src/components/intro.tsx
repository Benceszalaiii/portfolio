import { sfPro } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Intro({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "flex flex-col gap-4 justify-center w-full items-center h-72 my-24",
          className
        )}
      >
        <h1
          className={`bg-clip-text text-5xl from-yellow-500 to-yellow-600 bg-gradient-to-r text-transparent font-extrabold ${sfPro.className}`}
        >
          Bence Szalai
        </h1>
        <p
          className={`w-full text-center hover:animate-rotate-y animate-once animate-duration-[800ms] animate-ease-in-out cursor-default underline-offset-4 underline text-yellow-500/50 font-light tracking-wider ${sfPro.className}`}
        >
          Digital Alchemist & Code Connoisseur
        </p>
      </div>
      <nav className="flex flex-row gap-4 w-full justify-center">
        <Button
            className="font-semibold font-inter tracking-wider hover:text-yellow-500 transition-colors duration-500"
          variant={"linkHover2"}
          size={"lg"}
        >
          <a
            href="#introduction"
          >
            Introduction
          </a>
        </Button>
        <Button
          className="font-semibold font-inter tracking-wider hover:text-yellow-500 transition-colors duration-500"
          variant={"linkHover2"}
          size={"lg"}
        >
          <a
            href="#experience"

          >
            Experience
          </a>
        </Button>
        <Button
          className="font-semibold font-inter tracking-wider hover:text-yellow-500 transition-colors duration-500"
          variant={"linkHover2"}
          size={"lg"}
        >
          <a href="#projects">Projects</a>
        </Button>
      </nav>
      <div className="h-1 w-full bg-gradient-to-r mt-2 from-yellow-500 to-orange-500 via-50% via-amber-500"></div>
    </>
  );
}
