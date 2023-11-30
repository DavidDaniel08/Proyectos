// historial.js

document.addEventListener("DOMContentLoaded", function () {
    mostrarHistorial();
});

function mostrarHistorial() {
    // Obtener el historial desde el almacenamiento local
    let historialPiramides = JSON.parse(localStorage.getItem('historialPiramides')) || [];

    let elemento = "";
    historialPiramides.forEach((piramide, index) => {
        elemento += `<button onclick="mostrarArreglo(${index})">Mostrar Pirámide ${index + 1}</button>`;
    });

    // Mostrar los botones en el contenedor correspondiente en la página
    document.getElementById("botones-container").innerHTML = elemento;
}

function mostrarArreglo(index) {
    // Obtener el historial desde el almacenamiento local
    let historialPiramides = JSON.parse(localStorage.getItem('historialPiramides')) || [];

    if (index >= 0 && index < historialPiramides.length) {
        let piramide = historialPiramides[index];

        // Calcular la ruta más pesada
        let rutaMasPesada = encontrarRutaMasPesada(piramide);

        // Mostrar la pirámide y la ruta más pesada en la interfaz
        mostrarPiramideEnPantalla(piramide);
        mostrarRutaMasPesadaEnPantalla(rutaMasPesada, piramide);
    } else {
        alert("Índice fuera de rango.");
    }
}


function mostrarPiramideEnPantalla(piramide) {
    let elemento = "";

    for (let i = 0; i < piramide.length; i++) {
        elemento += "<div class='space'>";
        for (let j = 0; j < piramide[i].length; j++) {
            elemento += `<div class='Blocks'>${piramide[i][j]}</div>`;
        }
        elemento += "</div>";
    }

    // Mostrar la pirámide en el contenedor correspondiente en la página
    document.getElementById("piramide-container").innerHTML = elemento;
}

function mostrarRutaMasPesadaEnPantalla(rutaMasPesada, piramide) {
    let rutaElemento = "";
    let sumaRutaMasPesada = 0;

    // Obtiene todos los elementos "Blocks" de la pirámide
    const blocks = document.querySelectorAll(".Blocks");

    for (let i = 0; i < rutaMasPesada.length; i++) {
        const rowIndex = i;
        const colIndex = rutaMasPesada[i];
        const valor = piramide[rowIndex][colIndex];

        // Calcula el índice en la pirámide bidimensional
        const index = rowIndex * (rowIndex + 1) / 2 + colIndex;

        // Agrega la clase "Path" al elemento correspondiente en la pirámide
        blocks[index].classList.add("Path");

        // Crea el elemento para mostrar en la ruta
        rutaElemento += `<div class='Blocks-Two Path'>${valor}</div>`;

        // Suma el valor al total
        sumaRutaMasPesada += valor;
    }

    // Mostrar la ruta más pesada en el contenedor correspondiente en la página
    document.getElementById("ruta-mas-pesada").innerHTML = rutaElemento + `<div class='Block-Answer'> = ${sumaRutaMasPesada}</div>`;
}




function encontrarRutaMasPesada(arregloPiramide) {
    const piramide = arregloPiramide.map(nivel => [...nivel]);
    const dp = piramide.map(fila => [...fila]);
    const camino = new Array(piramide.length).fill().map(() => []);

    for (let i = 1; i < piramide.length; i++) {
        for (let j = 0; j < piramide[i].length; j++) {
            const izquierdaPadre = dp[i - 1][j - 1] || 0;
            const derechaPadre = dp[i - 1][j] || 0;

            if (izquierdaPadre > derechaPadre) {
                dp[i][j] += izquierdaPadre;
                camino[i].push(j - 1);
            } else {
                dp[i][j] += derechaPadre;
                camino[i].push(j);
            }
        }
    }

    let sumaCaminoMasPesado = -1;
    let finCaminoMasPesado = -1;

    for (let j = 0; j < piramide[piramide.length - 1].length; j++) {
        if (dp[piramide.length - 1][j] > sumaCaminoMasPesado) {
            sumaCaminoMasPesado = dp[piramide.length - 1][j];
            finCaminoMasPesado = j;
        }
    }

    const caminoMasPesado = [finCaminoMasPesado];
    for (let i = piramide.length - 1; i >= 1; i--) {
        caminoMasPesado.unshift(camino[i][finCaminoMasPesado]);
        finCaminoMasPesado = camino[i][finCaminoMasPesado];
    }

    return caminoMasPesado;
}




