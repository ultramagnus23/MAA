import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  icons: { icon: "/logo.png" },
  title: {
    default: "Ministry of Academic Affairs, Ashoka University",
    template: "%s | Ministry of Academic Affairs",
  },
  description:
    "The Ministry of Academic Affairs (MAA) at Ashoka University: representatives, office hours, events, and academic resources for students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex min-h-screen flex-col`}
      >
      <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
