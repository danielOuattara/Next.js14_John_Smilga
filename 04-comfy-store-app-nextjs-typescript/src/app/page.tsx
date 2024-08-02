import { Button } from "@/components/ui/button";
import "./../utils/db-seed";
export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl">HomePage</h1>
      <Button variant="outline" size="lg" className="capitalize m-8">
        Click me
      </Button>
    </>
  );
}
