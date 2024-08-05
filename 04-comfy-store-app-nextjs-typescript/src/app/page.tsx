import { LoadingContainer } from "@/components/global";
import { FeaturedProducts, Hero } from "@/components/home";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
