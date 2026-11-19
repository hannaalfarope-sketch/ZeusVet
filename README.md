# 🐾 ZeusVet - Agenda Veterinaria

## 1. Descripción del proyecto

ZeusVet es una aplicación web diseñada para gestionar citas veterinarias de manera sencilla y organizada. Permite registrar mascotas, guardar la información de sus citas, consultar los registros, editar y eliminar citas existentes.

El proyecto fue desarrollado como una práctica académica utilizando HTML, CSS y JavaScript.

## 2. Tecnologías utilizadas

- **HTML5:** permite crear la estructura de la página web.
- **CSS3:** permite dar estilos y mejorar la apariencia visual.
- **JavaScript:** permite implementar las funcionalidades de la aplicación.
- **LocalStorage:** permite guardar la información de las citas en el navegador.

## 3. Funcionalidades principales

ZeusVet cuenta con las siguientes funcionalidades:

- Registrar citas veterinarias.
- Guardar las citas en el navegador.
- Mostrar las citas registradas.
- Editar la información de una cita.
- Eliminar citas existentes.
- Conservar los registros al actualizar o cerrar la página.

## 4. Estructura del proyecto

```text
ZeusVet/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── capturas/
    ├── inicio.png
    ├── formulario.png
    └── citas-registradas.png
```

## 5. Instrucciones para ejecutar el proyecto

Para ejecutar ZeusVet se deben seguir estos pasos:

1. Descargar o clonar el repositorio desde GitHub.
2. Abrir la carpeta del proyecto en el computador.
3. Buscar el archivo `index.html`.
4. Abrirlo utilizando un navegador web, como Google Chrome.
5. Utilizar el formulario para registrar y gestionar las citas veterinarias.

No es necesario instalar programas adicionales ni configurar un servidor para utilizar la aplicación.

## 6. Capturas de pantalla

### Página principal

[Página principal de ZeusVet](https://github.com/hannaalfarope-sketch/ZeusVet/blob/main/capturas/inicio.png)

### Formulario de registro de citas

[Formulario de ZeusVet](https://github.com/hannaalfarope-sketch/ZeusVet/blob/main/capturas/formulario.png)

### Citas registradas

[Citas registradas en ZeusVet](https://github.com/hannaalfarope-sketch/ZeusVet/blob/main/capturas/citas-registradas.png)

## 7. Prompts utilizados durante el desarrollo

Durante el desarrollo de ZeusVet se utilizó inteligencia artificial como herramienta de apoyo para crear la estructura de la página, diseñar la interfaz, implementar las funcionalidades CRUD y revisar el código del proyecto.

A continuación, se presentan los prompts utilizados y el propósito de cada uno.

### Prompt 1. Creación de la estructura HTML

**Prompt utilizado:**

> Actúa como un desarrollador web y ayúdame a crear el archivo index.html de un proyecto llamado ZeusVet, una agenda de citas veterinarias.
>
> Soy estudiante de cuarto semestre de Ingeniería de Software. Quiero desarrollar una aplicación web sencilla, organizada y fácil de entender.
>
> La página debe tener las siguientes secciones:
>
> 1. **Encabezado:**
>    - Logo con una huellita y el nombre ZeusVet.
>    - Menú con los enlaces Inicio, Agendar cita y Citas registradas.
>
> 2. **Bienvenida:**
>    - Una etiqueta que diga "Cuidado para tus mejores amigos".
>    - Título: "Cuidamos a quienes llenan tu vida de alegría".
>    - Un párrafo corto que presente el servicio veterinario.
>    - Un botón "Agendar una cita".
>    - Dos imágenes, una de un perro y otra de un gato.
>
> 3. **Formulario de citas:**
>    - Título "Agenda una cita".
>    - Campo nombre de la mascota.
>    - Lista para seleccionar el tipo de mascota: Perro, Gato u Otro.
>    - Campo nombre del propietario.
>    - Lista para seleccionar el servicio: Consulta general, Vacunación, Desparasitación, Peluquería o Urgencias.
>    - Campo fecha.
>    - Campo hora.
>    - Campo motivo de la cita.
>    - Botón "Registrar cita".
>
> 4. **Citas registradas:**
>    - Título "Citas registradas".
>    - Un contenedor donde JavaScript mostrará las citas.
>    - Mensaje inicial: "Aún no hay citas registradas".
>
> 5. **Pie de página:**
>    - Nombre ZeusVet.
>    - Mensaje relacionado con el cuidado de las mascotas.
>
> **Requisitos:**
> - Utiliza HTML5 semántico.
> - Incluye los identificadores formularioCita, listaCitas, nombreMascota, tipoMascota, nombrePropietario, servicio, fecha, hora y motivo.
> - Utiliza las clases encabezado, contenedor-navegacion, logo, bienvenida, texto-bienvenida, etiqueta, boton-bienvenida, imagenes-bienvenida, imagen-perro, imagen-gato, seccion-formulario, titulo-seccion, tarjeta-formulario, seccion-citas y tarjeta-cita cuando corresponda.
> - Conecta el archivo style.css dentro del head.
> - Conecta el archivo script.js antes de cerrar body.
> - Organiza y comenta el código de manera sencilla.
>
> **Importante:** No agregues estilos CSS dentro del HTML ni programes JavaScript todavía. Por ahora necesito únicamente el archivo index.html completo.

**¿Para qué se utilizó?**

Para crear la estructura inicial de ZeusVet, organizar sus secciones y establecer los identificadores y clases necesarios para conectar posteriormente los archivos CSS y JavaScript.

### Prompt 2. Diseño de la interfaz con CSS

**Prompt utilizado:**

> Actúa como un desarrollador web especializado en diseño de interfaces y ayúdame a crear el archivo style.css completo para mi proyecto ZeusVet.
>
> Ya tengo creado el archivo index.html. Quiero que diseñes una página veterinaria moderna, bonita, agradable y organizada, pero sencilla de entender para una estudiante de cuarto semestre de Ingeniería de Software.
>
> **Importante:** NO quiero una página básica, sin estilos, con fondo blanco y botones grises. Quiero un diseño visual completo y coherente.
>
> **Diseño que debes implementar:**
>
> 1. **Estilo general:**
>    - Fuente Arial.
>    - Fondo general azul muy claro (#f0f7fc).
>    - Texto principal gris azulado (#263746).
>    - Contenido centrado y con un ancho máximo de 1100px.
>
> 2. **Encabezado:**
>    - Fondo azul oscuro (#123b5d).
>    - Logo ZeusVet en color blanco.
>    - Menú horizontal con enlaces blancos.
>    - Efecto hover en color azul claro (#8ed8f5).
>
> 3. **Bienvenida:**
>    - Distribución en dos columnas.
>    - Texto a la izquierda e imágenes de perro y gato a la derecha.
>    - Título grande en azul oscuro (#123b5d).
>    - Etiqueta pequeña con fondo azul claro.
>    - Botón azul (#17658f), con bordes redondeados y efecto hover.
>    - Imágenes de 260px de alto, con bordes redondeados, sombra suave y ajuste de imagen correcto.
>
> 4. **Formulario:**
>    - Título centrado.
>    - Tarjeta blanca con sombra suave y esquinas redondeadas.
>    - Ancho máximo de 720px.
>    - Campos organizados en dos columnas.
>    - Inputs, select y textarea con fondo azul muy claro y bordes suaves.
>    - Efecto de enfoque azul al seleccionar los campos.
>    - Botón azul, no gris.
>    - El botón debe ocupar todo el ancho disponible.
>
> 5. **Citas registradas:**
>    - Mostrar las citas en tarjetas blancas.
>    - Organizar las tarjetas en dos columnas cuando haya espacio.
>    - Bordes redondeados y sombras suaves.
>    - Borde lateral izquierdo azul.
>    - Botón Editar azul y botón Eliminar rojo.
>    - Diferenciar visualmente los botones.
>
> 6. **Pie de página:**
>    - Fondo azul oscuro (#123b5d).
>    - Texto blanco.
>    - Contenido centrado.
>
> 7. **Diseño responsive:**
>    - Adaptar el encabezado, bienvenida, formulario y tarjetas para celulares.
>    - En pantallas pequeñas, organizar el contenido en una sola columna.
>
> **Requisitos:**
> - Utiliza los nombres de clases que ya existen en mi index.html.
> - No cambies los identificadores ni las clases del HTML.
> - No utilices frameworks ni librerías.
> - No uses estilos predeterminados del navegador.
> - No omitas ninguna sección.
> - Incluye comentarios sencillos para identificar cada parte del CSS.
>
> **Entrega:** Dame únicamente el código completo de style.css, listo para copiar y pegar. Asegúrate de que el resultado se vea como una página veterinaria profesional, agradable y visualmente atractiva.

**¿Para qué se utilizó?**

Para crear el diseño visual de ZeusVet mediante CSS, definiendo los colores, la distribución de las secciones, los estilos de los botones, las tarjetas y la adaptación de la página a diferentes tamaños de pantalla.

### Prompt 3. Implementación de las operaciones CRUD con JavaScript

**Prompt utilizado:**

> Actúa como un desarrollador web y ayúdame a implementar el archivo script.js completo para mi proyecto ZeusVet.
>
> Ya tengo terminados index.html y style.css. Ahora quiero programar las cuatro operaciones CRUD utilizando JavaScript básico, arreglos, objetos, funciones, eventos y localStorage.
>
> Soy estudiante de cuarto semestre de Ingeniería de Software. Explícame y organiza el código de manera sencilla, sin utilizar conceptos demasiado avanzados.
>
> **Importante:** conserva exactamente los identificadores y las clases de mi HTML. No cambies la estructura ni el diseño.
>
> **Elementos del HTML:**
> - formularioCita
> - listaCitas
> - nombreMascota
> - tipoMascota
> - nombrePropietario
> - servicio
> - fecha
> - hora
> - motivo
>
> **Funcionalidades:**
>
> 1. **CREATE (Crear):**
>    - Capturar los datos ingresados en el formulario.
>    - Crear un objeto con la información de la cita.
>    - Agregar el objeto a un arreglo llamado citas.
>    - Guardar el arreglo en localStorage.
>
> 2. **READ (Leer):**
>    - Mostrar todas las citas registradas en el contenedor listaCitas.
>    - Crear una tarjeta para cada cita con la información de la mascota, propietario, servicio, fecha, hora y motivo.
>    - Mostrar un mensaje cuando no existan citas.
>
> 3. **UPDATE (Actualizar):**
>    - Agregar un botón Editar en cada tarjeta.
>    - Al presionarlo, cargar los datos de esa cita en el formulario.
>    - Permitir modificar la información.
>    - Cambiar el texto del botón principal a "Guardar cambios".
>    - Guardar los cambios en el arreglo y actualizar localStorage.
>
> 4. **DELETE (Eliminar):**
>    - Agregar un botón Eliminar en cada tarjeta.
>    - Solicitar confirmación antes de eliminar.
>    - Eliminar la cita seleccionada del arreglo.
>    - Actualizar localStorage y volver a mostrar las citas.
>
> **Requisitos:**
> - Utiliza un arreglo llamado citas.
> - Utiliza objetos para almacenar los datos.
> - Crea funciones para guardar, mostrar, editar y eliminar citas.
> - Utiliza addEventListener para los eventos.
> - Utiliza localStorage.setItem y localStorage.getItem.
> - Utiliza JSON.stringify y JSON.parse.
> - Utiliza createElement o innerHTML para mostrar las tarjetas.
> - Conserva la clase tarjeta-cita para las tarjetas y los botones con estilos diferenciados.
> - Evita duplicar código innecesariamente.
> - Agrega comentarios numerados para explicar las partes principales.
> - Valida que los campos obligatorios estén completos.
> - No utilices frameworks, librerías ni bases de datos externas.
>
> **Entrega:** Dame el código completo de script.js, listo para copiar y pegar. Después explícame brevemente cómo funciona cada operación CRUD.

**¿Para qué se utilizó?**

Para implementar las cuatro operaciones CRUD de ZeusVet. Con este prompt se solicitó utilizar JavaScript básico, arreglos, objetos, funciones, eventos y localStorage para registrar, mostrar, editar y eliminar citas veterinarias.

### Prompt 4. Revisión y refactorización del proyecto

**Prompt utilizado:**

> Actúa como un desarrollador web y realiza una revisión y refactorización de mi proyecto ZeusVet.
>
> Mi proyecto es una agenda veterinaria desarrollada con HTML5, CSS3 y JavaScript básico. Ya tiene las cuatro operaciones CRUD y utiliza localStorage para guardar las citas.
>
> Quiero mejorar la organización y claridad del código sin cambiar el diseño visual ni eliminar funcionalidades.
>
> **Revisa los siguientes aspectos:**
>
> 1. **HTML:**
>    - Verifica que la estructura esté organizada.
>    - Comprueba que los identificadores y las clases sean coherentes.
>    - Revisa que los archivos CSS y JavaScript estén correctamente conectados.
>
> 2. **CSS:**
>    - Identifica estilos repetidos.
>    - Comprueba que los botones, formularios y tarjetas tengan un diseño coherente.
>    - Conserva los colores y la apariencia actual de ZeusVet.
>    - Mantén el diseño adaptable a celulares.
>
> 3. **JavaScript:**
>    - Revisa las funciones de crear, mostrar, editar y eliminar citas.
>    - Identifica código repetido que se pueda simplificar.
>    - Mejora los nombres de variables y comentarios si es necesario.
>    - Comprueba que localStorage guarde y recupere correctamente las citas.
>    - Verifica que editar y eliminar no produzcan errores.
>
> **Importante:**
> - No cambies los identificadores ni las clases existentes.
> - No elimines ninguna funcionalidad.
> - No utilices frameworks ni librerías.
> - Mantén un nivel de programación apropiado para una estudiante de cuarto semestre.
> - No inventes mejoras: explica qué problemas encontraste y qué cambios realmente realizaste.
>
> Primero presenta una lista de mejoras encontradas. Después entrega únicamente los fragmentos que necesitan cambios, indicando en qué archivo van. No reemplaces los tres archivos completos si no es necesario.
>
> Al final, explica cómo puedo comprobar que los cambios funcionan correctamente y entrega las correcciones necesarias para que el código JavaScript mantenga todas sus funcionalidades.

**¿Para qué se utilizó?**

Para revisar el proyecto después de implementar sus funcionalidades, identificar posibles errores o partes repetidas y mejorar la organización del código. También se utilizó para comprobar que las operaciones CRUD y el almacenamiento de las citas continuaran funcionando sin modificar el diseño de ZeusVet.

## 8. Autor

**Hanna Sofía Alfaro Peña**

Estudiante de cuarto semestre de Ingeniería de Software.

**Año:** 2026
