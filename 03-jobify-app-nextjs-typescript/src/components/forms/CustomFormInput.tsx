import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { FieldValues, type Control, Path } from "react-hook-form";

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
          <FormDescription>Type in the {name}.</FormDescription>
          <FormControl>
            <Input placeholder={name} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
