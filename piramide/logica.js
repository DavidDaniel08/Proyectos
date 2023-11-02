function Dibujar() {
    let piramide = parseInt(document.getElementById("Cantidad").value);

    if (piramide > 0 && piramide < 51) {
        let arregloPiramide = [];

        for (let i = 1; i <= piramide; i++) {
            let nivel = [];

            for (let j = 0; j < i; j++) {
                const numeroAleatorio = Math.floor(Math.random() * 99) + 1;
                nivel.push(numeroAleatorio);
            }

            arregloPiramide.push(nivel);
        }

        console.log(arregloPiramide);

        let elemento = "";
        for (let i = 0; i < arregloPiramide.length; i++) {
            elemento += '<div class="espacio">';
            for (let j = 0; j < arregloPiramide[i].length; j++) {
                elemento += '<div class="cuadrado">' + arregloPiramide[i][j] + '</div>';
            }
            elemento += '</div>';
        }
        document.getElementById("pyramid").innerHTML = elemento;

        const resultado = encontrarRutaMasPesada(arregloPiramide);
        console.log("Ruta más pesada:", resultado);
    } else {
        alert("El número tiene que ser mayor a 0 y menor que 51");
    }
}

function encontrarRutaMasPesada(arregloPiramide) {
    const copia = [...arregloPiramide];

    for (let i = arregloPiramide.length - 2; i >= 0; i--) {
        for (let j = 0; j < arregloPiramide[i].length; j++) {
            copia[i][j] += Math.max(copia[i + 1][j], copia[i + 1][j + 1]);
        }
    }

    return copia[0][0];
}