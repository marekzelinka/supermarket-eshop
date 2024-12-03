import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import App from "./App.jsx";
import { CartProvider } from "./contexts/cart.jsx";
import "./index.css";
import { swrFetcher } from "./utils.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SWRConfig value={{ fetcher: swrFetcher }}>
      <CartProvider>
        <App />
      </CartProvider>
    </SWRConfig>
  </StrictMode>,
);
