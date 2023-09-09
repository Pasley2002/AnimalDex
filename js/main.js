const botonesHeader = document.querySelectorAll(".btn-header");
const animales = document.querySelectorAll(".animal");

botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const tipo = event.currentTarget.id;

    animales.forEach(animal => {
        if (tipo === "verTodos" || animal.classList.contains(tipo)) {
            animal.style.display = "block";
        } else {
            animal.style.display = "none";
        }
    });
}));