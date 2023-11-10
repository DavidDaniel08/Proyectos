function respuestaRuta(arregloPiramide) {
    const caminoMasPesado = encontrarRutaMasPesada(arregloPiramide);
    let caminoLegible = [];

    for (let i = 0; i < caminoMasPesado.length; i++) {
        caminoLegible.push(arregloPiramide[i][caminoMasPesado[i]]);
    }

    let elemento2 = "";

    for (let i = 0; i < caminoLegible.length; i++) {
        elemento2 += '<div class="Blocks-Two Path">' + caminoLegible[i] + '</div>';
    }

    let SumaCamino = 0;
    for (let i = 0; i < caminoLegible.length; i++) {
      SumaCamino += caminoLegible[i];
    }

    document.getElementById("respuesta").innerHTML = elemento2 + '<p class="text">' + ' = ' + '</p>' + '<div class="Block-Answer">' + SumaCamino + '</div>';
    console.log("Camino más pesado (valores):", caminoLegible);
    console.log("Camino más pesado (suma):", sumaCaminoMasPesado);
}