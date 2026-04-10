// components/shared/ClientLayout.tsx
"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/footer";
import Navbar from "./navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hasFooter = pathname !== "/coming-soon";

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {hasFooter && <Footer />}
    </>
  );
}
