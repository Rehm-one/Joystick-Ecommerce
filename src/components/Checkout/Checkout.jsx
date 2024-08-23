import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import db from '../../db/db.js';
import "./Checkout.css"
import 'react-toastify/dist/ReactToastify.css';



const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        telefono: '',
        email: '',
    });

    const [idOrden, setIdOrden] = useState(null);
    const { carrito, totalCompra, limpiarCarrito } = useContext(CartContext);

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setDatosForm({
            ...datosForm,
            [name]: value,
        });
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();


        const orden = {
            comprador: { ...datosForm },
            productos: [...carrito],
            fecha: Timestamp.fromDate(new Date()),
            total: totalCompra(),
        };

        try {
            const ordenesRef = collection(db, 'ordenes');
            const ordenDb = await addDoc(ordenesRef, orden);
            setIdOrden(ordenDb.id);
            limpiarCarrito();
           
        } catch (error) {
            console.error('Error al crear la orden:', error);
           

        }
    };

    return (
        <div className="checkout">
            {idOrden ? (
                <div className="order-completed">
                    <h2>!Orden completada correctamente!</h2>
                    <p>
                        No olvides hacer el seguimiento de tu pedido! ID: {idOrden} </p>
                </div>
            ) : (
                <form onSubmit={handleSubmitForm}>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={datosForm.nombre}
                        onChange={handleChangeInput}
                        required
                    />

                    <label>Teléfono:</label>
                    <input
                        type="text"
                        name="telefono"
                        value={datosForm.telefono}
                        onChange={handleChangeInput}
                        required
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={datosForm.email}
                        onChange={handleChangeInput}
                        required
                    />

                    <button className='botonCompra' type="submit">Finalizar Compra</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;
