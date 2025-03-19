import { PropsWithChildren } from "react";

export const ButtonUnderline = ({ children }: PropsWithChildren) => {
  return (
    <button className="relative z-[1] overflow-hidden bg-stone-950 px-6 py-2 font-poppins text-sm text-white outline-none before:absolute before:-z-[1] before:content-[''] after:absolute after:bottom-0 after:left-0 after:-z-[1] after:h-full after:w-0 after:border-b-[6px] after:border-solid after:border-pink-800 after:transition-all after:duration-1000 after:content-[''] hover:after:w-full dark:bg-stone-100 dark:text-stone-950">
      {children}
    </button>
  );
};
