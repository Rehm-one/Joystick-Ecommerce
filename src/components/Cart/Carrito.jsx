import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa"; // Importar el ícono de basura de react-icons
import "./carrito.css";

const Carrito = () => {
  const { carrito, eliminarProducto, totalCompra, limpiarCarrito } = useContext(CartContext);
 
  return (
    <div className="carrito-container">
      <h2>Tu Carrito De Compra</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <div className="carrito-items">
            {carrito.map((producto) => (
              <div className="carrito-item" key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} className="carrito-item-imagen" />
                <div className="carrito-item-detalles">
                  <p className="carrito-item-titulo">{producto.nombre}</p>
                  <p className="carrito-item-cantidad">Cantidad: {producto.cantidad}</p>
                  <p className="carrito-item-precio">Precio: ${producto.precio}</p>
                  <p className="carrito-item-subtotal">Subtotal: ${producto.cantidad * producto.precio}</p>
                </div>
                <button className="carrito-item-eliminar" onClick={() => eliminarProducto(producto.id)}>
                  {/* Usar el ícono de react-icons en lugar del emoji hardcodeado */}
                  <FaTrash size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className="carrito-resumen">
            <button className="carrito-limpiar" onClick={limpiarCarrito}>Vaciar Carrito</button>
            <div className="carrito-total">
              <h3>Total: ${totalCompra()}</h3>
              <Link to="../Checkout">
                <button className="carrito-comprar">Continuar Con La Compra</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
