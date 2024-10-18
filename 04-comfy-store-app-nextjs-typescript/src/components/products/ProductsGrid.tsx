import { type Product } from "@prisma/client";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { currencyFormatter } from "@/utilities/currencyFormatter";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

type TypeProps = {
  products: Product[];
};

export default function ProductsGrid({ products }: TypeProps) {
  return (
    <div className="pt-12 grid gap-4 md:grid-col-2 lg:grid-cols-3">
      {products.map((product) => (
        <article key={product.id} className="group relative">
          <Link href={`/products/${product.id}`}>
            <Card className="">
              <CardContent className="p-2">
                <div className="relative h-64 md:h-48 rounded overflow-hidden ">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                    priority
                    className="rounded w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h2 className="text-lg capitalize">{product.name}</h2>
                  <p className="text-muted-foreground">
                    {currencyFormatter(product.price)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <div className="absolute top-4 right-4 z-5">
            <FavoriteToggleButton productId={product.id} />
          </div>
        </article>
      ))}
    </div>
  );
}
