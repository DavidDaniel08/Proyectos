function botonReiniciar() {
    let piramide = parseInt(document.getElementById("Cantidad").value);

    if (piramide > 0 && piramide < 51) {
        let arregloPiramide = [];

        let elemento = "";
        for (let i = 1; i <= piramide; i++) {
            elemento += '<div class="Space">';
            let nivel = [];

            for (let j = 0; j < i; j++) {
                const numeroAleatorio = Math.floor(Math.random() * 99) + 1;
                nivel.push(numeroAleatorio);
                elemento += '<div class="Blocks">' + numeroAleatorio + '</div>';
            }

            arregloPiramide.push(nivel);
            elemento += '</div>';
        }

        document.getElementById("pyramid").innerHTML = elemento;

        encontrarRutaMasPesada(arregloPiramide);
        respuestaRuta(arregloPiramide);
        colorCamino(encontrarRutaMasPesada(arregloPiramide));
    } else {
        alert("El número tiene que ser mayor a 0 y menor que 51");
    }
}