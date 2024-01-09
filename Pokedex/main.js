const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
const URL = "https://pokeapi.co/api/v2/pokemon/";

// Función para realizar una solicitud fetch y obtener datos JSON
const fetchData = (i) => fetch(URL + i).then(response => response.json());

// Crear un array de promesas para todas las solicitudes fetch
const requests = Array.from({ length: 898 }, (_, i) => fetchData(i + 1));

// Utilizar Promise.all para esperar a que todas las promesas se resuelvan
Promise.all(requests)
    .then(dataArray => {
        // Procesar cada conjunto de datos y mostrar el Pokémon
        dataArray.forEach(data => mostrarPokemon(data));
    })
    .catch(error => console.error('Error de carga:', error));

function mostrarPokemon(poke) {
    let tipos = poke.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`).join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = '00' + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = '0' + pokeId;
    }

    const div = document.createElement('div');
    div.classList.add('pokemon');
    div.innerHTML = `<p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other['official-artwork'].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokmon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}Kg</p>
            </div>
        </div>`;

    listaPokemon.appendChild(div);
}

botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";

    const requests = Array.from({ length: 898 }, (_, i) => fetch(URL + (i + 1)).then(response => response.json()));

    Promise.all(requests)
        .then(dataArray => {
            dataArray.forEach(data => {
                if (botonId === "ver-todos") {
                    mostrarPokemon(data);
                } else {
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(botonId))) {
                        mostrarPokemon(data);
                    }
                }
            });
        })
        .catch(error => console.error('Error de carga:', error));
}));

