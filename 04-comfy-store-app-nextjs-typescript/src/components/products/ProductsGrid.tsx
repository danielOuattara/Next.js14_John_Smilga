import { type Product } from "@prisma/client";
import { formatCurrency } from "@/utils/formatCurrency";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { FavoriteToggleButton } from "./index";

type TypeProps = {
  products: Product[];
};

export default function ProductsGrid({ products }: TypeProps) {
  return (
    <section className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <article key={product.id} className="group relative">
          <Link href={`/products/${product.id}`}>
            <Card className="transform group-hover:shadow-xl transition-shadow duration-300 dark:hover:border-primary">
              <CardContent className="p-2">
                <div className="relative h-64 md:h-48 rounded overflow-hidden ">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                    priority
                    className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h2 className="text-lg capitalize">{product.name}</h2>
                  <p className="text-muted-foreground">
                    {formatCurrency(product.price)}
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
    </section>
  );
}
