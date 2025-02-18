import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.brand}</p>
      <p className="text-green-600 font-semibold">{product.price} €</p>
      
      <div className="mt-3 flex gap-2">
        <Link to={`/edit/${product.id}`} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
          Editar
        </Link>
        <button 
          onClick={() => onDelete(product.id)} 
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;