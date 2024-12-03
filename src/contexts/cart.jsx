/* eslint-disable react-refresh/only-export-components */

import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [products, setProducts] = useState(() => {
    let savedProducts = [];

    try {
      savedProducts = JSON.parse(localStorage.getItem("cart")) ?? [];
    } catch {
      /* empty */
    }

    return savedProducts;
  });

  useEffect(() => {
    if (products) {
      localStorage.setItem("cart", JSON.stringify(products));
    }
  }, [products]);

  function deleteProductById(id) {
    const updatedCart = products.filter((product) => product.id !== id);
    setProducts(updatedCart);
  }

  function addProduct(newProduct) {
    const existingProduct = products.find(
      (product) => product.id === newProduct.id,
    );

    if (existingProduct) {
      // Increase existing product quantity
      const updatedCart = products.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setProducts(updatedCart);
    } else {
      // Add a new product to the cart
      setProducts([
        ...products,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  function findProductById(productId) {
    return products.find((product) => product.id === productId);
  }

  function getTotalPrice() {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  }

  function getCurrentCount() {
    return products.reduce((total, product) => total + product.quantity, 0);
  }

  const value = {
    products,
    addProduct,
    deleteProductById,
    getTotalPrice,
    findProductById,
    getCurrentCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
CartProvider.propTypes = {
  children: PropTypes.node,
};

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
