import localFont from "next/font/local";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
  display: "swap",
  preload: true
});

export const inter = localFont({
  src: "./Inter.ttf",
  variable: "--font-inter",
  display: "swap",
  preload: true
});
