//create pokmeon class and push info

class Pokemon {
	constructor(pokemon){
      this.pokemon = pokemon;
		axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}/`)
		.then((response) => {
        let pokeInfo = response.data;
        pokeDex.push(pokeInfo);
        pokeDex.sort(function (a, b) {
          return a.id - b.id;
        });
    })
	}
}

// trainer class will take, return, and get pokemon

class Trainer {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }
  all() {
    return this.pokemon;
  }
  get(name) {
    for(let i = 0; i < this.pokemon.length; i++) {
      if(name === this.pokemon[i].name) {
        return this.pokemon[i];
      }
    }
  }
}

//variables defined through classes

let vapPoke = new Pokemon(134);
let joltPoke = new Pokemon(135);
let flarePoke = new Pokemon(136);
let pokeDex = [];

let l33t = new Trainer(pokeDex);


//changes visible pokemon on screen

function changePokemon(id){
  let pokeTarget = document.querySelector("#poke-name");
  pokeTarget.innerHTML = pokeDex[id].name;
  let imgTarget = document.querySelector("#poke-image");
  imgTarget.src = "images/"+pokeDex[id].name+".png";
  let hpTarget = document.querySelector("#hp");
  let newHp = pokeDex[id].stats[5].base_stat;
  hpTarget.innerHTML = `HP: ${newHp}`;
  let atkTarget = document.querySelector("#attack");
  let newAtk = pokeDex[id].stats[4].base_stat;
  atkTarget.innerHTML = `ATK: ${newAtk}`;
  let defTarget = document.querySelector("#defense");
  let newDef = pokeDex[id].stats[3].base_stat;
  defTarget.innerHTML = `DEF: ${newDef}`;
  let ablOne = pokeDex[id].abilities[0].ability.name;
  let ablTwo= pokeDex[id].abilities[1].ability.name;
  let ablOneTarg = document.querySelector("#ab1");
  ablOneTarg.innerHTML = ablOne;
  let ablTwoTarg = document.querySelector("#ab2");
  ablTwoTarg.innerHTML = ablTwo;
}

//function puts individual pokemon/stats on screen

function vaporeonFunc() {
  changePokemon(0);
  var imgInfo = document.querySelector(".image-info");
  imgInfo.style.display = "block";
}

function jolteonFunc() {
  changePokemon(1);
  var imgInfo = document.querySelector(".image-info");
  imgInfo.style.display = "block";
}

function flareonFunc() {
  changePokemon(2);
  var imgInfo = document.querySelector(".image-info");
  imgInfo.style.display = "block";
}

//targets items to change pokemon

var vapTarg = document.querySelector("#poke1");
vapTarg.addEventListener("click", vaporeonFunc);
var joltTarg = document.querySelector("#poke3");
joltTarg.addEventListener("click", jolteonFunc);
var flarTarg = document.querySelector("#poke2");
flarTarg.addEventListener("click", flareonFunc);

var ablTarg = document.querySelector("#abilities");
ablTarg.addEventListener("click", dispAbl);

var pkmnMenu = document.querySelector(".menu");
pkmnMenu.addEventListener("click", pokeMenu);

function dispAbl() {
  let targ = document.querySelector("#abl-list");
    if (targ.style.visibility === "hidden") {
      targ.style.visibility = "visible";
    } else {
      targ.style.visibility = "hidden";
    }
}

//main pkmn menu will reveal/take away individual pokemon

function pokeMenu() {
  let targ = document.querySelector(".pokemon");
    if (targ.style.display === "block") {
      targ.style.display = "none";
    } else {
      targ.style.display = "block";
    }
}


// POKEMON INFO
// base hp: response.data.stats[5].base_stat
// base atk: response.data.stats[4].base_stat
// base df: response.data.stats[3].base_stat;
// abilities: response.data.abilities followed by [0] or [1] and .ability and .name
// name of pokemon: response.data.forms[0].name
