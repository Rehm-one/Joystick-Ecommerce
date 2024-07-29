import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ producto }) => {
  return (
    <Link to={"/detalle/" + producto.id} className="CardLink">
      <div className="CardContenedor">
        <img className="imagenProducto" src={producto.imagen} alt="" />
        <p className="tituloProducto"> Titulo: {producto.nombre}</p>
        <p className="CategoriaProducto"> Categoria: {producto.categoria}</p>
        <p className="CategoriaProducto">Precio: ${producto.precio}</p>
      </div>
    </Link>
  );
};

export default Item;
