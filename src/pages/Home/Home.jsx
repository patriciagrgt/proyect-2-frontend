import ProductList from "./ProductList";

function Home({ products, setProducts }) {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
}

export default Home;