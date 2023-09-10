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
}))

const botonCuenta = document.getElementById("crear_cuenta");

botonCuenta.addEventListener("click", () => {
    let respuesta = confirm("¿Quieres hacerte una cuenta en AnimalDex?");
    verificador(respuesta);
})

function verificador(respuesta) {
    
    if (respuesta) {
        let username;
        do {
            username = prompt("Ingrese un nombre de usuario:");
            if (username === null) {
                alert("Has cancelado el proceso.");
                animales.forEach(animal => {
                    animal.style.display = "block";
                });
                return;
            }
        } while (username === "");

        let contraseña;
        do {
            contraseña = prompt("Ingrese una contraseña:");
            if (contraseña === null) {
                alert("Has cancelado el proceso.");
                animales.forEach(animal => {
                    animal.style.display = "block";
                });
                return;
            }
        } while (contraseña === "");

        no_robots(username, contraseña);
    } 
    else {
        alert("¿No deseas hacerte una cuenta en AnimalDex? Esta bien.");
        animales.forEach(animal => {
            animal.style.display = "block";
        });
    }
}

function no_robots(username, contraseña) {

    let resultado = prompt("Vamos a asegurarnos que no seas un robot\n\n¿Cuánto es 2 + 2?");

    if (resultado === null) {
        alert("Has cancelado el proceso.");
        animales.forEach(animal => {
            animal.style.display = "block";
        });
        return;
    }

    if (resultado == 4) {
        alert("Tu nombre de usuario es: " + username + "\nTu contraseña es: " + contraseña);
        animales.forEach(animal => {
            animal.style.display = "block";
        });
    } 
    else {
        alert("Lo sentimos, intentelo más tarde.");
        animales.forEach(animal => {
            animal.style.display = "block";
        });
    }
}
