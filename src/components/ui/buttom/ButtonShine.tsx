import { PropsWithChildren } from "react";

export const ButtonShine = ({ children }: PropsWithChildren) => {
  return (
    <button className="relative z-[1] overflow-hidden bg-stone-950 px-6 py-2 font-poppins text-sm text-white outline-none before:absolute before:-z-[1] before:content-[''] after:absolute after:-left-[35%] after:top-0 after:-z-[1] after:h-full after:w-0 after:origin-top-left after:skew-x-[50deg] after:bg-stone-100 after:duration-1000 after:content-[''] hover:text-black hover:after:w-[150%] dark:bg-stone-100 dark:text-stone-950 after:dark:bg-stone-950 hover:dark:text-white">
      {children}
    </button>
  );
};
