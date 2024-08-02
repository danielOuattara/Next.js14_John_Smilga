import { Input } from "@/components/ui/input";

export default function NavSearch() {
  return (
    <Input
      type="search"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted "
    />
  );
}
