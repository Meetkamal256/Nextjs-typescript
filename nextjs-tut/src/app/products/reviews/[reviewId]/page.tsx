import { notFound } from "next/navigation";

type ReviewDetailProps = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function ReviewDetail({ params }: ReviewDetailProps) {
  const reviewId = parseInt(params.reviewId, 10);

  if (reviewId > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
