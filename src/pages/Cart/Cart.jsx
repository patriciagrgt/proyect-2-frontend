import { useCart } from "../../Context/CartContext";
import { Trash } from "lucide-react";
import { toast } from "react-toastify";

function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-20">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {cart.length === 0 ? "Tu carrito está vacío" : "Tu Carrito"}
      </h1>

      {cart.length === 0 ? (
        <h2 className="text-center text-gray-600 mb-40">
          No tienes productos en tu carrito
        </h2>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border border-gray-300 p-4 rounded-lg shadow-md bg-gray-50">
              {/* Imagen del producto */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain rounded-md mr-4"
              />

              {/* Información del producto */}
              <div className="flex-1">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.brand}</p>
                <p className="text-neutral-900 font-semibold">
                  {item.price.toString().replace(".", ",")} €
                </p>
              </div>

              {/* Controles de cantidad y eliminar */}
              <div className="flex flex-col items-center gap-2">
                <label htmlFor={`quantity-${item.id}`} className="text-sm font-medium text-gray-700">
                  Cantidad:
                </label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 p-1 border border-gray-400 rounded-md text-center"
                  min="1"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition cursor-pointer"
                >
                  <Trash className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}

          {/* Total y botón de compra */}
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold mb-4">
              Total: {total.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
            </h2>
            <button
              className="bg-teal-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-teal-500 transition text-lg cursor-pointer"
              onClick={() => {
                toast.success("Su compra se ha realizado exitosamente 💫", {
                  position: "top-center",
                  style: {
                    fontSize: "1.2rem",
                    padding: "20px",
                    width: "480px",
                  },
                });
              }}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;