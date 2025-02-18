import ProductCard from "./ProductCard";
import { deleteProduct } from "../../services/ProductService";

function ProductList({ products, setProducts }) {
  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id)); // Actualiza el estado
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ProductList;