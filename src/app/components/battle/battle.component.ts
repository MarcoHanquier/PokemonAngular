import { Component, OnInit } from '@angular/core';
import { Ipokemons } from '../../services/pokemons/pokemon';
import { Player } from '../player';
import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';
import { AttacksService } from 'src/app/services/attacks/attacks.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
})
export class BattleComponent implements OnInit {
  public pokemons = [] as any[];
  public attacks = [] as any[];
  // public player1 = Player.player1;
  name = '';
  // pokemon1 = 0;
  // pikachu = 0;
  // dracaufeu = 1;
  // florizarre = 2;
  // tortank = 3;
  // nosferalto = 4;
  // alakazam = 5;
  // ectoplasma = 6;
  // leviator = 7;
  // mackogneur = 8;
  // papillusion = 9;
  // dracolosse = 10;

  public player1 = new Player(
    'Sacha',
    6,
    this._pokemonsService.pikachu,
    this._pokemonsService.dracaufeu,
    this._pokemonsService.florizarre,
    this._pokemonsService.tortank,
    this._pokemonsService.papillusion,
    this._pokemonsService.alakazam
  );

  public player2 = new Player(
    'Giovanni',
    6,
    this._pokemonsService.ectoplasma,
    this._pokemonsService.leviator,
    this._pokemonsService.dracolosse,
    this._pokemonsService.mackogneur,
    this._pokemonsService.nosferalto,
    this._pokemonsService.alakazam
  );

  getName() {
    // this.name = this.player1.;
    this.name = this.pokemons[0].name;
    // console.log(this.player1);
    // console.log(this.pikachu);
    // console.log(this.player1);
    // console.log(this.pokemons);
    // console.log(
    //   this.pokemons[this._pokemonsService.currentPokemonPlayer1].name
    // );
    // console.log(this._pokemonsService.mewtwo);
    // console.log(this.pokemons[this.player1.pokemon1].name);
    // console.log(this.pokemons[this.player1.pokemon2].name);
    // console.log(this.pokemons[this.player1.pokemon3].name);
    console.log(this.pokemons[this.player1.pokemon4].attack3);
    console.log(this.pokemons[this.player1.pokemon1].attack1);
    console.log(this.attacks[this._pokemonsService.currentPokemonPlayer1].ID);

    this._pokemonsService.currentPokemonPlayer1 = 9;
    // console.log(Player.getName())
    // console.log(this.player1.pokemon1.attack1);
  }

  constructor(private _pokemonsService: PokemonsService, private _attacksService: AttacksService) {}

  ngOnInit(): void {
    this._pokemonsService
      .getPokemons()
      .subscribe((data) => (this.pokemons = data));

      this._attacksService
      .getAttacks()
      .subscribe((data) => (this.attacks = data));
  }
}

// pikachu = {
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

// dracaufeu: Ipokemons = {

// }

// mewtwo: Ipokemons = {
//     ID: 1,
//     name: "mewtwo",
//     attack1: 'Eclair',
//     attack2: 'Souplesse',
//     attack3: 'Fatal-Foudre',
//     attack4: 'Charge',
//     type1: 'Electrik',
//     type2: '',
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
