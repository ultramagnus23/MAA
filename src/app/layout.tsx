import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
