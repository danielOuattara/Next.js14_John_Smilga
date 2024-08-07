import { Label } from "../ui/label";
import { Input } from "../ui/input";

type TypeProps = {
  name: string;
  defaultValue?: number;
};

export default function PriceInput({
  name = "price",
  defaultValue,
}: TypeProps) {
  return (
    <section className="mb-2">
      <Label htmlFor="price" className="capitalize">
        Price (€)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </section>
  );
}
