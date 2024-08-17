/* Validar correo electrónico*/
function validarCorreo() {
    const correo = document.getElementById('correo').value;
    const contenido = document.getElementById('contenido');

        // Expresión regular para validar el formato del correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexCorreo.test(correo)) {
        //alert('Correo electrónico válido');
        contenido.innerHTML = "Muchas gracias, nos pondremos en contacto con usted";
    } else {
        //alert('Correo electrónico inválido');
        contenido.innerHTML = "Ingrese un correo válido";
    }





    
}

window.onload = function () {
    document.getElementById("validaButton").addEventListener("click", validarCorreo);
}

// Obtener todos los enlaces de la navegación
const links = document.querySelectorAll('nav a');

// Agregar un evento de clic a cada opción de menú
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar el comportamiento por defecto del enlace

        // Obtener el ID de la sección a mostrar
        const sectionId = link.getAttribute('href').substring(1);

        // Ocultar todas las secciones
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostrar la sección seleccionada
        document.getElementById(sectionId).style.display = 'block';
    });
});
