import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Prisma } from "@prisma/client";

const name = Prisma.ProductScalarFieldEnum.price;

type TypeProps = {
  defaultValue?: number;
};

export default function PriceInput({ defaultValue }: TypeProps) {
  return (
    <section className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price (€) :
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
