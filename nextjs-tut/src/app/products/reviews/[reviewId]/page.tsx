import { notFound } from "next/navigation";
import NotFound from "./not-found";

type ReviewDetailProps = {
  params: {
    productId: string;
    reviewId: string;
  };
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({ params }: ReviewDetailProps) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  
  const random = getRandomInt(2);
  if (random === 0) {
    throw new Error("Error loading review");
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
