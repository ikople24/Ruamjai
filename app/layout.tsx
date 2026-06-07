import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* ─── Display: Lemon Milk Pro (geometric headings) ─────────────────── */
const lemonMilk = localFont({
  src: [
    { path: "../public/fonts/Lemon-Milk-Pro-Light.otf",    weight: "300", style: "normal" },
    { path: "../public/fonts/Lemon-Milk-Pro-Regular.otf",  weight: "400", style: "normal" },
    { path: "../public/fonts/Lemon-Milk-Pro-Medium.otf",   weight: "500", style: "normal" },
    { path: "../public/fonts/Lemon-Milk-Pro-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/Lemon-Milk-Pro-Bold.otf",     weight: "700", style: "normal" },
    { path: "../public/fonts/Lemon-Milk-Pro-Heavy.otf",    weight: "800", style: "normal" },
  ],
  variable: "--font-lemon-milk",
  display: "swap",
});

/* ─── Body + Thai: FC Minimal ──────────────────────────────────────── */
const fcMinimal = localFont({
  src: [
    { path: "../public/fonts/FCMinimal-Thin.ttf",      weight: "100", style: "normal" },
    { path: "../public/fonts/FCMinimal-Light.ttf",     weight: "300", style: "normal" },
    { path: "../public/fonts/FCMinimal-Regular.ttf",   weight: "400", style: "normal" },
    { path: "../public/fonts/FCMinimal-Medium.ttf",    weight: "500", style: "normal" },
    { path: "../public/fonts/FCMinimal-SemiBold.ttf",  weight: "600", style: "normal" },
    { path: "../public/fonts/FCMinimal-Bold.ttf",      weight: "700", style: "normal" },
    { path: "../public/fonts/FCMinimal-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-fc-minimal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ruamjai.co.th"),
  title: "RJ Ruamjai — Bridging Trust. Expanding Horizons.",
  description:
    "Strategic Knowledge & Investment Hub connecting Thailand, Laos, and ASEAN. Think Tank · Deal Maker · Project Enabler · Network Hub.",
  keywords: ["Thailand", "Laos", "ASEAN", "Strategic Consulting", "Investment", "Mekong Region"],
  openGraph: {
    title: "RJ Ruamjai Thai-Lao Co., Ltd.",
    description: "Bridging Trust. Expanding Horizons.",
    siteName: "RJ Ruamjai",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RJ Ruamjai Thai-Lao Co., Ltd.",
    description: "Bridging Trust. Expanding Horizons.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${lemonMilk.variable} ${fcMinimal.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
