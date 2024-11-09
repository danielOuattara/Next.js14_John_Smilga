import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Button variant={"outline"} size={"icon"} className="px-10 py-5">
        click
      </Button>
    </div>
  );
}
