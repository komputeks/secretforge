import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SecretForge - Open Source Secret Management",
  description: "Manage secrets for your projects. Sync to GitHub and Vercel. Built for developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
