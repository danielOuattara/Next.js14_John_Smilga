import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";

type TypeProps = {
  productId: string;
};

export default function FavoriteToggleButton({ productId }: TypeProps) {
  return (
    <Button size={"icon"} variant={"outline"} className="p-2 cursor-pointer">
      <FaHeart color="#e06714" />
    </Button>
  );
}
