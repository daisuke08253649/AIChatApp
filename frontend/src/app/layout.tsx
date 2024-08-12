import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Chat",
  description: "AI Chat",
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-[#7494C0]">
          <Navigation />

          <main className="flex-1 container max-w-screen-md mx-auto px-2 py-5 relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
