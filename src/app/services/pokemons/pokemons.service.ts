import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AttacksService } from '../attacks/attacks.service';

import { Ipokemons } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private _url: string = '/assets/data/pokemons.json';

  // currentPokemonPlayer1 = 0;
  // currentPokemonPlayer2 = 0;

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


  //  pokemon_Pikachu = {
  //   id: 1,
  //   name: 'Pikachu',
  //   pv: 530,
  //   pvMax: 530,
  //   type1: 'Electrik',
  //   type2: '',
  //   attaque1: this._attacksService.attaque_Eclair,
  //   attaque2: this._attacksService.attaque_Souplesse,
  //   attaque3: this._attacksService.attaque_Tonnerre,
  //   attaque4: this._attacksService.attaque_FatalFoudre,
  //   protection: false,
  //   burned: false,
  //   poisoned: false,
  //   sleep: false,
  //   paralysed: false,
  //   level:100,
  //   statAttaque: 145,
  //   statDéfense: 95,
  //   statSpAttaque: 135,
  //   statSpDéfense: 115,
  //   statVitesse: 215,
  //   imageFront:
  //     'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
  //   imageBack:
  //     'https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif',
  //   thumbnail:
  //     'https://img.pokemondb.net/sprites/sword-shield/normal/pikachu.png',
  // };

  // pokemon_Florizarre = {
  //   name: 'Florizarre',
  //   PV: 710,
  //   PVmax: 710,
  //   PVp1: 710,
  //   PVp2: 710,
  //   element: 'Plante',
  //   element2: 'Poison',
  //   attaque1: this._attacksService.attaque_Charge,
  //   attaque2: this._attacksService.attaque_FouetLianes,
  //   attaque3: this._attacksService.attaque_PoudreDodo,
  //   attaque4: this._attacksService.attaque_Ultralaser,
  //   protection: false,
  //   burned: false,
  //   statAttaque: 199,
  //   statDéfense: 201,
  //   statSpAttaque: 235,
  //   statSpDéfense: 235,
  //   statVitesse: 195,
  //   imageFront:
  //     'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif',
  //   imageBack:
  //     'https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur.gif',
  //   thumbnail:
  //     'https://img.pokemondb.net/sprites/sword-shield/normal/venusaur.png',
  // };

  //  mewtwo: Ipokemons = {
  //   ID: 1,
  //   name: "Mewtwo",
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
  // }

  constructor(private http: HttpClient, private _attacksService: AttacksService) {}

  getPokemons(): Observable<Ipokemons[]> {
    return this.http.get<Ipokemons[]>(this._url);
  }
}
