import Link from "next/link";
import { Button } from "../ui/button";
import { GiShoppingCart } from "react-icons/gi";
export default async function CartButton() {
  const numItemsInCart = 9;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <GiShoppingCart className="h-8 w-8" />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-5 w-5 flex justify-center items-center">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
