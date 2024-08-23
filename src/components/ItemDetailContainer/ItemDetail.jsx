import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; 
import IconosPlataforma from './IconosPlataforma'; 
import ItemCount from '../ItemCount/ItemCount'; 
import './ItemDetail.css'

const ItemDetail = ({ producto}) => {
  const { agregarProducto } = useContext(CartContext);

  const handleAddToCart = (cantidad) => {
    const productoConCantidad = { ...producto, cantidad };
    agregarProducto(productoConCantidad);
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
        
        <ItemCount stock={producto.stock} agregarAlCarrito={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;
