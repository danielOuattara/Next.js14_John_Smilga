import {
  CheckboxInput,
  FormContainer,
  FormInput,
  PriceInput,
  SubmitButton,
  TextAreaInput,
} from "@/components/form";
import {
  fetchAdminProductsDetails,
  updateProduct,
} from "@/utils/actions-admin";

type TypeProps = {
  params: { productId: string };
};

export default async function EditProductPage({ params }: TypeProps) {
  const product = await fetchAdminProductsDetails(params.productId);

  console.log("product = ", product);

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">update product</h1>
      <div className="border p-8 rounded-md">
        {/* Image Input Container */}
        <FormContainer action={updateProduct}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={product.id} />
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={product.name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={product.company}
            />

            <PriceInput defaultValue={product.price} />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={product.description}
          />
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="featured"
              defaultChecked={product.featured}
            />
          </div>
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
