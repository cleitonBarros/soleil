import { PropsWithChildren } from "react";

export const ButtonAnimationWithArrrow = ({ children }: PropsWithChildren) => {
  return (
    <button className="group bg-stone-950 px-6 py-2 font-poppins text-white transition-all duration-150 dark:bg-stone-100 dark:text-stone-950">
      <span className="relative inline-flex duration-150 after:absolute after:-right-16 after:-top-1.5 after:scale-150 after:opacity-0 after:duration-150 after:content-['\203A'] group-hover:pr-6 after:text-2xl group-hover:after:-right-2.5 group-hover:after:opacity-100">
        {children}
      </span>
    </button>
  );
};
