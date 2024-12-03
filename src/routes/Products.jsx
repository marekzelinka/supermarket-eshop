import { Product } from "../components/Product.jsx";
import { Spinner } from "../components/ui/Spinner.jsx";
import { useProducts } from "../data.js";

export default function Products() {
  const products = useProducts();

  return (
    <>
      <h1>Products</h1>
      <p>Take a look at our products</p>
      {products.isLoading ? (
        <Spinner />
      ) : (
        <div className="products-grid">
          {products.data.map((product) => (
            <Product key={product.id} details={product} />
          ))}
        </div>
      )}
    </>
  );
}
