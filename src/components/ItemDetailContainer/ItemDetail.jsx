import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Asegúrate de tener este contexto para manejar el carrito
import IconosPlataforma from './IconosPlataforma'; // Asegúrate de que esta ruta sea correcta
import ItemCount from '../ItemCount/ItemCount'; 
import './ItemDetail.css'// Asegúrate de que la ruta sea correcta

const ItemDetail = ({ producto}) => {
  const { agregarProducto } = useContext(CartContext);

  const handleAddToCart = (cantidad) => {
    const productoConCantidad = { ...producto, cantidad }; // Combina el producto con la cantidad seleccionada
    agregarProducto(productoConCantidad); // Usa la función del contexto para agregar el producto al carrito
  };

  return (
    <div className="detalleContenedor">
      <img className="imgDetail" src={producto.imagen} alt={producto.nombre} />
      <div className="detalleProducto">
        <h2 className="nombreProducto">{producto.nombre}</h2>
        <p className="descripcionProducto">Descripción: {producto.descripcion}</p>
        <p className="descripcionPrecio">Precio: ${producto.precio}</p>
        <p className="PlataformaProducto">
          Plataforma:
          {producto.plataformas && producto.plataformas.map((plataforma, index) => (
            <IconosPlataforma key={index} plataforma={plataforma} />
          ))}
        </p>
        <p className="descripcionPrecio">Stock Disponible: {producto.stock}</p>
        {/* Aquí integramos el componente ItemCount */}
        <ItemCount stock={producto.stock} agregarAlCarrito={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;
