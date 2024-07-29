import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
  return (
    <div className="detalleContenedor">
      <img className="imgDetail" src={producto.imagen} alt="" />
      <div className="detalleProducto">
        <h2 className="nombreProducto">{producto.nombre}</h2>
        <p className="descripcionProducto"> <h3>Descripcion:</h3> {producto.descripcion}</p>
        <p className="descripcionPrecio">Precio: $ {producto.precio}</p>
      </div>
    </div>
  );
};
export default ItemDetail;