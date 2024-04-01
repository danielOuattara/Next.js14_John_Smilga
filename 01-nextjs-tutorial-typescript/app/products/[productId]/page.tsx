type Params = {
  params: {
    productId: string;
  };
};

export default function SingleProduct({ params: { productId } }: Params) {
  return <h1>Details page about product {productId}</h1>;
}
