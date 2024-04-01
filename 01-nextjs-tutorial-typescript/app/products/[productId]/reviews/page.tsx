type Params = {
  params: {
    productId: string;
  };
};

export default function ReviewsHome({ params: { productId } }: Params) {
  return <h1> All Reviews for product {productId}</h1>;
}
