import { default as LayoutContainer } from "@/components/container";
const Footer = () => {
  return (
    <footer className="bg-stone-100 dark:bg-stone-950">
      <LayoutContainer className="flex h-56 items-center justify-between font-poppins">
        <div className="flex flex-col">
          <h2 className="mb-4 text-xl dark:text-white">Soleil</h2>
          <p className="text-sm text-stone-950 dark:text-stone-100">Make your day more flexible.</p>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Elias Moura @ {new Date().getFullYear()}
          </span>
        </div>
        <ul className="flex flex-col items-end  text-stone-950 dark:text-stone-100">
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
          <li>
            <a href="#">Site</a>
          </li>
        </ul>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
