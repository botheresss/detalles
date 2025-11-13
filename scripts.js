const productos = [
  { 
    nombre: "Elegante champaña con chocolates y rosas", 
    categoria: "damas", 
    claseImagen: "imagen1",
    descripcion: "Un detalle de lujo que combina la elegancia de una champaña premium con la dulzura de exquisitos chocolates y la belleza de un ramo de rosas frescas. Ideal para sorprender en aniversarios, cumpleaños o cualquier ocasión especial.",
    precio: 95000
  },
  { 
    nombre: "Preciosos chocolates con rosas", 
    categoria: "damas", 
    claseImagen: "imagen2",
    descripcion: "Un regalo delicado y encantador que une lo mejor del amor y el sabor. Finos chocolates acompañados de hermosas rosas que transmiten ternura y elegancia, perfectos para expresar sentimientos sinceros.",
    precio: 75000
  },
  { 
    nombre: "Chocolates con rosaPreciosos chocolates con rosa", 
    categoria: "damas", 
    claseImagen: "imagen3",
    descripcion: "Una combinación irresistible de dulzura y belleza. Chocolates cuidadosamente seleccionados junto a una rosa fresca, presentados en un empaque romántico que cautiva a primera vista.",
    precio: 70000
  },
  { 
    nombre: "Champan con chocolates ferrero", 
    categoria: "damas", 
    claseImagen: "imagen4",
    descripcion: "El regalo ideal para celebrar los mejores momentos. Una champaña suave y burbujeante acompañada de exclusivos chocolates Ferrero, perfecta para brindar con estilo y amor.",
    precio: 88000
  },
  { 
    nombre: "Crema Baylees con chocolates Ferrero, Rosas y un poema", 
    categoria: "damas", 
    claseImagen: "imagen5",
    descripcion: "Un detalle único que combina la suavidad del licor Baileys con la dulzura de Ferrero Rocher, acompañado de rosas y un poema personalizado. Un gesto elegante que derrite corazones.",
    precio: 99000
  },
  { 
    nombre: "Frasquitos con almendras y chocolates con foto y coronita", 
    categoria: "damas", 
    claseImagen: "imagen6",
    descripcion: "Original y encantador: pequeños frascos decorados con almendras y chocolates, una foto personalizada y una coronita que simboliza lo especial que es esa persona para ti.",
    precio: 80000
  },
  { 
    nombre: "Preciosos chocolates con fondo rosado", 
    categoria: "damas", 
    claseImagen: "imagen7",
    descripcion: "Una presentación delicada y femenina, con finos chocolates decorados sobre un fondo rosado. Perfecto para regalar dulzura y estilo en un solo detalle.",
    precio: 72000
  },
  { 
    nombre: "Arreglo de Rosas con Mariposas", 
    categoria: "damas", 
    claseImagen: "imagen8",
    descripcion: "Un arreglo floral lleno de vida y color, con rosas frescas y mariposas decorativas que evocan libertad, alegría y amor. Ideal para transmitir sentimientos puros y auténticos.",
    precio: 89000
  },
  { 
    nombre: "Arreglo floral con vino", 
    categoria: "damas", 
    claseImagen: "imagen9",
    descripcion: "El equilibrio perfecto entre sofisticación y romanticismo. Un elegante vino acompañado de un arreglo floral que llenará de color y emoción cualquier celebración.",
    precio: 98000
  },
  { 
    nombre: "Frasquitos con frutos secos y chocolates con dos cervezas", 
    categoria: "caballeros", 
    claseImagen: "imagen10",
    descripcion: "Un detalle moderno y masculino. Incluye dos cervezas artesanales acompañadas de frascos con frutos secos y chocolates selectos. Ideal para celebrar logros o compartir un buen momento.",
    precio: 87000
  },
  { 
    nombre: "Frasquitos con frutos secos y chocolates con cerveza y vaso", 
    categoria: "caballeros", 
    claseImagen: "imagen11",
    descripcion: "Un regalo práctico y elegante. Deliciosos chocolates y frutos secos acompañados de una cerveza y un vaso grabado para brindar con estilo.",
    precio: 82000
  },
  { 
    nombre: "Cajita con globito, cerveza y chocolates", 
    categoria: "caballeros", 
    claseImagen: "imagen12",
    descripcion: "Un obsequio alegre y original que combina cerveza, chocolates y un toque festivo con globo decorativo. Perfecto para cumpleaños, ascensos o simplemente sorprender.",
    precio: 78000
  },
  { 
    nombre: "Preciosos chocolates con fondo azul", 
    categoria: "caballeros", 
    claseImagen: "imagen13",
    descripcion: "Elegante y sobrio. Finos chocolates presentados sobre un fondo azul con detalles masculinos, ideal para transmitir cariño de manera sencilla y refinada.",
    precio: 70000
  },
  { 
    nombre: "Preciosos chocolates con fondo rosado o azul", 
    categoria: "todos", 
    claseImagen: "imagen14",
    descripcion: "Un diseño versátil y encantador que combina colores neutros con detalles románticos. Perfecto para cualquier persona especial, sin importar la ocasión.",
    precio: 75000
  },
  { 
    nombre: "Baylees con chocolates ferrero preciosa decoración dorada", 
    categoria: "todos", 
    claseImagen: "imagen15",
    descripcion: "Un regalo con clase: el sabor cremoso del licor Baileys, la suavidad de los Ferrero Rocher y una presentación con detalles dorados que transmiten lujo y distinción.",
    precio: 99000
  },
  { 
    nombre: "Vino con chocolates con una decoración dorada", 
    categoria: "todos", 
    claseImagen: "imagen16",
    descripcion: "Una combinación atemporal de vino tinto y chocolates finos, con una decoración dorada que añade el toque de elegancia perfecto. Ideal para cualquier celebración especial.",
    precio: 93000
  }
];

const contenedor = document.querySelector(".contenedorProductos");

function mostrarProductos(lista) {
    contenedor.innerHTML = "";
    lista.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("img", producto.claseImagen);

        const texto = document.createElement("p");
        texto.classList.add("caveat");
        texto.textContent = producto.nombre;

        imgDiv.appendChild(texto);
        card.appendChild(imgDiv);
        contenedor.appendChild(card);

        card.addEventListener("click", () => {
            abrirPopup(producto);
            });

    });
}

function abrirPopup(producto){
    const overlay = document.getElementById("popup-overlay");
    const imagen = document.getElementById("popup-imagen");
    const nombre = document.getElementById("popup-nombre");
    const descripcion = document.getElementById("popup-descripcion");
    const precio = document.getElementById("popup-precio");

    imagen.className = "";
    imagen.classList.add("imgPopup", producto.claseImagen);
    nombre.textContent = producto.nombre;
    descripcion.textContent = producto.descripcion;
    precio.textContent = `$${producto.precio}`;

    overlay.classList.remove("hidden");

    const cerrarPopup = document.querySelector(".cerrar");

    cerrarPopup.addEventListener("click", () => {
        overlay.classList.add("hidden");
    });
    
    overlay.addEventListener("click", (evento)=>{
        if(evento.target === overlay) {
            overlay.classList.add("hidden");
        }
    });

}

const botonTodos = document.querySelector(".btn-categoria-todos");

botonTodos.addEventListener("click", ()=> {
    mostrarProductos(productos);
});

const botonDamas = document.querySelector(".btn-categoria-damas");

botonDamas.addEventListener("click", ()=>{
    contenedor.innerHTML = "";
    
    const filtrado = [];

    productos.forEach(producto =>{
        if(producto.categoria==="damas"){
            filtrado.push(producto);
        }
    });
    filtrado.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("img", producto.claseImagen);

        const texto = document.createElement("p");
        texto.classList.add("caveat");
        texto.textContent = producto.nombre;

        imgDiv.appendChild(texto);
        card.appendChild(imgDiv);
        contenedor.appendChild(card);

        card.addEventListener("click", () => {
            abrirPopup(producto);
            });
    })
});

const botonCaballeros = document.querySelector(".btn-categoria-caballeros");

botonCaballeros.addEventListener("click", ()=>{
    contenedor.innerHTML = "";
    
    const filtrado = [];

    productos.forEach(producto =>{
        if(producto.categoria==="caballeros"){
            filtrado.push(producto);
        }
    });
    filtrado.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("img", producto.claseImagen);

        const texto = document.createElement("p");
        texto.classList.add("caveat");
        texto.textContent = producto.nombre;

        imgDiv.appendChild(texto);
        card.appendChild(imgDiv);
        contenedor.appendChild(card);

        card.addEventListener("click", () => {
            abrirPopup(producto);
            });
    })
});

mostrarProductos(productos);