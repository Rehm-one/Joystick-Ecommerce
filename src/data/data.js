const productos = [
    {
      id: "Prod1",
      nombre: "Amnesia: The Dark Descent",
      descripcion: "Amnesia The Dark Descent es un juego de terror en primera persona desarrollado por Frictional Games. El juego se centra en la exploración y resolución de puzles, inmerso en una atmósfera oscura y opresiva que garantiza una experiencia aterradora. Los jugadores toman el control de Daniel, un hombre que despierta en un misterioso castillo sin recordar cómo llegó allí ni quién es. A medida que explora el castillo, Daniel descubre documentos y experimenta flashbacks que revelan su oscuro pasado",
      precio: 49.99,
      categoria: "terror",
      stock: 10,
      imagen: "/public/images/product1.jpg" 
    },
    {
      id: "Prod2",
      nombre: "Resident Evil 2",
      descripcion: "Resident Evil 2 Remake es una reimaginación moderna del clásico juego de terror de supervivencia de 1998 desarrollado y publicado por Capcom. Los jugadores vuelven a la infestada ciudad de Raccoon City, tomando el control de Leon S. Kennedy, un policía novato, y Claire Redfield, una joven que busca a su hermano desaparecido. Con gráficos impresionantes, una atmósfera aterradora y jugabilidad refinada, Resident Evil 2 Remake ofrece una experiencia renovada y escalofriante.",
      precio: 70,
      categoria: "terror",
      stock: 10,
      imagen: "/public/images/product2.jpg"  
    },
    {
      id: "Prod3",
      nombre: "Phasmophobia",
      descripcion: "Phasmophobia es un juego de terror cooperativo en línea para 4 jugadores desarrollado y publicado por Kinetic Games. Los jugadores asumen el papel de investigadores paranormales que se adentran en lugares embrujados para recolectar pruebas de actividad sobrenatural. Equipados con una variedad de herramientas de investigación, deben trabajar juntos para identificar el tipo de fantasma que acecha el lugar mientras intentan sobrevivir a encuentros terroríficos.",
      precio: 30,
      categoria: "terror",
      stock: 10,
      imagen: "/public/images/product3.jpg" 
    },
    {
      id: "Prod4",
      nombre: "Outlast",
      descripcion: "Outlast es un juego de terror en primera persona desarrollado y publicado por Red Barrels. Ambientado en el remoto manicomio Mount Massive, el juego sigue a Miles Upshur, un periodista que investiga las oscuras y perturbadoras actividades de la institución. Sin armas y solo equipado con una cámara de visión nocturna, Miles debe usar su ingenio y habilidades para sobrevivir a los horrores que acechan en cada esquina.",
      precio: 50,
      categoria: "terror",
      stock: 10,
      imagen: "/public/images/product4.jpg"   
    },
    {
      id: "Prod5",
      nombre: "Sims 4",
      descripcion: "The Sims 4 es un popular juego de simulación de vida desarrollado por Maxis y publicado por Electronic Arts. En este título, los jugadores tienen la libertad de crear y controlar personas en un mundo virtual, explorando sus sueños y aspiraciones. Diseña casas, construye relaciones y desarrolla habilidades en una experiencia de simulación envolvente y detallada.",
      precio: 55,
      categoria: "simuladores",
      stock: 10,
      imagen: "/public/images/product5.jpg"
    },
    {
      id: "Prod6",
      nombre: "Supermarket Simulator",
      descripcion: "Supermarket Simulator es un juego de simulación que te permite gestionar y operar tu propio supermercado. Desarrollado por un talentoso equipo independiente, este juego te sumerge en el desafiante y emocionante mundo de la administración de tiendas, donde cada decisión cuenta para el éxito de tu negocio.",
      precio: 25,
      categoria: "simuladores",
      stock: 10,
      imagen: "/public/images/product6.jpg"  
    },
    {
      id: "Prod7",
      nombre: "Euro Truck Simulator 2",
      descripcion: "Euro Truck Simulator 2 es un juego de simulación de conducción que te permite experimentar la vida de un camionero europeo. Desarrollado por SCS Software, este juego te sumerge en un vasto mundo abierto donde puedes explorar más de 60 ciudades europeas, transportar una variedad de cargas y construir tu propio imperio de transporte.",
      precio: 40,
      categoria: "simuladores",
      stock: 10,
      imagen:"/public/images/product7.jpg"  
    },
    {
      id: "Prod8",
      nombre: "Jurassic World Evolution",
      descripcion: "Jurassic World Evolution es un juego de simulación y gestión que te permite construir y gestionar tu propio parque temático de dinosaurios. Desarrollado por Frontier Developments, este juego te sitúa en las famosas Islas del Archipiélago de las Muertes, donde tendrás que crear un parque exitoso, lleno de dinosaurios impresionantes y atracciones emocionantes.",
      precio: 58,
      categoria: "simuladores",
      stock: 10,
      imagen:"/public/images/product8.jpg"   // Cambia esta URL según la imagen que desees usar
    },
    {
      id: "Prod9",
      nombre: "Call Of Duty: Modern Warfare 3",
      descripcion: "Call of Duty: Modern Warfare 3, desarrollado por Infinity Ward y Sledgehammer Games, es la entrega explosiva de la aclamada serie de juegos de disparos en primera persona. Sumérgete en un conflicto global mientras luchas contra un enemigo implacable en una campaña intensa y llena de acción.",
      precio: 80,
      categoria: "shooter",
      stock: 10,
      imagen: "/public/images/product9.jpg"   // Cambia esta URL según la imagen que desees usar
    },
    {
      id: "Prod10",
      nombre: "Sniper Elite 4",
      descripcion: "Sumérgete en la Italia de la Segunda Guerra Mundial con Sniper Elite 4, el aclamado juego de disparos tácticos en tercera persona desarrollado por Rebellion. Como el francotirador de élite Karl Fairburne, embárcate en misiones de infiltración y eliminación mientras desentrañas una trama de sabotaje y resistencia contra el Eje. Con paisajes impresionantes y una jugabilidad profunda y táctica, Sniper Elite 4 es una experiencia inmersiva de la guerra desde el punto de vista de un francotirador.",
      precio: 26,
      categoria: "shooter",
      stock: 10,
      imagen: "/public/images/product10.jpg"  // Cambia esta URL según la imagen que desees usar
    },
    {
      id: "Prod11",
      nombre: "Deep Rock Galactic",
      descripcion: "Deep Rock Galactic es un juego de disparos cooperativo en primera persona desarrollado por Ghost Ship Games. Los jugadores asumen el papel de enanos mineros que trabajan para una empresa espacial, Deep Rock Galactic. El objetivo principal es explorar cavernas subterráneas en busca de valiosos minerales y recursos, mientras se enfrentan a hordas de criaturas alienígenas hostiles.",
      precio: 15,
      categoria: "shooter",
      stock: 10,
      imagen: "/public/images/product11.jpg"  // Cambia esta URL según la imagen que desees usar
    },
    {
      id: "Prod12",
      nombre: "Counter Strike: Global Offensive 2",
      descripcion: "Counter-Strike 2 es la última entrega en la icónica serie de juegos de disparos en primera persona Counter-Strike, desarrollada por Valve Corporation. El juego es una evolución del clásico Counter-Strike: Global Offensive , con mejoras en gráficos, mecánicas de juego y tecnología",
      precio: 35,
      categoria: "shooter",
      stock: 10,
      imagen: "/public/images/product12.jpg" // Cambia esta URL según la imagen que desees usar
    }
  ];
  
  
  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      //simulamos un retraso de red
      setTimeout(() => {
        resolve(productos)
      }, 1000);
    });
  };
  
  export default obtenerProductos