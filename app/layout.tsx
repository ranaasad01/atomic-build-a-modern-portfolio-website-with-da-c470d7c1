import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Alex Johnson — Full-Stack Developer",
  description:
    "Full-stack developer specializing in React, Next.js, and Node.js. Building beautiful, performant web experiences.",
  keywords: ["developer", "portfolio", "React", "Next.js", "TypeScript", "full-stack"],
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Alex Johnson — Full-Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, and Node.js.",
    type: "website",
    url: "https://alexjohnson.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson — Full-Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, and Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased bg-slate-950 text-slate-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
