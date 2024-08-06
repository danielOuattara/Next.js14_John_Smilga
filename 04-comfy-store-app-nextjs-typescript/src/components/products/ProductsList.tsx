import { type Product } from "@prisma/client";
import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

type TypeProps = {
  products: Product[];
};

export default function ProductsList({ products }: TypeProps) {
  return (
    <section className="mt-12 grid gap-y-8">
      {products.map((product) => (
        <article key={product.id} className="group relative">
          <Link href={`/products/${product.id}`}>
            <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
              <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                <div className="relative h-64  md:h-48 md:w-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                    priority
                    className="w-full rounded-md object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold capitalize">
                    {product.name}
                  </h2>
                  <h4 className="text-muted-foreground">{product.company}</h4>
                </div>
                <p className="text-muted-foreground text-lg md:ml-auto">
                  {formatCurrency(product.price)}
                </p>
              </CardContent>
            </Card>
          </Link>
          <div className="absolute bottom-8 right-8 z-5">
            <FavoriteToggleButton productId={product.id} />
          </div>
        </article>
      ))}
    </section>
  );
}
