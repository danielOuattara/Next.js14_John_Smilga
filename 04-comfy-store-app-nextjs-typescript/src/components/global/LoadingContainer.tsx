import { LoadingProduct } from "./index";

export default function LoadingContainer() {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
}
