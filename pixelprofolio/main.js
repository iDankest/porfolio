
function scrollToSection() {
    window.scrollTo({
        top: document.getElementById('sobremi').offsetTop,
        behavior: 'smooth' // Para un desplazamiento suave
    });
}//No finciona

// Selecciona todas las secciones
const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;

// Función para realizar scroll suave a la sección indicada
function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Manejo de eventos de scroll del ratón (hacia arriba y abajo)
window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        // Scroll hacia abajo
        currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    } else {
        // Scroll hacia arriba
        currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }
    scrollToSection(currentSectionIndex);
});

// Manejo de click en los enlaces del menú para scroll suave
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link, index) => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            currentSectionIndex = index - 1; // Ajustar el índice al correcto
            scrollToSection(currentSectionIndex);
        }
    });
});
