import { LoadingProductsContainer, SectionTitle } from "../global";
import { Suspense } from "react";
import FeaturedProductsLoader from "./FeaturedProductsLoader";

export default async function FeaturedProducts() {
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <Suspense fallback={<LoadingProductsContainer />}>
        <FeaturedProductsLoader />
      </Suspense>
    </section>
  );
}
