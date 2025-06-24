// Java Script //

    function zoomIn(element) {
        element.style.transform = "scale(1.05)";
        element.style.transition = "transform 0.3s ease";
    }

    function zoomOut(element) {
        element.style.transform = "scale(1)";
        element.style.transition = "transform 0.3s ease";
    }


     // JavaScript für Hauttyp auswerten
    function auswerten() {
    let optionenZaehler = {
        normal: 0,
        trocken: 0,
        fettig: 0,
        mischhaut: 0
    }

    // Zähle die Auswahl für jede Frage
    for (let i = 1; i <= 5; i++) {
        let frageOptionen = document.getElementsByName('frage' + i);
        for (let j = 0; j < frageOptionen.length; j++) {
            if (frageOptionen[j].checked) {
                optionenZaehler[frageOptionen[j].value]++;
            }
        }
    }

    // Logik für die Hauttypen
    let hauttyp = "";

if (optionenZaehler.normal >= 3) {
  hauttyp = "normal";
} else if (optionenZaehler.trocken >= 3) {
  hauttyp = "trocken";
} else if (optionenZaehler.fettig >= 3) {
  hauttyp = "fettig";
} else {
  hauttyp = "mischhaut";
}

// Hide all containers
hideAllContainers();

// Show the container based on hauttyp
showContainer(hauttyp);


// Add the fade-in class to the shown container
fadeInElement('container-' + hauttyp);

// Scroll to the shown container
scrollIntoView('container-' + hauttyp);
}


function hideAllContainers() {
// Hide all containers
var containers = document.querySelectorAll('.result-container');
containers.forEach(function(container) {
  container.style.display = "none";
});
}

function showContainer(hauttyp) {
// Show the container based on hauttyp
var container = document.getElementById('container-' + hauttyp);
if (container) {
  container.style.display = "block";
}
}

function fadeInElement(elementId) {
  let element = document.getElementById(elementId);
  if (element) {
    element.classList.add('fade-in');
  }
}

function scrollIntoView(elementId) {
  let element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
