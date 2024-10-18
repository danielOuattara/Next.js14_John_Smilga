import { fetchFeaturedProducts } from "@/utilities/action";
import { EmptyList, SectionTitle } from "../global";
import { ProductsGrid } from "../products";

export default async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) {
    return <EmptyList />;
  }
  return (
    <section>
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
}
