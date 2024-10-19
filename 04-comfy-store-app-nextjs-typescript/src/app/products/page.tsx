import { ProductsContainer } from "@/components/products";

type TypeProps = {
  params: string;
  searchParams: { layout?: string; search?: string };
};

export default function ProductPage({ params, searchParams }: TypeProps) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return <ProductsContainer layout={layout} search={search} />;
}
