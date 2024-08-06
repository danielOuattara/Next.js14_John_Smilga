import { fetchFeaturedProducts } from "@/utils/actions";
import { EmptyList, LoadingContainer, SectionTitle } from "../global";
import { Suspense } from "react";
import FeaturedProductsLoader from "./FeaturedProductsLoader";

export default async function FeaturedProducts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProductsLoader />
      </Suspense>
    </section>
  );
}
