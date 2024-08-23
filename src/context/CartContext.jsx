import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);


  const agregarProducto = (productoNuevo) => {

    const productoExistente = carrito.find((producto) => producto.id === productoNuevo.id);

    if (productoExistente) {

      setCarrito(
        carrito.map((producto) =>
          producto.id === productoNuevo.id
            ? { ...producto, cantidad: producto.cantidad + productoNuevo.cantidad }
            : producto
        )
      );
      
    }
      else {

      setCarrito([...carrito, productoNuevo]);
      
    }
  };


  const eliminarProducto = (idProducto) => {
    setCarrito(carrito.filter((producto) => producto.id !== idProducto));
    toast.error("Producto eliminado del carrito");
  };


  const totalProductos = () => {
    return carrito.reduce((total, producto) => total + producto.cantidad, 0);
  };


  const totalCompra = () => {
    return carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
  };


  const limpiarCarrito = () => {
    setCarrito([]);
  };

  console.log(carrito);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        totalProductos,
        totalCompra,
        limpiarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
