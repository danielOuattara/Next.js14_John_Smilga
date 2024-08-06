import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";

type TypeProps = {
  layout: string;
  search: string;
};

export default async function ProductsContainer({ layout, search }: TypeProps) {
  const products = await fetchAllProducts();
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      {/* HEADER */}

      <section className="flex justify-between items-center">
        <h4 className="font-medium text-lg">
          {products.length} product{products.length > 1 && "s"}
        </h4>
        <div className="flex gap-x-4">
          <Button
            variant={layout === "grid" ? "default" : "outline"}
            size="icon"
            asChild
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <LuLayoutGrid />
            </Link>
          </Button>

          <Button
            variant={layout === "list" ? "default" : "outline"}
            size="icon"
            asChild
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <LuList />
            </Link>
          </Button>
        </div>
      </section>

      <Separator className="mt-4" />

      {/* PRODUCTS */}
      <section>
        {products.length === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </section>
    </>
  );
}
