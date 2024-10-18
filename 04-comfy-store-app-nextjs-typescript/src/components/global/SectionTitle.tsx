import { Separator } from "@/components/ui/separator";

type TypeProps = {
  text: string;
};

export default function SectionTitle({ text }: TypeProps) {
  return (
    <>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {text}
      </h2>
      <Separator />
    </>
  );
}
