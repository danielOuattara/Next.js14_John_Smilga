import { FieldValues, type Control, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type CustomFormInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
};

export default function CustomFormInput<T extends FieldValues>({
  name,
  control,
}: CustomFormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{name} :</FormLabel>
          <FormControl>
            <Input placeholder={name} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
