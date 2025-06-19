// app/login/layout.tsx and app/signup/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Inter } from 'next/font/google';
import "../../globals.css";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700'], display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500'], display: 'swap' });

export const metadata: Metadata = {
  title: "Cashcrow | Login",
  description: "Login to your dashboard",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.className} ${inter.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
