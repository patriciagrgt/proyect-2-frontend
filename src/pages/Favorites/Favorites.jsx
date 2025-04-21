import { useFavorites } from "../../Context/FavoritesContext";
import ProductCard from "../../components/ProductCard";
import { Heart } from "lucide-react";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Mis Favoritos</h1>
      
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <Heart size={64} className="mx-auto mb-4 text-gray-300" />
          <p className="text-xl text-gray-500">No tienes productos favoritos aún</p>
          <p className="text-gray-400 mt-2">
            Explora nuestra tienda y marca los productos que te gusten con el corazón
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;