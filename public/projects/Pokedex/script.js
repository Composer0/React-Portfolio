const poke_container = document.getElementById('poke-container')
let pokemon_count = 0
const colors = {
    fire: '#FDDFDF',
    water: '#DEF3FD',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#ebccfa',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#faccda',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5',
    dark: '#aaaaaa',
    steel: '#9d9c9c',
    ghost: '#ceccfa',
    ice: 'cbfffe'
}

const main_types = Object.keys(colors)


// Button Variables
const all = document.getElementById('all')
const kanto = document.getElementById('Kanto')
const johto = document.getElementById('Johto')
const hoenn = document.getElementById('Hoenn')
const sinnoh = document.getElementById('Sinnoh')
const unova = document.getElementById('Unova')
const kalos = document.getElementById('Kalos')
const alola = document.getElementById('Alola')
const galar = document.getElementById('Galar')
const regions = [all, kanto, johto, hoenn, sinnoh, unova, kalos, alola, galar]
// End of Button Variables


// Selector: One at a time.
function select() {
        if (all.checked === true) {
            kanto.checked = false;
            johto.checked = false;
            hoenn.checked = false;
            sinnoh.checked = false;
            unova.checked = false;
            kalos.checked = false;
            alola.checked = false;
            galar.checked = false;
        }
    }
function selectK() {

    if (kanto.checked === true) {
        all.checked = false;
        johto.checked = false;
        hoenn.checked = false;
        sinnoh.checked = false;
        unova.checked = false;
        kalos.checked = false;
        alola.checked = false;
        galar.checked = false;
    } 
}
function selectJ() {
    if (johto.checked === true) {
        all.checked = false;
        kanto.checked = false;
        hoenn.checked = false;
        sinnoh.checked = false;
        unova.checked = false;
        kalos.checked = false;
        alola.checked = false;
        galar.checked = false;
    } 
}
function selectH() {
    if (hoenn.checked === true) {
        all.checked = false;
        kanto.checked = false;
        johto.checked = false;
        sinnoh.checked = false;
        unova.checked = false;
        kalos.checked = false;
        alola.checked = false;
        galar.checked = false;
    } 
}

function selectS() {
    if (sinnoh.checked === true) {
        all.checked = false;
        kanto.checked = false;
        johto.checked = false;
        hoenn.checked = false;
        unova.checked = false;
        kalos.checked = false;
        alola.checked = false;
        galar.checked = false;
    } 
}

function selectU() {
    if (unova.checked === true) {
        all.checked = false;
        kanto.checked = false;
        johto.checked = false;
        hoenn.checked = false;
        sinnoh.checked = false;
        kalos.checked = false;
        alola.checked = false;
        galar.checked = false;
    } 
}

function selectKa() {
    if (kalos.checked === true) {
        all.checked = false;
        kanto.checked = false;
        johto.checked = false;
        hoenn.checked = false;
        sinnoh.checked = false;
        unova.checked = false;
        alola.checked = false;
        galar.checked = false;
    } 
}

function selectA() {
    if (alola.checked === true) {
        all.checked = false;
        kanto.checked = false;
        johto.checked = false;
        hoenn.checked = false;
        sinnoh.checked = false;
        unova.checked = false;
        kalos.checked = false;
        galar.checked = false;
    } 
}

function selectG() {
    if (galar.checked === true) {
        all.checked = false;
        kanto.checked = false;
        johto.checked = false;
        hoenn.checked = false;
        sinnoh.checked = false;
        unova.checked = false;
        kalos.checked = false;
        alola.checked = false;
    } 
}
    
    
// Search Functions
all.addEventListener('click', (e) => {
        let checkboxes = document.querySelectorAll('input[name="all"]:checked');
        let output = [];
        checkboxes.forEach((checkbox) => {
            output.push(checkbox.value);
        })
        pokemon_count=898
    removePokemonCard()
    select()
    fetchPokemon() 
})

kanto.addEventListener('click', (e) => {
    let checkboxes = document.querySelectorAll('input[name="kanto"]:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    })
    pokemon_count=151
    removePokemonCard()
    selectK()
    fetchPokemon()
})

johto.addEventListener('click', (e) => {
    let checkboxes = document.querySelectorAll('input[name="johto"]:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    })
    pokemon_count=251
    removePokemonCard()
    selectJ()
    fetchPokemonJohto()
})

hoenn.addEventListener('click', (e) => {
    let checkboxes = document.querySelectorAll('input[name="hoenn"]:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    })
    pokemon_count=386
    removePokemonCard()
    selectH()
    fetchPokemonHoenn()
})

sinnoh.addEventListener('click', (e) => {
    let checkboxes = document.querySelectorAll('input[name="sinnoh"]:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    })
    pokemon_count=494
    removePokemonCard()
    selectS()
    fetchPokemonSinnoh()
})

unova.addEventListener('click', (e) => {
    let checkboxes = document.querySelectorAll('input[name="unova"]:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    })
    pokemon_count=649
    removePokemonCard()
    selectU()
    fetchPokemonUnova()
})

kalos.addEventListener('click', (e) => {
    let checkboxes = document.querySelectorAll('input[name="kalos"]:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    })
    pokemon_count=721
    removePokemonCard()
    selectKa()
    fetchPokemonKalos()
})

alola.addEventListener('click', (e) => {
    let checkboxes = document.querySelectorAll('input[name="alola"]:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    })
    pokemon_count=809
    removePokemonCard()
    selectA()
    fetchPokemonAlola()
})

galar.addEventListener('click', (e) => {
    let checkboxes = document.querySelectorAll('input[name="galar"]:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    })
    pokemon_count=898
    removePokemonCard()
    selectG()
    fetchPokemonGalar()
})
// End of Search Functions


// Fetch functions
let fetchPokemon = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

let fetchPokemonJohto = async () => {
    for(let i = 152; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

let fetchPokemonHoenn = async () => {
    for(let i = 252; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

let fetchPokemonSinnoh = async () => {
    for(let i = 387; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

let fetchPokemonUnova = async () => {
    for(let i = 495; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

let fetchPokemonKalos = async () => {
    for(let i = 650; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

let fetchPokemonAlola = async () => {
    for(let i = 722; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

let fetchPokemonGalar = async () => {
    for(let i = 810; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}
// End of Fetch Functions


// Gather data
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)

}


// Construct visual medium for information
const createPokemonCard = (pokemon) => {
    var pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    // map establish that type will now refer to type object's type.name
    const poke_types = pokemon.types.map(type => type.type.name)
    // console.log(poke_types)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const typeName = type[0].toUpperCase() + type.slice(1)

    // const type finds the type that is being used by the pokemon. That type is inserted/identified into the colors array to assign the color to the pokemon's box.
    const color = colors[type]
    // style draws in CSS property! Be aware that certain descriptors change in presentation when ported over to JavaScript.
    pokemonEl.style.backgroundColor=color
    
    let pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type 1: <span>${typeName}</span></small>
    </div>
    `

// div class="pokemon" becomes the parent for pokemonInnerHTML
    pokemonEl.innerHTML = pokemonInnerHTML

    // adds the HTML just created into the container element previously established at the beginning of the document.
    // Additional Note.  Your poke-container needs to already be established within the HTML, otherwise you can not attach the Element that you are creating. In other works, screate small bones and then insert the qualities you are looking for using JavaScript.
    // Fun note, when using the debugger on browser you will not be able to easily determine if the site is created using JavaScript made HTML or natural HTML.
    poke_container.appendChild(pokemonEl)
}


// Remove Previously Constructed Data
const removePokemonCard = (pokemon) => {
    document.getElementById("poke-container").innerHTML=''
}