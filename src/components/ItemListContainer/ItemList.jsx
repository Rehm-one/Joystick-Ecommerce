import Item from "./Item";
import "./ItemList.css"
const ItemList = ({ productos }) => {
  return (
    <div className="ItemListContainer">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
export default ItemList;