import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Prisma } from "@prisma/client";

const name = Prisma.ProductScalarFieldEnum.image;

export default function ImageInput() {
  return (
    <section className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image :
      </Label>
      <Input id={name} name={name} type="file" required accept="image/*" />
    </section>
  );
}
