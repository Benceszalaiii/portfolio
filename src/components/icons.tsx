import { Coffee } from "@geist-ui/icons";
import Github from "@geist-ui/icons/github";
import Link from "next/link";

export default function Icons() {
  return (
    <div className="fixed backdrop-blur-lg flex flex-row z-40 items-center w-24 h-12 gap-2 px-4 py-1 overflow-x-hidden transition-all duration-300 border border-gray-400 bg-black/35 bottom-4 rounded-2xl hover:w-64 group right-8">
      <Link
        className="flex flex-row items-center gap-2 antialiased transition-all duration-200 hover:text-yellow-500"
        href={"https://www.github.com/benceszalaiii"}
      >
        <Github />
        <span className="w-0 text-sm transition-all duration-200 scale-0 group-hover:w-12 group-hover:scale-100 ">
          GitHub
        </span>
      </Link>
      <Link
        className="flex flex-row items-center gap-2 antialiased transition-all duration-200 hover:text-yellow-500"
        href={"https://buymeacoffee.com/benceszalaii"}
      >
        <Coffee />
        <span className="w-0 text-sm transition-all duration-200 scale-0 group-hover:w-12 group-hover:scale-100 ">
          Buymeacoffee
        </span>
      </Link>
    </div>
  );
}
