
function toggleContenido() {
    const grid = document.getElementById("contenido").querySelector(".grid");
    grid.classList.toggle("filas");
}

function cambiarTitulo() {
    const title = document.getElementById("main-title");
    title.textContent = "Título cambiado con JavaScript";
}

function cambiarDescripcion() {
    const subtitulo = document.getElementById("subtitulo");
    const parrafo = document.getElementById("parrafo");
    subtitulo.style.color = subtitulo.style.color === "red" ? "#0056b3" : "red";
    parrafo.style.color = parrafo.style.color === "gray" ? "#222" : "gray";
}

function agregarImagen() {
    const contenedor = document.getElementById("contenedor-imagen");
    if (!document.getElementById("img-libro")) {
        const img = document.createElement("img");
        img.id = "img-libro";
        img.src = "imagenes/png-transparent-books-illustration-book-book-rectangle-presentation-desktop-wallpaper-thumbnail.png";
        img.alt = "Imagen de ejemplo";
        contenedor.appendChild(img);
    }
}
