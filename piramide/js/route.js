let sumaCaminoMasPesado;

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

    sumaCaminoMasPesado = -1;
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