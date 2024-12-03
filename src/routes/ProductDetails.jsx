import { NavLink, Outlet, useParams } from "react-router-dom";
import { Spinner } from "../components/ui/Spinner.jsx";
import { useProduct } from "../data.js";

export default function ProductDetails() {
  const { id } = useParams();
  const product = useProduct(id);

  const tabs = [
    { label: "Details", href: "", end: true },
    { label: "Nutrition", href: "nutrition" },
    { label: "Storage", href: "storage" },
  ];

  return (
    <div className="product-details-layout">
      {product.isLoading ? (
        <Spinner />
      ) : product.error ? (
        <p>Could not load product details. Please try again later.</p>
      ) : (
        <>
          <div>
            <h2>{product.data.name}</h2>
            <img
              src={product.data.image}
              alt={product.data.name}
              width={125}
              height={125}
              className="product-details-image"
            />
          </div>
          <div>
            <div className="tabs">
              <ul>
                {tabs.map((tab) => (
                  <li key={tab.label}>
                    <NavLink
                      to={tab.href}
                      end={tab.end}
                      className={({ isActive }) =>
                        isActive ? "tab-active" : ""
                      }
                    >
                      {tab.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <Outlet context={product.data} />
          </div>
        </>
      )}
    </div>
  );
}
