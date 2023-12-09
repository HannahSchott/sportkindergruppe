import { Nunito, Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const nunito = Nunito({
  weight: "200",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});
