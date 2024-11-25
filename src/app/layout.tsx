import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { inter, sfPro } from "./fonts";

export const metadata: Metadata = {
  title: "Bence Szalai",
  description: "Personal portfolio for Bence Szalai"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sfPro.variable}`}>
      <head>
      <link rel="icon"href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>"/>
      </head>
      <body className={`antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute={"class"}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
