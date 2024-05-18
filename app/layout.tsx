import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; import StoreProvider from "@/StoreProvider/StoreProvider";
;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "todo app",
  description: "plan your day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
