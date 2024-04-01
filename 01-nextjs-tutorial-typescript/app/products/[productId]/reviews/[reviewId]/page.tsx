type Params = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function SingleProductReview({
  params: { productId, reviewId },
}: Params) {
  return (
    <h1>
      {" "}
      Product {productId} - Review {reviewId}
    </h1>
  );
}
