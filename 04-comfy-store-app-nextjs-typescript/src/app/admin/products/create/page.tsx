import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";
import {
  CheckboxInput,
  FormContainer,
  FormInput,
  ImageInput,
  PriceInput,
  SubmitButton,
  TextAreaInput,
} from "@/components/form";
import { createProductAction } from "@/utils/actions";

export default function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <section className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="product name :"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company :"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description :"
            defaultValue={description}
          />
          <section className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </section>

          <SubmitButton text="create product" className="mt-8" />
        </FormContainer>
      </section>
    </section>
  );
}
