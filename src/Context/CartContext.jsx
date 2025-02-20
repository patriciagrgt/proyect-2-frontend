import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Añadir un producto al carrito
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    /* console.log("Producto añadido:", product);
    console.log("Carrito actualizado:", cart); */
  };

  // Eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Actualizar la cantidad de un producto en el carrito
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  // Calcular el total del carrito
  const total = cart.reduce((sum, item) => {
    const itemPrice = parseFloat(item.price);
    const itemQuantity = parseInt(item.quantity, 10);
    if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
      return sum + itemPrice * itemQuantity;
    }
    return sum;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);