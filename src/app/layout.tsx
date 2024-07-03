import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "NEXT JS 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <AppRouterCacheProvider>
          <Navbar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
