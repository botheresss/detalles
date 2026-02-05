const contenedor = document.querySelector(".contenedorProductos");

async function cargarProductos() {
    try {
        const res = await fetch("http://localhost:3000/api/productos");
        const productos = await res.json();
        console.time('render-js');
        mostrarProductos(productos);
        console.timeEnd('render-js');
        configurarBotones(productos);
    } catch (err) {
        console.error("Error cargando productos:", err);
    }
}

function mostrarProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("imgProducto");
        img.src = "http://localhost:4200" + producto.imagen;
        img.alt = producto.nombre;

        const texto = document.createElement("p");
        texto.classList.add("caveat");
        texto.textContent = producto.nombre;

        card.appendChild(img);
        card.appendChild(texto);
        contenedor.appendChild(card);

        card.addEventListener("click", () => abrirPopup(producto));
    });
}

function abrirPopup(producto) {
    const overlay = document.getElementById("popup-overlay");
    const imagen = document.getElementById("popup-imagen");
    const nombre = document.getElementById("popup-nombre");
    const descripcion = document.getElementById("popup-descripcion");
    const precio = document.getElementById("popup-precio");

    imagen.innerHTML = "";

    const img = document.createElement("img");
    img.src = "http://localhost:4200" + producto.imagen;
    img.alt = producto.nombre;
    img.classList.add("imgPopupReal");

    imagen.appendChild(img);

    nombre.textContent = producto.nombre;
    descripcion.textContent = producto.descripcion;
    precio.textContent = `$${producto.precio}`;

    overlay.classList.remove("hidden");

    const cerrar = document.querySelector(".cerrar");
    cerrar.onclick = () => overlay.classList.add("hidden");

    overlay.onclick = e => {
        if (e.target === overlay) overlay.classList.add("hidden");
    };
}

function configurarBotones(productos) {
    document.querySelector(".btn-categoria-todos")
        .addEventListener("click", () => mostrarProductos(productos));

    document.querySelector(".btn-categoria-damas")
        .addEventListener("click", () => {
            const filtrados = productos.filter(p => p.categoria === "damas");
            mostrarProductos(filtrados);
        });

    document.querySelector(".btn-categoria-caballeros")
        .addEventListener("click", () => {
            const filtrados = productos.filter(p => p.categoria === "caballeros");
            mostrarProductos(filtrados);
        });
}

cargarProductos();
