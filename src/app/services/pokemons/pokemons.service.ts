import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ipokemons } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private _url: string = '/assets/data/pokemons.json';

  currentPokemonPlayer1 = 0;
  currentPokemonPlayer2 = 0;

  pokemon1 = 0;
  pikachu = 0;
  dracaufeu = 1;
  florizarre = 2;
  tortank = 3;
  nosferalto = 4;
  alakazam = 5;
  ectoplasma = 6;
  leviator = 7;
  mackogneur = 8;
  papillusion = 9;
  dracolosse = 10;

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

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Ipokemons[]> {
    return this.http.get<Ipokemons[]>(this._url);
  }
}
