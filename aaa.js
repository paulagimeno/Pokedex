const right$$ = document.querySelector('.right');
const left$$ = document.querySelector('.left');
let search$$ = document.querySelector('.search');
let searchMode$$ = document.querySelector('#searchMode');
const pokeList$$ = document.querySelector('.pokeList');
const name$$ = document.querySelector('.searchName');
const pokedata$$ = document.querySelector('.pokeData');

const pokemonbig$$ = document.createElement('div');
    const picname$$ = document.createElement('div');
    const alldata = document.createElement('div');
    const pokenames = document.createElement('div');
    const pokepic = document.createElement('div');
    const pokepik = document.createElement('img');
    const namep = document.createElement('p');

pokemonbig$$.classList.add('pokemonbig');
    picname$$.classList.add('picname');
    alldata.classList.add('alldata');
    pokenames.classList.add('pokenames');
    pokepic.classList.add('pokepic');
    namep.classList.add('namep');
    pokepik.classList.add('pokepik');

    pokedata$$.appendChild(pokemonbig$$);
    pokemonbig$$.appendChild(picname$$);
    pokemonbig$$.appendChild(alldata);
    picname$$.appendChild(pokenames);
    picname$$.appendChild(pokepic);
    pokenames.appendChild(namep);

async function getPokemonInfo() { 
    let todosPokemon = [];  
    for (let i = 1; i < 152; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    const resultado = await response.json()
    todosPokemon.push(resultado);
    }
    console.log(todosPokemon)
    return todosPokemon;
    
}

let mapPokemons = (pokemonNoMap) => {
    return pokemonNoMap.map((pokemon) =>
    ({
        nombre: pokemon.name,
        imagen: pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default,
        tipo1: pokemon.types[0].type.name,
        icono: pokemon.sprites.other.home.front_default,
        id: pokemon.id,
        hp: pokemon.stats[0].base_stat, 
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat

    }))
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let printPokeList = (mappedPokemons) =>{
     pokeList$$.innerHTML = "";
    for (let i = 0; i < mappedPokemons.length; i++) {
        const pokemon = mappedPokemons[i];
        const pokeArticle$$ = document.createElement('article');
        const pokeImg$$ = document.createElement('img');
        pokeImg$$.setAttribute('src', pokemon.imagen);
        pokeArticle$$.classList.add('pokeListStyle');
        const pokeName$$ = document.createElement('p'); 
      
        const capitalizedName = capitalizeFirstLetter(pokemon.nombre)
        pokeName$$.textContent = capitalizedName;
        pokeList$$.appendChild(pokeArticle$$);
        pokeArticle$$.appendChild(pokeName$$);
        pokeArticle$$.appendChild(pokeImg$$);

        pokeName$$.addEventListener('click', () => printPokemon(pokemon));
        };
    } 

    function printPokemon(pokemon){
    pokedata$$.innerHTML="";
    alldata.innerHTML="";
    pokepik.innerHTML="";
    setTimeout(() => {

        const poketabla$$ = document.createElement('table');
    poketabla$$.classList.add('poketabla');

    for (let i = 0; i < 6; i++) {
        const fila$$ = document.createElement('tr');
        for (let j = 0; j < 2; j++) {
            const celda$$ = document.createElement('td');
            celda$$.classList.add('pokecelda');

            celda$$.setAttribute('data-cell-id', `cell-${i}-${j}`);

            fila$$.appendChild(celda$$);
    
        }
        poketabla$$.appendChild(fila$$);
    }


    alldata.appendChild(poketabla$$);

    const cell1 = document.querySelector('[data-cell-id="cell-0-0"]');
        if (cell1) {
            cell1.textContent = 'Pokédex ID number';
        }

        const cell2 = document.querySelector('[data-cell-id="cell-1-0"]');
        if (cell2) {
            cell2.textContent = 'Type';
        }

        const cell3 = document.querySelector('[data-cell-id="cell-2-0"]');
        if (cell3) {
            cell3.textContent = 'Base HP';
        }

        const cell4 = document.querySelector('[data-cell-id="cell-3-0"]');
        if (cell4) {
            cell4.textContent = 'Base attack';
        }

        const cell5 = document.querySelector('[data-cell-id="cell-4-0"]');
        if (cell5) {
            cell5.textContent = 'Base defense';
        }

        const cell6 = document.querySelector('[data-cell-id="cell-5-0"]');
        if (cell6) {
            cell6.textContent = 'Base speed';
        }

        const cell7 = document.querySelector('[data-cell-id="cell-0-1"]');
        if (cell7) {
            cell7.textContent = '#' + pokemon.id;
        }

        const cell8 = document.querySelector('[data-cell-id="cell-1-1"]');
        if (cell8) {
            cell8.textContent = pokemon.tipo1;
        }

        const cell9 = document.querySelector('[data-cell-id="cell-2-1"]');
        if (cell9) {
            cell9.textContent = pokemon.hp;
        }

        const cell10 = document.querySelector('[data-cell-id="cell-3-1"]');
        if (cell10) {
            cell10.textContent = pokemon.attack;
        }

        const cell11 = document.querySelector('[data-cell-id="cell-4-1"]');
        if (cell11) {
            cell11.textContent = pokemon.defense;
        }

        const cell12 = document.querySelector('[data-cell-id="cell-5-1"]');
        if (cell12) {
            cell12.textContent = pokemon.speed;
        }

        cell7.classList.add('data');
        cell8.classList.add('data');
        cell9.classList.add('data');
        cell10.classList.add('data');
        cell11.classList.add('data');
        cell12.classList.add('data');

        gsap.from(".namep", { x: -100, opacity: 0, duration: 1, ease: "power1.out" });

        gsap.from(".pokepik", { y: 100, opacity: 0, duration: 1, ease: "power1.out" });

        gsap.from(".poketabla", { x: 100, opacity: 0, duration: 1, ease: "power1.out" });

        const capitalizeName = capitalizeFirstLetter(pokemon.nombre)
        namep.textContent = capitalizeName;
    pokepik.setAttribute('src', pokemon.icono);
    }, 0);
    
    


    pokedata$$.appendChild(pokemonbig$$);
    pokemonbig$$.appendChild(picname$$);
    pokemonbig$$.appendChild(alldata);
    picname$$.appendChild(pokenames);
    picname$$.appendChild(pokepic);
    pokepic.appendChild(pokepik);
    pokenames.appendChild(namep);

} 




let drawInput = (mappedPokemons) =>{
    name$$.addEventListener('input', () => 
    pokeSearch(name$$.value, mappedPokemons))
    }

    let pokeSearch = (filtro, pokemons) => {
        let filteredPokemons = pokemons.filter((pokemon) => pokemon.nombre.toLowerCase().includes(filtro.toLowerCase())
        );
        console.log(filteredPokemons);
        printPokeList(filteredPokemons)
    }

async function init(){
    const pokemons = await getPokemonInfo();
    const mappedPokemons = mapPokemons(pokemons);

    let buttonWater = document.querySelector('.water');
    buttonWater.addEventListener('click', function(){
        let pokemonWater = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'water');
        printPokeList(pokemonWater)
    });

    let buttonFire = document.querySelector('.fire');
    buttonFire.addEventListener('click', function(){
        let pokemonFire = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'fire');
        printPokeList(pokemonFire)
    });

    let buttonGrass = document.querySelector('.grass');
    buttonGrass.addEventListener('click', function(){
        let pokemonGrass = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'grass');
        printPokeList(pokemonGrass)
    });

    let buttonPsych = document.querySelector('.psy');
    buttonPsych.addEventListener('click', function(){
        let pokemonPsy = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'psychic');
        printPokeList(pokemonPsy)
    });

    let buttonBug = document.querySelector('.bug');
    buttonBug.addEventListener('click', function(){
        let pokemonBug = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'bug');
        printPokeList(pokemonBug)
    });

    let buttonElec = document.querySelector('.elec');
    buttonElec.addEventListener('click', function(){
        let pokemonElec = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'electric');
        printPokeList(pokemonElec)
    });

    let buttonIce = document.querySelector('.ice');
    buttonIce.addEventListener('click', function(){
        let pokemonIce = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'ice');
        printPokeList(pokemonIce)
    });

    let buttonDragon = document.querySelector('.dragon');
    buttonDragon.addEventListener('click', function(){
        let pokemonDragon = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'dragon');
        printPokeList(pokemonDragon)
    });

    let buttonFlying = document.querySelector('.flying');
    buttonFlying.addEventListener('click', function(){
        printPokeList(mappedPokemons)
    });

    let buttonPoison = document.querySelector('.poison');
    buttonPoison.addEventListener('click', function(){
        let pokemonPoison = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'poison');
        printPokeList(pokemonPoison)
    });

    let buttonRock = document.querySelector('.rock');
    buttonRock.addEventListener('click', function(){
        let pokemonRock = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'rock');
        printPokeList(pokemonRock)
    });

    let buttonFighting = document.querySelector('.fighting');
    buttonFighting.addEventListener('click', function(){
        let pokemonFighting = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'fighting');
        printPokeList(pokemonFighting)
    });

    let buttonFairy = document.querySelector('.fairy');
    buttonFairy.addEventListener('click', function(){
        let pokemonFairy = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'fairy');
        printPokeList(pokemonFairy)
    });

    let buttonNormal = document.querySelector('.normal');
    buttonNormal.addEventListener('click', function(){
        let pokemonNormal = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'normal');
        printPokeList(pokemonNormal)
    });

    let buttonGround = document.querySelector('.ground');
    buttonGround.addEventListener('click', function(){
        let pokemonGround = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'ground');
        printPokeList(pokemonGround)
    });

    let buttonGhost = document.querySelector('.ghost');
    buttonGhost.addEventListener('click', function(){
        let pokemonGhost = mappedPokemons.filter(pokemon => pokemon.tipo1 == 'ghost');
        printPokeList(pokemonGhost)
    });

    printPokeList(mappedPokemons);

    drawInput(mappedPokemons);

}


init();
