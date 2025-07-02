// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Inter } from 'next/font/google';
import "../globals.css";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700'], display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500'], display: 'swap' });

export const metadata: Metadata = {
  title: "Cashcrow Dashboard",
  description: "Your bin management dashboard",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en" className={`${montserrat.className} ${inter.className}`} suppressHydrationWarning>
      <body className="flex">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="w-full bg-[#f9fafe] dark:bg-black">
              <Navbar />
              <div>{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
