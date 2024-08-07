import { Separator } from "@radix-ui/react-dropdown-menu";
import Sidebar from "./Sidebar";

type TypeProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: TypeProps) {
  return (
    <>
      <h2 className="text-2xl pl-4">Admin Dashboard</h2>
      <Separator className="mt-2" />
      <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <Sidebar className="lg:col-span-2" />
        <div className="lg:col-span-10 px-4">{children}</div>
      </section>
    </>
  );
}
