import { fetchFeaturedProducts } from "@/utils/actions-public";
import { ProductsGrid } from "../products";
import { EmptyList } from "../global";

export default async function FeaturedProductsLoader() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const products = await fetchFeaturedProducts();

  if (products.length === 0) {
    return <EmptyList />;
  }

  return <ProductsGrid products={products} />;
}
