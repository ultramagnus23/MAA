import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const main = Source_Sans_3({ subsets: ["latin"], variable: "--font-main", display: "swap" });
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  icons: { icon: "/logo.png" },
  title: {
    default: "Ministry of Academic Affairs, Ashoka University",
    template: "%s | Ministry of Academic Affairs",
  },
  description:
    "The Ministry of Academic Affairs at Ashoka University: student representatives, office hours, events and academic resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={main.variable}>
      <body className="antialiased flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <div className="border-b border-line bg-paper-dim">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 text-sm text-ink-soft sm:px-8">
            <span>Ashoka University · Student Government Body</span>
            <span className="font-medium text-accent">Academic Year 2025–26</span>
          </div>
        </div>
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
