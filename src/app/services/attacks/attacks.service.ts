import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iattacks } from './attacks';

@Injectable({
  providedIn: 'root',
})
export class AttacksService {
  private _url: string = '/assets/data/attacks.json';

  currentAttackPlayer1 = 0;
  currentAttackPlayer2 = 0;

  flammeche = 0;
  ecume = 1;
  eclair = 2;
  ultralaser = 3;


  constructor(private http: HttpClient) {}

  getAttacks(): Observable<Iattacks[]> {
    return this.http.get<Iattacks[]>(this._url);
  }
}




// export interface Iattacks {
//   ID: number;
//   name: string;
//   damage: string;
//   type: string;
//   precision: number;
//   pp: number;
//   description: string;
// }
