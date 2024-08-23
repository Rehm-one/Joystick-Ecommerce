import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { CartContext } from '../../context/CartContext'; 
import { FaShoppingCart } from 'react-icons/fa'; // Importar el ícono de carrito de react-icons
import "./navbar.css";

const Carrito = () => {
  const { totalProductos } = useContext(CartContext); 

  return (
    <div className="Carrito">
      <Link to="/carrito" className="carrito-link"> 
        {/* Usar el icono de react-icons en lugar del emoji hardcodeado */}
        <FaShoppingCart size={30} /> 
        <p>{totalProductos()}</p> 
      </Link>
    </div>
  );
};

export default Carrito;
