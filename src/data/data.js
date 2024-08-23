import { collection, getDocs } from "firebase/firestore";
import db from "../db/db"; 

const obtenerProductos = async () => {
  const productosSnapshot = await getDocs(collection(db, "productos"));
  const productosList = productosSnapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() };
  });
  return productosList;
};

export default obtenerProductos;