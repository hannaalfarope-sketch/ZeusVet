
/* =========================================================
   ZEUSVET - CRUD DE CITAS VETERINARIAS
   ========================================================= */


/* =========================================================
   1. OBTENER ELEMENTOS DEL HTML
   ========================================================= */

// Formulario principal
const formularioCita = document.getElementById("formularioCita");

// Contenedor donde se mostrarán las citas
const listaCitas = document.getElementById("listaCitas");

// Campos del formulario
const nombreMascota = document.getElementById("nombreMascota");
const tipoMascota = document.getElementById("tipoMascota");
const nombrePropietario = document.getElementById("nombrePropietario");
const servicio = document.getElementById("servicio");
const fecha = document.getElementById("fecha");
const hora = document.getElementById("hora");
const motivo = document.getElementById("motivo");

// Botón principal del formulario
const botonRegistrar = formularioCita.querySelector('button[type="submit"]');


/* =========================================================
   2. CREAR EL ARREGLO Y RECUPERAR LAS CITAS
   ========================================================= */

// Arreglo donde se almacenarán las citas
let citas = [];

// Variable para identificar la cita que se está editando
let indiceEdicion = null;

// Recuperar las citas guardadas en localStorage
const citasGuardadas = localStorage.getItem("citas");

if (citasGuardadas !== null) {

    try {

        // Convertir los datos guardados en un arreglo
        const datosRecuperados = JSON.parse(citasGuardadas);

        // Comprobar que los datos sean un arreglo
        if (Array.isArray(datosRecuperados)) {

            citas = datosRecuperados;

        }

    } catch (error) {

        // Si los datos no son válidos, iniciar con un arreglo vacío
        citas = [];

    }

}


/* =========================================================
   3. FUNCIÓN PARA GUARDAR LAS CITAS
   ========================================================= */

function guardarCitas() {

    // Convertir el arreglo a JSON y guardarlo
    localStorage.setItem("citas", JSON.stringify(citas));

}


/* =========================================================
   4. FUNCIÓN PARA LIMPIAR EL FORMULARIO
   ========================================================= */

function limpiarFormulario() {

    // Limpiar todos los campos
    formularioCita.reset();

    // Finalizar el modo de edición
    indiceEdicion = null;

    // Restaurar el texto del botón principal
    botonRegistrar.textContent = "Registrar cita";

}


/* =========================================================
   5. FUNCIÓN PARA MOSTRAR LAS CITAS (READ)
   ========================================================= */

function mostrarCitas() {

    // Limpiar el contenedor antes de mostrar las citas
    listaCitas.innerHTML = "";

    // Comprobar si no existen citas
    if (citas.length === 0) {

        const mensaje = document.createElement("p");

        mensaje.className = "mensaje-vacio";
        mensaje.textContent = "Aún no hay citas registradas";

        listaCitas.appendChild(mensaje);

        return;

    }

    // Recorrer el arreglo de citas
    citas.forEach(function(cita, indice) {

        // Evitar procesar datos que no sean objetos válidos
        if (cita === null || typeof cita !== "object") {
            return;
        }

        // Crear la tarjeta de la cita
        const tarjeta = document.createElement("div");

        tarjeta.className = "tarjeta-cita";

        // Crear el título con el nombre de la mascota
        const titulo = document.createElement("h3");

        titulo.textContent = cita.nombreMascota || "Sin nombre";

        tarjeta.appendChild(titulo);

        // Información de la cita
        const datos = [
            "Tipo de mascota: " + (cita.tipoMascota || ""),
            "Propietario: " + (cita.nombrePropietario || ""),
            "Servicio: " + (cita.servicio || ""),
            "Fecha: " + (cita.fecha || ""),
            "Hora: " + (cita.hora || ""),
            "Motivo: " + (cita.motivo || "")
        ];

        // Crear un párrafo para cada dato
        datos.forEach(function(dato) {

            const parrafo = document.createElement("p");

            parrafo.textContent = dato;

            tarjeta.appendChild(parrafo);

        });

        // Crear botón Editar
        const botonEditar = document.createElement("button");

        botonEditar.textContent = "Editar";
        botonEditar.className = "btn-editar";
        botonEditar.type = "button";

        // Evento para editar la cita seleccionada
        botonEditar.addEventListener("click", function() {

            editarCita(indice);

        });

        // Crear botón Eliminar
        const botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "btn-eliminar";
        botonEliminar.type = "button";

        // Evento para eliminar la cita seleccionada
        botonEliminar.addEventListener("click", function() {

            eliminarCita(indice);

        });

        // Agregar los botones a la tarjeta
        tarjeta.appendChild(botonEditar);
        tarjeta.appendChild(botonEliminar);

        // Agregar la tarjeta al contenedor de citas
        listaCitas.appendChild(tarjeta);

    });

}


/* =========================================================
   6. REGISTRAR UNA CITA (CREATE)
   ========================================================= */

// Escuchar el envío del formulario
formularioCita.addEventListener("submit", function(event) {

    // Evitar que la página se recargue
    event.preventDefault();

    // Validar que los campos obligatorios estén completos
    if (!formularioCita.checkValidity()) {

        formularioCita.reportValidity();

        return;

    }

    // Crear un objeto con la información de la cita
    const nuevaCita = {

        id: Date.now(),

        nombreMascota: nombreMascota.value,
        tipoMascota: tipoMascota.value,
        nombrePropietario: nombrePropietario.value,
        servicio: servicio.value,
        fecha: fecha.value,
        hora: hora.value,
        motivo: motivo.value

    };

    // Comprobar si se está registrando o editando
    if (indiceEdicion === null) {

        // Agregar la nueva cita al arreglo
        citas.push(nuevaCita);

        alert("¡Cita registrada correctamente!");

    } else {

        // Conservar el identificador original
        nuevaCita.id = citas[indiceEdicion].id;

        // Actualizar la cita seleccionada
        citas[indiceEdicion] = nuevaCita;

        alert("¡Cita actualizada correctamente!");

    }

    // Guardar los cambios
    guardarCitas();

    // Mostrar nuevamente las citas
    mostrarCitas();

    // Limpiar el formulario
    limpiarFormulario();

});


/* =========================================================
   7. EDITAR UNA CITA (UPDATE)
   ========================================================= */

function editarCita(indice) {

    // Obtener la cita seleccionada
    const cita = citas[indice];

    // Comprobar que la cita exista
    if (!cita || typeof cita !== "object") {

        alert("No se encontró la cita seleccionada.");

        return;

    }

    // Cargar los datos en el formulario
    nombreMascota.value = cita.nombreMascota || "";
    tipoMascota.value = cita.tipoMascota || "";
    nombrePropietario.value = cita.nombrePropietario || "";
    servicio.value = cita.servicio || "";
    fecha.value = cita.fecha || "";
    hora.value = cita.hora || "";
    motivo.value = cita.motivo || "";

    // Guardar el índice de la cita que se está editando
    indiceEdicion = indice;

    // Cambiar el texto del botón
    botonRegistrar.textContent = "Guardar cambios";

    // Desplazarse hasta el formulario
    document.getElementById("agendar").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   8. ELIMINAR UNA CITA (DELETE)
   ========================================================= */

function eliminarCita(indice) {

    // Solicitar confirmación antes de eliminar
    const confirmar = confirm(
        "¿Estás seguro de que deseas eliminar esta cita?"
    );

    if (confirmar) {

        // Comprobar si se elimina la cita que se está editando
        if (indiceEdicion === indice) {

            // Limpiar el formulario y cancelar la edición
            limpiarFormulario();

        } else if (indiceEdicion !== null && indice < indiceEdicion) {

            // Ajustar el índice porque se eliminó una cita anterior
            indiceEdicion--;

        }

        // Eliminar la cita del arreglo
        citas.splice(indice, 1);

        // Actualizar los datos guardados
        guardarCitas();

        // Mostrar nuevamente las citas
        mostrarCitas();

        alert("Cita eliminada correctamente.");

    }

}


/* =========================================================
   9. MOSTRAR LAS CITAS AL INICIAR LA PÁGINA
   ========================================================= */

// Mostrar las citas recuperadas de localStorage
mostrarCitas();

