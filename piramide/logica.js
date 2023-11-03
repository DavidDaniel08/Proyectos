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

        respuestaRuta(arregloPiramide);
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

function botonReiniciar(){
    document.getElementById("pyramid").innerHTML= " ";

    let piramideReiniciada = parseInt(document.getElementById("Cantidad").value);

    let arregloPiramideReiniciada = [];

    for (let i = 1; i <= piramideReiniciada; i++) {
        let niveles = [];

        for (let j = 0; j < i; j++) {
            const numeroAleatorio2 = Math.floor(Math.random() * 99) + 1;
            niveles.push(numeroAleatorio2);
        }

        arregloPiramideReiniciada.push(niveles);
    }

    console.log(arregloPiramideReiniciada);

    let elemento2 = "";
    for (let i = 0; i < arregloPiramideReiniciada.length; i++) {
        elemento2 += '<div class="espacio">';
        for (let j = 0; j < arregloPiramideReiniciada[i].length; j++) {
            elemento2 += '<div class="cuadrado">' + arregloPiramideReiniciada[i][j] + '</div>';
        }
        elemento2 += '</div>';
    }
    document.getElementById("pyramid").innerHTML = elemento2;

    const resultado = encontrarRutaMasPesada(arregloPiramideReiniciada);
    console.log("Ruta más pesada:", resultado);

    respuestaRuta(arregloPiramideReiniciada);
}

function respuestaRuta(arregloPiramide) {
    const copia2 = [...arregloPiramide];
    let arregloRuta = [];

    for (let i = 0; i < arregloPiramide.length; i++) {
        arregloRuta.push(Math.max(...copia2[i]));
    }

    console.log(arregloRuta);

    let elemento2 = "";

    for (let i = 0; i < arregloPiramide.length; i++) {
        elemento2 += '<div class="cuadrado2">' + arregloRuta[i] + '</div>';
    }

    document.getElementById("respuesta").innerHTML = elemento2;
            
}
