import Link from "next/link";

export default function F2() {
  return (
    <>
      <h1>F4 page</h1>
      <Link href="/f1/f3">F3</Link>
      <Link href="/about">About</Link>
    </>
  );
}