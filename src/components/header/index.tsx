"use client";
import { default as LayoutContainer } from "@/components/container";
import Switch from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setIsOn(
        theme === "dark" || (theme === "system" && systemTheme === "dark"),
      );
    }
  }, [theme, systemTheme, mounted]);

  if (!mounted) return null;

  return (
    <header className="bg-stone-100 dark:bg-stone-950">
      <LayoutContainer
        as="nav"
        className="flex h-11 items-center justify-center"
      >
        <Switch
          type="icon"
          enabled={isOn}
          onChange={(val) => {
            setIsOn(val);
            setTheme(val ? "dark" : "light");
          }}
        />
      </LayoutContainer>
    </header>
  );
};
export default Header;
