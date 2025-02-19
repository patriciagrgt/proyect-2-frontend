import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/ProductService";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comment, setComment] = useState(""); // Estado para el comentario
  const [comments, setComments] = useState([]); // Estado para la lista de comentarios

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  // Manejar el envío del comentario
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return; // Evitar comentarios vacíos

    const newComment = {
      id: Date.now(), // Usamos la fecha actual como ID único
      text: comment,
      date: new Date().toLocaleString(), // Fecha y hora del comentario
    };

    setComments([...comments, newComment]); // Añadir el nuevo comentario
    setComment(""); // Limpiar el campo de texto
  };


  if (!product) return <div>Cargando...</div>;

  return (
    <div className="p-8">
      <div className="justify-center">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.brand}</p>
        <img src={product.image} alt={product.name} className="h-64 object-contain rounded-md" />
        <p className="text-gray-600">{product.capacity}</p>
        <p className="text-gray-600">{product.category}</p>
        <p className="font-bold text-neutral-900 text-xl mt-4">{product.price} €</p>
        <button
          onClick={() => alert("Producto añadido al carrito")}
          className="bg-green-500 text-white px-3 py-1 rounded-md mt-4 mb-16 hover:bg-green-600"
        >
          Añadir al carrito
        </button>
      </div>
      <h2 className="text-neutral-700 text-lg font-bold mt-4 mb-4">Descripción</h2>
      <p className="text-gray-600 mt-4 mb-16">{product.description}</p>
      <h2 className="text-neutral-700 text-lg font-bold mt-4 mb-4">Composición</h2>
      <p className="text-gray-600 mb-16">{product.ingredients}</p>

      {/* Sección de comentarios */}
      <div className="mt-8">
        <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
        <h2 className="text-xl font-bold mb-4 mt-24">Comentarios</h2>

        {/* Formulario para escribir un comentario */}
        <form onSubmit={handleSubmitComment} className="mb-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Escribe tu comentario..."
            className="w-full p-2 border rounded-md"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
          >
            Enviar Comentario
          </button>
        </form>

        {/* Lista de comentarios */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border p-4 rounded-lg shadow-md">
              <p className="text-gray-600">{comment.text}</p>
              <p className="text-sm text-gray-400 mt-2">{comment.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>



  );
}

export default ProductDetails;