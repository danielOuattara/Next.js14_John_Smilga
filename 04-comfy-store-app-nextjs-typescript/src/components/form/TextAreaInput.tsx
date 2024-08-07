import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TypeProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

export default function TextAreaInput({
  name,
  labelText,
  defaultValue,
}: TypeProps) {
  return (
    <section className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className="leading-loose"
      />
    </section>
  );
}
