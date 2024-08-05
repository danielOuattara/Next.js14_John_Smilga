import { fetchFeaturedProducts } from "@/utils/actions";
import { EmptyList, SectionTitle } from "../global";
import { ProductsGrid } from "../products";

export default async function FeaturedProducts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
}
