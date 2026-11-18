
// ==========================================
// PROYECTO: ZEUSVET
// CRUD: CREATE, READ, UPDATE Y DELETE
// ==========================================


// 1. OBTENER LOS ELEMENTOS DEL HTML

const formulario = document.getElementById("formularioCita");
const listaCitas = document.getElementById("listaCitas");

// Obtener el botón del formulario.
const botonRegistrar = formulario.querySelector('button[type="submit"]');


// 2. CREAR EL ARREGLO DE CITAS

// Recuperar las citas guardadas en localStorage.
let citas = JSON.parse(localStorage.getItem("citas")) || [];


// 3. VARIABLE PARA CONTROLAR LA EDICIÓN

// -1 significa que no estamos editando ninguna cita.
let indiceEditar = -1;


// 4. FUNCIÓN PARA GUARDAR LAS CITAS

function guardarCitas() {

    localStorage.setItem("citas", JSON.stringify(citas));

}


// 5. FUNCIÓN PARA MOSTRAR LAS CITAS

function mostrarCitas() {

    // Limpiar la sección antes de mostrar las citas.
    listaCitas.innerHTML = "";

    // Comprobar si no existen citas.
    if (citas.length === 0) {

        const mensaje = document.createElement("p");
        mensaje.textContent = "Aún no hay citas registradas.";

        listaCitas.appendChild(mensaje);

        return;
    }

    // Recorrer el arreglo de citas.
    for (let i = 0; i < citas.length; i++) {

        // Crear una tarjeta para cada cita.
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-cita";

        // Mostrar el nombre de la mascota.
        const titulo = document.createElement("h3");
        titulo.textContent = "Mascota: " + citas[i].nombreMascota;

        tarjeta.appendChild(titulo);

        // Crear una lista con los datos de la cita.
        const datos = [
            "Tipo de mascota: " + citas[i].tipoMascota,
            "Propietario: " + citas[i].nombrePropietario,
            "Servicio: " + citas[i].servicio,
            "Fecha: " + citas[i].fecha,
            "Hora: " + citas[i].hora,
            "Motivo: " + citas[i].motivo
        ];

        // Recorrer los datos y agregarlos a la tarjeta.
        for (let j = 0; j < datos.length; j++) {

            const parrafo = document.createElement("p");
            parrafo.textContent = datos[j];

            tarjeta.appendChild(parrafo);
        }


        // CREAR EL BOTÓN EDITAR

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.type = "button";

        botonEditar.addEventListener("click", function() {

            editarCita(i);

        });

        tarjeta.appendChild(botonEditar);


        // CREAR EL BOTÓN ELIMINAR

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.type = "button";

        botonEliminar.addEventListener("click", function() {

            eliminarCita(i);

        });

        tarjeta.appendChild(botonEliminar);


        // Agregar la tarjeta a la sección de citas.
        listaCitas.appendChild(tarjeta);
    }

}


// 6. FUNCIÓN PARA EDITAR UNA CITA

function editarCita(indice) {

    // Guardar la posición de la cita seleccionada.
    indiceEditar = indice;

    // Colocar los datos de la cita en el formulario.
    document.getElementById("nombreMascota").value = citas[indice].nombreMascota;

    document.getElementById("tipoMascota").value = citas[indice].tipoMascota;

    document.getElementById("nombrePropietario").value = citas[indice].nombrePropietario;

    document.getElementById("servicio").value = citas[indice].servicio;

    document.getElementById("fecha").value = citas[indice].fecha;

    document.getElementById("hora").value = citas[indice].hora;

    document.getElementById("motivo").value = citas[indice].motivo;

    // Cambiar el texto del botón.
    botonRegistrar.textContent = "Guardar cambios";

    // Llevar al usuario hacia el formulario.
    formulario.scrollIntoView({ behavior: "smooth" });

}


// 7. FUNCIÓN PARA ELIMINAR UNA CITA

function eliminarCita(indice) {

    // Preguntar si realmente desea eliminar la cita.
    const confirmar = confirm("¿Está seguro de que desea eliminar esta cita?");

    // Comprobar si el usuario aceptó.
    if (confirmar) {

        // Eliminar únicamente la cita seleccionada.
        citas.splice(indice, 1);

        // Guardar los cambios en localStorage.
        guardarCitas();

        // Actualizar la lista de citas.
        mostrarCitas();

        // Si estábamos editando una cita, cancelar la edición.
        if (indiceEditar === indice) {

            formulario.reset();

            indiceEditar = -1;

            botonRegistrar.textContent = "Registrar cita";

        } else if (indiceEditar > indice) {

            // Ajustar la posición si se eliminó una cita anterior.
            indiceEditar--;

        }

        // Mostrar mensaje de confirmación.
        alert("La cita se eliminó correctamente.");

    }

}


// 8. CAPTURAR Y REGISTRAR O ACTUALIZAR UNA CITA

formulario.addEventListener("submit", function(event) {

    // Evitar que la página se recargue.
    event.preventDefault();

    // Crear un objeto con los datos del formulario.
    const nuevaCita = {

        nombreMascota: document.getElementById("nombreMascota").value,

        tipoMascota: document.getElementById("tipoMascota").value,

        nombrePropietario: document.getElementById("nombrePropietario").value,

        servicio: document.getElementById("servicio").value,

        fecha: document.getElementById("fecha").value,

        hora: document.getElementById("hora").value,

        motivo: document.getElementById("motivo").value

    };


    // Comprobar si estamos registrando o editando.
    if (indiceEditar === -1) {

        // CREATE: agregar una nueva cita.
        citas.push(nuevaCita);

        alert("¡La cita se registró correctamente!");

    } else {

        // UPDATE: reemplazar la cita seleccionada.
        citas[indiceEditar] = nuevaCita;

        alert("¡La cita se actualizó correctamente!");

    }


    // Guardar los cambios en localStorage.
    guardarCitas();

    // Mostrar nuevamente las citas.
    mostrarCitas();

    // Limpiar el formulario.
    formulario.reset();

    // Indicar que ya no estamos editando.
    indiceEditar = -1;

    // Devolver el texto original al botón.
    botonRegistrar.textContent = "Registrar cita";

});


// 9. MOSTRAR LAS CITAS AL ABRIR LA PÁGINA

mostrarCitas();
