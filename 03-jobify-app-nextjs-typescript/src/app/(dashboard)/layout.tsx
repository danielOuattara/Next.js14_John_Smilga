import { Navbar, Sidebar } from "@/components/navbar";
import { type PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <main className="grid lg:grid-cols-5">
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>

      <div className="lg:col-span-4">
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  );
}
