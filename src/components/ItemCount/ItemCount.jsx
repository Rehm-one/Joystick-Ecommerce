import { useState } from 'react';
import './ItemCount.css'


const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [count, setCount] = useState(1);

  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemcount">
      <div className="controls">
        <button className='disminuir' onClick={disminuir}>-</button>
        <p className='count'>{count}</p>
        <button className='aumentar' onClick={aumentar}>+</button>
      </div>

      <button className="botonAgregar" onClick={() => agregarAlCarrito(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;