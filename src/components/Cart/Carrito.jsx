import React from "react";
import useCart from "../../Store/useCart";
export default function Carrito() {
  const { items, addItem, removeItem, clearCart, total } = useCart(); 

  
  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center h-full bg-gray-200 p-4">
        <p className="text-lg text-gray-600">Esperando que agregues productos al carrito...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row">
    
      <div className="w-full md:w-2/3 p-4">
        <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>

      
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between p-3 border-b border-gray-300">
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover mr-4" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
                aria-label={`Eliminar ${item.name} del carrito`}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>

      
        <div className="mt-4 font-semibold">Total: ${total.toFixed(2)}</div>

        <button
          onClick={clearCart}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          aria-label="Vaciar el carrito"
        >
          Vaciar Carrito
        </button>
      </div>

 
      <div className="w-full md:w-1/3 p-4 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Productos Agregados</h2>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between p-2 border-b border-gray-300">
              <img src={item.img} alt={item.name} className="w-12 h-12 object-cover mr-3" />
              <div>
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-sm">x{item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}