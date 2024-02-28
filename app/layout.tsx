import type { Metadata } from "next";
import Header from "./ui/components/Header";
import { archivo } from "@/app/ui/fonts";
import { ThemeProvider } from "./ui/components/Themeprovider";
import Sidebar from "./ui/components/Sidebar";
import "@/app/ui/globals.css";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "KDontsov developer",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body
          className={clsx(
            `${archivo.className} relative md:max-h-screen md:overflow-hidden`
          )}
        >
          <ThemeProvider>
          <Header />
          <main className="flex w-full px-6 pt-[40px] pb-[40px] md:h-screen">
            <Sidebar />
            {children}
          </main>
          </ThemeProvider>
        </body>
      
    </html>
  );
}
