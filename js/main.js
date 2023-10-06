// Selecciona todos los botones con la clase "btn-header"
const botonesHeader = document.querySelectorAll(".btn-header");
// Selecciona todos los elementos con la clase "animal"
const animales = document.querySelectorAll(".animal");

// Asigna un evento de clic a cada botón del encabezado
botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    // Obtiene el tipo de animal del ID del botón clicado
    const tipo = event.currentTarget.id;

    // Itera sobre todos los elementos con la clase "animal"
    animales.forEach(animal => {
        // Si es el botón "verTodos" o el animal tiene la clase del tipo clicado
        if (tipo === "verTodos" || animal.classList.contains(tipo)) {
            // Muestra el animal
            animal.style.display = "block";
        } else {
            // Oculta el animal
            animal.style.display = "none";
        }
    });
}))

// Selecciona el botón con el ID "crear_cuenta"
const botonCuenta = document.querySelector("#crear_cuenta");

// Asigna un evento de clic al botón de cuenta
botonCuenta.addEventListener("click", () => {
    // Muestra un cuadro de confirmación
    let respuesta = confirm("¿Quieres hacerte una cuenta en AnimalDex?");
    // Llama a la función verificador con la respuesta
    verificador(respuesta);
})

// Función verificador que maneja el proceso de creación de cuenta
function verificador(respuesta) { 
    if (respuesta) {
        let username;
        do {
            // Solicita un nombre de usuario hasta que se ingrese uno o se cancele
            username = prompt("Ingrese un nombre de usuario:");
            if (username === null) {
                alert("Has cancelado el proceso.");
                // Muestra todos los animales nuevamente
                mostrarAnimales();
                return;
            }
        } while (username === "");

        let contraseña;
        do {
            // Solicita una contraseña hasta que se ingrese una o se cancele
            contraseña = prompt("Ingrese una contraseña:");
            if (contraseña === null) {
                alert("Has cancelado el proceso.");
                // Muestra todos los animales nuevamente
                mostrarAnimales();
                return;
            }
        } while (contraseña === "");

        // Llama a la función no_robots con el nombre de usuario y la contraseña
        no_robots(username, contraseña);
    } 
    else {
        alert("¿No deseas hacerte una cuenta en AnimalDex? Esta bien.");
        // Muestra todos los animales nuevamente
        mostrarAnimales();
    }
}

// Función que verifica si el usuario es un robot
function no_robots(username, contraseña) {

    let resultado = prompt("Vamos a asegurarnos que no seas un robot\n\n¿Cuánto es 2 + 2?");

    if (resultado === null) {
        alert("Has cancelado el proceso.");
        // Muestra todos los animales nuevamente
        mostrarAnimales();
    }

    if (parseInt(resultado) === 4) {
        alert("Tu nombre de usuario es: " + username + "\nTu contraseña es: " + contraseña + "\n" + "\nHas creado tu cuenta de AnimalDex, cuando tengamos una base de datos podrás aprovechar más sobre tu cuenta ¡Versión demo! Igual muchas gracias :)");
        // Muestra todos los animales nuevamente
        mostrarAnimales();
    } 
    else {
        alert("Lo sentimos, intentelo más tarde.");
        // Muestra todos los animales nuevamente
        mostrarAnimales();
    }
}

// Función auxiliar para mostrar todos los animales
function mostrarAnimales() {
    animales.forEach(animal => {
        animal.style.display = "block";
    });
}

// Selecciona el formulario de búsqueda
const searchForm = document.querySelector("header form");

// Asigna un evento de envío al formulario
searchForm.addEventListener("submit", (event) => {
    // Evita que el formulario se envíe y recargue la página
    event.preventDefault();

    // Obtiene el valor del campo de búsqueda y lo convierte a minúsculas
    const searchQuery = document.querySelector(".form-group input").value.toLowerCase();

    // Itera sobre todos los elementos con la clase "animal"
    animales.forEach(animal => {
        // Obtiene el nombre del animal actual y lo convierte a minúsculas
        const nombre = animal.querySelector('.animal-nombre').textContent.toLowerCase();

        // Si la búsqueda está vacía o el nombre del animal contiene la búsqueda
        if (searchQuery === "" || nombre.includes(searchQuery)) {
            // Muestra el animal
            animal.style.display = "block";
        } else {
            // Oculta el animal
            animal.style.display = "none";
        }
    });
});