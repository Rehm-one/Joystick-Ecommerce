import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Cart/Carrito";
import Checkout from "./components/Checkout/Checkout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>

      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenidos a Joystick" />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo="Bienvenidos a mi ecommerce" />} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          

        </Routes>
        <ToastContainer/>
      </CartProvider>

    </BrowserRouter>
  );
}

export default App;