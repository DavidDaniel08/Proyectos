function colorCamino(camino) {
    // Obtiene todos los elementos "Blocks" de la pirámide
    const blocks = document.querySelectorAll(".Blocks");
    
    // Aplica la clase "Path" solo a los elementos del camino
    for (let i = 0; i < camino.length; i++) {
        const rowIndex = i;
        const colIndex = camino[i];

        if (colIndex !== undefined) {
            const index = rowIndex * (rowIndex + 1) / 2 + colIndex;
            blocks[index].classList.add("Path");
        }
    }
}