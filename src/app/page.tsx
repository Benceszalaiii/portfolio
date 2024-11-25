"use client";
import GlowingCard from "@/components/card";
import Icons from "@/components/icons";
import Intro from "@/components/intro";
import ScrollLine from "@/components/line";
import { ParallaxText } from "@/components/parallaxtext";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col justify-center min-h-screen">
      <ScrollLine />
      <Intro />
      <ParallaxText title="Titles" baseVelocity={1}>
        SOFTWARE~ENGINEER FRONTEND BACKEND FULLSTACK SOFTWARE~TESTER
      </ParallaxText>
      <section id="introduction" className="px-4 py-12 md:px-12">
        <h1 className={`text-3xl ml-12 font-sf text-yellow-500 font-semibold`}>
          Introduction
        </h1>
        <article className="grid grid-cols-1 gap-4 p-2 mt-4 md:grid-cols-2 place-items-center ">
          <p className="max-w-screen-md tracking-wide font-inter text-justify">
            Hello, my name is Bence Szalai and I found my passion in
            transforming ideas into binary code. With a focus on full-stack
            development, I enjoy crafting everything from robust backends to
            intuitive user interfaces. Currently studying computer science at
            Jedlik Technikum Győr, I continuously explore the ever-evolving
            world of technology to enhance my skills and innovate across the
            stack.
          </p>
          <Image
            draggable="false"
            width={480}
            height={480}
            title="My GitHub avatar"
            className="object-contain object-center rounded-md size-48"
            alt="Avatar"
            src={"https://avatars.githubusercontent.com/u/120375165?v=4"}
          ></Image>
        </article>
      </section>
      <ParallaxText title="Programming languages" baseVelocity={-1}>
        JAVASCRIPT RUST PYTHON TYPESCRIPT C# GO
      </ParallaxText>
      <section id="experience" className="px-4 py-12 md:px-12">
        <h1 className={`text-3xl ml-12 font-sf text-yellow-500 font-semibold`}>
          Experience
        </h1>
        <article className="grid grid-cols-1 gap-4 p-2 mt-4 md:grid-cols-2 place-items-center ">
          <p className="max-w-screen-md tracking-wide font-inter text-justify">
            I have been studying computer science for 3 years, mainly working
            with Python, JavaScript, and C#. Working with React and Next.js for
            the past year, using them to create multiple projects. I am a big
            fan of the Rust programming language, which I use to solve Leetcode
            problems.
          </p>
          <Image unoptimized draggable="false" width={495} height={195} className="object-contain object-center" alt="Leetcode Statistics" src={"https://leetcode-stats.vercel.app/api?username=benceszalaiii&theme=Raspberry"}></Image>
        </article>
      </section>
      <ParallaxText title="Cloud platforms" baseVelocity={1}>
        AWS VERCEL CLOUDFLARE GOOGLE SUPABASE
      </ParallaxText>
      <section id="projects" className="px-4 py-12 md:px-12">
        <h1 className={`text-3xl ml-12 font-sf text-yellow-500 font-semibold`}>
          Projects
        </h1>
        <article className="grid grid-cols-1 gap-4 p-2 mt-4 md:grid-cols-2 place-items-center ">
          <p className="max-w-screen-md tracking-wide font-inter text-justify">
            I had the opportunity to work on multiple projects, ranging from python games to full-stack web applications. I have also created a few open-source projects, such as WordUI, and this portfolio site. I am currently developing a language learning app WordShare with <span title="TypeScript, Next.js, Supabase, Prisma, TailwindCSS, PostgreSQL, AWS">T3WS</span> stack hybrid. Feel free to check out my GitHub for more projects.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 place-items-center"></div>
        </article>
      </section>
      <ParallaxText title="Tools" baseVelocity={-1}>
        REACT NEXT.JS FRAMER-MOTION TAILWINDCSS RADIX-UI TAURI LUCIDE~ICONS
      </ParallaxText>
      <section className="px-4 py-12 md:px-12">
        <h1 className={`text-3xl ml-12 font-sf text-yellow-500 font-semibold`}>
          Frontend tools
        </h1>
        <article className="grid grid-cols-1 gap-4 p-2 mt-4 md:grid-cols-2 place-items-center ">
          <p className="max-w-screen-md tracking-wide font-inter text-justify">
            I&apos;ve been mainly using shadcn and framer-motion for animations.
            I also use TailwindCSS for styling and Radix-ui for primitives,
            Lucide icons for icons.
          </p>
          <GlowingCard title="WordUI" description="My own &apos;Headless UI&apos; library for React." href="https://benceszalaiii.github.io/word-ui" buttonTitle="Visit site" />
        </article>
      </section>
      <div about="scroller" className="h-64 w-full"></div>
      <Icons />
    </main>
  );
}
