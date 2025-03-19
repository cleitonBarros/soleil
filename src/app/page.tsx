
"use client"
import Header from "@/components/header";
import { default as LayoutContainer } from "@/components/container";
import { ButtonDouble } from "@/components/ui/buttom";
import Footer from "@/components/footer";
import { Marquee } from "@/components/ui/marquee";
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" min-h-svh flex items-center flex-col justify-center">
        <LayoutContainer
          as="section"
          className="flex flex-col items-center justify-start gap-8"
        >
          <Logo />
          <hgroup className="text-center font-medium text-black dark:text-white">
            <h1 className="mb-8 font-roboto text-5xl">Soleil</h1>
            <p className="mb-8 max-w-[350px] font-roboto text-xl">
              Copy-and-paste library to streamline your day and projects.
            </p>

            <ButtonDouble>Get Started</ButtonDouble>
          </hgroup>
        </LayoutContainer>
        <Marquee>
          <span className="mx-10 text-2xl font-bold text-white dark:text-stone-950">
            🚀 ReactJS + Tailwind + Motion ⚡
          </span>
        </Marquee>
        <LayoutContainer
          as="section"
          className="mt-20 flex flex-col items-center justify-start gap-8"
        >
          <hgroup className="text-center font-medium text-black dark:text-white">
            <p className="mb-8 max-w-[550px] font-roboto text-xl">
              It is designed for you to easily modify the code or add it only to
              the part you need, with the existing component.
            </p>
          </hgroup>
        </LayoutContainer>
      </main>
      <Footer />
    </>
  );
}
