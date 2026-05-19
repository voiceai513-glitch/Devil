import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import "./globals.css";
import '@mantine/core/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "white devil",
  description: "A simple user management app built with Next.js, Mantine, and MongoDB.",
   icons: {
    icon: [
      {
        rel: "icon",
         url: "/i.png",
      },
      {
        rel: "apple-touch-icon",
        url: "/i.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ✅ MantineProvider wrap */}
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
