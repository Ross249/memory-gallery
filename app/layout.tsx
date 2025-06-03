import type { Metadata } from "next";
import { Geist, Geist_Mono, Slabo_27px } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Slobe = Slabo_27px({
  variable: "--font-slabo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jim Luo's Memory",
  description: "Welcome to Jim Luo's Memory",
  keywords: [
    "gallery",
    "photography",
    "travel",
    "blog",
    "personal",
    "portfolio",
  ],
  openGraph: {
    title: "Jim Luo's Memory",
    description: "Welcome to Jim Luo's Memory",
    url: "https://memory.jimluo.com",
    siteName: "Jim Luo's Memory",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Jim Luo's Memory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${Slobe.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
