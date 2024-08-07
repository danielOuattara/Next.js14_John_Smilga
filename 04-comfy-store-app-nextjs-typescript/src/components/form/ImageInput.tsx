import { Label } from "../ui/label";
import { Input } from "../ui/input";

type TypeProps = {
  name: string;
};

export default function ImageInput({ name = "image" }: TypeProps) {
  return (
    <section className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input id={name} name={name} type="file" required accept="image/*" />
    </section>
  );
}
