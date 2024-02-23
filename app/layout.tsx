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
        <main className="flex w-full px-6 py-20 h-screen">
        <Sidebar/>
        {children}
        </main>
      </Themeprovider>
    </html>
  );
}
