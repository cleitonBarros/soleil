import { PropsWithChildren } from "react";

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <button className=" bg-stone-950 px-6 py-2 font-poppins text-sm  text-white dark:bg-stone-100 dark:text-stone-950">
      {children}
    </button>
  );
};
