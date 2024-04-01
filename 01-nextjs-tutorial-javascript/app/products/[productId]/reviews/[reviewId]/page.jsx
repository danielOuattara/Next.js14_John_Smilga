export default function SingleProductReview({
  params: { productId, reviewId },
}) {
  return (
    <h1>
      {" "}
      Product {productId} - Review {reviewId}
    </h1>
  );
}
