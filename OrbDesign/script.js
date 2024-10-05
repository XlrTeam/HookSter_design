// script.js

let isHovered = false;

function handleMouseEnter() {
    isHovered = true;
    alignOrbits();
}

function handleMouseLeave() {
    isHovered = false;
    alignOrbits();
}

function alignOrbits() {
    const orbits = document.querySelectorAll('.orbit');
    orbits.forEach((orbit, index) => {
        if (isHovered) {
            orbit.classList.add('align');
        } else {
            orbit.classList.remove('align');
        }
    });
}
