import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useCursorTheme() {
  const [defaultTheme, setDefaultTheme] = useState("");
  const [theme, setTheme] = useState(defaultTheme);
  const path = usePathname();
  const setCursorDefault = () => {
    setTheme(defaultTheme);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(setCursorDefault, [path]);
  useEffect(() => {
    const defaulttheme = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--cursor");
    setDefaultTheme(defaulttheme);
    setTheme(defaulttheme);
  }, [defaultTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty("--cursor", theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  return { theme, setTheme, setCursorDefault, defaultTheme };
}