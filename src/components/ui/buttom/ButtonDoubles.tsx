import { PropsWithChildren } from "react";

export const ButtonDouble = ({ children }: PropsWithChildren) => {
  return (
    <button className="bg-stone-950  px-6 py-2 font-poppins text-sm text-white  hover:shadow-[6px_6px_0_#aaaaaa] dark:bg-white dark:text-stone-950 transition-all duration-300">
      {children}
    </button>
  );
};
