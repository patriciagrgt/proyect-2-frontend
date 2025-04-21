import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Añadir o quitar un producto de favoritos
  const toggleFavorite = (product) => {
    const existingIndex = favorites.findIndex(item => item.id === product.id);
    if (existingIndex >= 0) {
      // Si ya existe, lo quitamos
      setFavorites(favorites.filter(item => item.id !== product.id));
      return false; // Retornamos false para indicar que se ha quitado
    } else {
      // Si no existe, lo añadimos
      setFavorites([...favorites, product]);
      return true; // Retornamos true para indicar que se ha añadido
    }
  };

  // Verificar si un producto está en favoritos
  const isFavorite = (productId) => {
    return favorites.some(item => item.id === productId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);