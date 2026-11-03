import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const sc = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-noto-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "潮汐档案 / Tidal Archive",
  description:
    "Ocean 的个人站原型。向下滚动即下潜：海面、人像、应用、档案。内容均为示意。",
  other: {
    google: "notranslate",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hans"
      translate="no"
      className={`${sans.variable} ${serif.variable} ${sc.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
