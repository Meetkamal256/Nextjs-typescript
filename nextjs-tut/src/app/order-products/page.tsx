"use client";
import { useRouter } from "next/navigation";

export default function orderProducts() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing order");
    router.push("/");
  };
  return (
    <>
      <h1>Order Products</h1>
      <button onClick={handleClick}>Place your order</button>
    </>
  );
}
