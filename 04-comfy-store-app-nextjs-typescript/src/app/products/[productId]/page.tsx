import { FavoriteToggleButton } from "@/components/products";
import {
  AddToCart,
  BreadCrumbs,
  ProductRating,
} from "@/components/single-product";
import { fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";

export default async function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await fetchSingleProduct(params.productId);

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{product.name}</h1>
            <FavoriteToggleButton productId={params.productId} />
          </div>
          <ProductRating productId={params.productId} />
          <h4 className="text-xl mt-2">{product.company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {formatCurrency(product.price)}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">
            {product.description}
          </p>
          <AddToCart productId={params.productId} />
        </div>
      </div>
    </section>
  );
}
