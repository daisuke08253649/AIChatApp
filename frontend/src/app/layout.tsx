import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import SupabaseProvider from "./components/supabase-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Chat",
  description: "AI Chat",
};

export default function RootLayout({ children,}: {children: React.ReactNode}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <SupabaseProvider>
          <div className="flex flex-col min-h-screen bg-[#add8e6]">
            <Navigation />

            <main className="flex-1 container max-w-screen-md mx-auto px-2 py-5 relative mt-16">
              {children}
            </main>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
