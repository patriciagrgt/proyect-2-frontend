const ProductList = ({ products }) => {
    return (
      <div>
        <h2>Lista de Productos</h2>
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id}>{product.nombre}</li>
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default ProductList;