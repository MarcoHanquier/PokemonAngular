import { Ipokemons } from '../services/pokemons/pokemon';
import { PokemonsService } from '../services/pokemons/pokemons.service';

export class Player {
  id: number;
  name: string;
  pokemonNumber: number;
  pokemonActuel: Ipokemons;
  pokemon1: Ipokemons;
  pokemon2: Ipokemons;
  pokemon3: Ipokemons;
  pokemon4: Ipokemons;
  pokemon5: Ipokemons;
  pokemon6: Ipokemons;
  pokemonChangeNeeded: false;

  constructor(
    _id: number,
    _name: string,
    _pokemonNumber: number,
    _pokemonActuel: Ipokemons,
    _pokemon1: Ipokemons,
    _pokemon2: Ipokemons,
    _pokemon3: Ipokemons,
    _pokemon4: Ipokemons,
    _pokemon5: Ipokemons,
    _pokemon6: Ipokemons,
    _pokemonChangeNeeded: false
  ) {
    this.id = _id;
    this.name = _name;
    this.pokemonNumber = _pokemonNumber;
    this.pokemonActuel = _pokemonActuel;
    this.pokemon1 = _pokemon1;
    this.pokemon2 = _pokemon2;
    this.pokemon3 = _pokemon3;
    this.pokemon4 = _pokemon4;
    this.pokemon5 = _pokemon5;
    this.pokemon6 = _pokemon6;
    this.pokemonChangeNeeded = _pokemonChangeNeeded;
  }

  // getName(){
  //     return player1;
  // }

  // this._pokemonsService.getPokemons().subscribe(data => (this.pokemons= data));
  // }
}

// const player1 = new Player(
//     'Sacha',
//     6,
//     "Pikachu",
//     'Dracaufeu',
//     'Florizarre',
//     'Léviator',
//     'Papillusion',
//     'Ectoplasma'
//   );

// console.log(player1.getName());

// player1: Player = {
//     name: "Sacha",
//       pokemonNumber: 6,
//       pokemon1: "Pikachu",
//       pokemon2:'Dracaufeu',
//       pokemon3:'Florizarre',
//       pokemon4:'Léviator',
//       pokemon5:'Papillusion',
//       pokemon6:'Ectoplasma'
//   }

// Mewtwo: Ipokemons = {
//   }

// const player1 = new Player(
//     'Sacha',
//     6,
//     _pokemonsService.pokemons[0],
//     'Dracaufeu',
//     'Florizarre',
//     'Léviator',
//     'Papillusion',
//     'Ectoplasma'
//   );

// const pikachu = {
//   ID: 1,
//   name: 'Pikachu',
//   attack1: 'Eclair',
//   attack2: 'Souplesse',
//   attack3: 'Fatal-Foudre',
//   attack4: 'Charge',
//   type1: 'Electrik',
//   type2: '',
//   level: 100,
//   pv: 300,
//   statAttack: 100,
//   statDefense: 100,
//   statSpAttack: 100,
//   statSpDefense: 100,
//   statSpeed: 100,
//   protection: false,
//   burned: false,
// } as Ipokemons;

// private pokemon1: Pokemon = {
//     ID: 1,
//     name: "Pikachu",
//     attack1: "Eclair",
//     attack2: "Souplesse",
//     attack3: "Fatal-Foudre",
//     attack4: "Charge",
//     type1: "Electrik",
//     type2: "",
//     level: 100,
//     pv: 300,
//     statAttack: 100,
//     statDefense: 100,
//     statSpAttack: 100,
//     statSpDefense: 100,
//     statSpeed: 100,
//     protection: false,
//     burned: false,
// }
