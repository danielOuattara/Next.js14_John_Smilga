import { Button } from "../ui/button";

type TypeProps = {
  productId: string;
};
export default function AddToCart({ productId }: TypeProps) {
  return (
    <Button className="capitalize mt-8" size="lg">
      add to cart
    </Button>
  );
}
