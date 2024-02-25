import type { Metadata } from "next";
import Header from "./ui/components/Header";
import Themeprovider from "./ui/components/Themeprovider";
import Sidebar from "./ui/components/Sidebar";

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
    <html lang="en">
      <Themeprovider>
        <Header />
        <main className="flex w-full px-6 pt-[40px] pb-[40px] md:h-screen">
        <Sidebar/>
        {children}
        </main>
      </Themeprovider>
    </html>
  );
}
