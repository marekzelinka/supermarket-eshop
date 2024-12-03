import { useOutletContext } from "react-router";

export default function ProductDetailStorage() {
  const product = useOutletContext();

  return (
    <p>
      <strong>Storage instructions:</strong> {product.storage}
    </p>
  );
}
