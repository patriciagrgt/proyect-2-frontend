import { useCart } from "../../Context/CartContext"; // Importa useCart

function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart(); // Obtén el carrito y las funciones del contexto

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-lg font-bold mt-2">{item.name}</h2>
              <p className="text-gray-600">{item.brand}</p>
              <p className="text-gray-600">{item.price} €</p>
              <div className="mt-3 flex items-center gap-2">
                <label htmlFor={`quantity-${item.id}`} className="text-sm font-medium text-gray-700">
                  Cantidad:
                </label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 p-1 border rounded-md"
                  min="1"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <h2 className="text-xl font-bold">Total: {total.toFixed(2)} €</h2>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mt-4"
              onClick={() => alert("Compra realizada exitosamente")}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;