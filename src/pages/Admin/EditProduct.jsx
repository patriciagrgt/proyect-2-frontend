import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductForm from "../../components/forms/ProductForm";
import { getProductById, updateProduct } from "../../services/ProductService";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleSubmit = (updatedData) => {
    updateProduct(id, updatedData)
      .then(() => {
        alert("Producto actualizado exitosamente");
        navigate("/"); // Redirige a la página de inicio
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Producto</h1>
      <ProductForm initialData={product} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditProduct;