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

   attaque_Flammeche = {
    name: 'Flammèche',
    description: '10% de chance de brûler la cible.',
    damage: 40,
    precision: 100,
    ppP1: 25,
    ppP2: 25,
    type: 'spéciale',
    element: 'Feu',
  };
  
   attaque_Ecume = {
    name: 'Ecume',
    description: "10% de chance de baisser la Vitesse des cibles d'un niveau.",
    damage: 20,
    precision: 100,
    ppP1: 30,
    ppP2: 30,
    type: 'spéciale',
    element: 'Eau',
  };
  
   attaque_Puissance = {
    name: 'Puissance',
    description: "Augmente le taux de coups critiques d'un niveau.",
    damage: 0,
    precision: 100,
    ppP1: 30,
    ppP2: 30,
    type: 'statut',
    element: 'Normal',
  };
  
   attaque_PoingKarate = {
    name: 'Poing-Karaté',
    description: 'Taux de coups critiques +1.',
    damage: 50,
    precision: 100,
    ppP1: 25,
    ppP2: 25,
    type: 'physique',
    element: 'Combat',
  };
  
   attaque_CoupCroix = {
    name: 'Coup croix',
    description: 'Taux de coups critiques +1.',
    damage: 100,
    precision: 80,
    ppP1: 5,
    ppP2: 5,
    type: 'physique',
    element: 'Combat',
  };
  
   attaque_Sacrifice = {
    name: 'Sacrifice',
    description:
      "Attaque 'à contrecoup'. Les dégâts de recul sont équivalents à 1/4 des dégâts infligés à la cible.",
    damage: 80,
    precision: 80,
    ppP1: 25,
    ppP2: 25,
    type: 'physique',
    element: 'Combat',
  };
  
   attaque_LanceFlamme = {
    name: 'Lance-Flamme',
    description: '10% de chance de brûler la cible.',
    damage: 95,
    precision: 100,
    ppP1: 15,
    ppP2: 15,
    type: 'spéciale',
    element: 'Feu',
  };
  
   attaque_Deflagration = {
    name: 'Déflagration',
    description: '10% de chance de brûler la cible.',
    damage: 120,
    precision: 85,
    ppP1: 5,
    ppP2: 5,
    type: 'spéciale',
    element: 'Feu',
  };
  
   attaque_Hydrocanon = {
    name: 'Hydrocanon',
    description: 'Sans effet supplémentaire.',
    damage: 120,
    precision: 80,
    ppP1: 5,
    ppP2: 5,
    type: 'spéciale',
    element: 'Eau',
  };
  
   attaque_Ultralaser = {
    name: 'Ultralaser',
    description: 'Le lanceur doit se reposer au tour suivant.',
    damage: 150,
    precision: 90,
    ppP1: 5,
    ppP2: 5,
    type: 'physique',
    element: 'Normal',
  };
  
   attaque_Ouragan = {
    name: 'Ouragan',
    description: "20% de chances d'apeurer les cibles.",
    damage: 40,
    precision: 100,
    ppP1: 20,
    ppP2: 20,
    type: 'spéciale',
    element: 'Dragon',
  };
  
   attaque_FatalFoudre = {
    name: 'Fatal-Foudre',
    description: '30% de chance de paralyser la cible.',
    damage: 120,
    precision: 70,
    ppP1: 10,
    ppP2: 10,
    type: 'spéciale',
    element: 'Electrik',
  };
  
   attaque_Souplesse = {
    name: 'Souplesse',
    description: 'Sans effet supplémentaire.',
    damage: 80,
    precision: 75,
    ppP1: 20,
    ppP2: 20,
    type: 'Physique',
    element: 'Normal',
  };
  
   attaque_Hypnose = {
    name: 'Hypnose',
    description: 'Endort la cible.',
    damage: 0,
    precision: 60,
    ppP1: 20,
    ppP2: 20,
    type: 'statut',
    element: 'Psy',
  };
  
   attaque_PoudreDodo = {
    name: 'Poudre Dodo',
    description: 'Endort la cible.',
    damage: 0,
    precision: 75,
    ppP1: 35,
    ppP2: 35,
    type: 'statut',
    element: 'Plante',
  };
  
   attaque_PoudreToxik = {
    name: 'Poudre Toxik',
    description: 'Empoisonne la cible.',
    damage: 0,
    precision: 75,
    ppP1: 35,
    ppP2: 35,
    type: 'statut',
    element: 'Poison',
  };
  
   attaque_Morsure = {
    name: 'Morsure',
    description: "30% de chance d'apeurer la cible.",
    damage: 60,
    precision: 100,
    ppP1: 25,
    ppP2: 25,
    type: 'spéciale',
    element: 'Ténèbres',
  };
  
   attaque_Vampirisme = {
    name: 'Vampirisme',
    description:
      'Convertit 50% des dégâts infligés à la cible en PV pour le lanceur.',
    damage: 20,
    precision: 100,
    ppP1: 15,
    ppP2: 15,
    type: 'physique',
    element: 'Insecte',
  };
  
   attaque_Cruaile = {
    name: 'Cru-aile',
    description: 'Sans effet supplémentaire.',
    damage: 60,
    precision: 100,
    ppP1: 35,
    ppP2: 35,
    type: 'physique',
    element: 'Vol',
  };
  
   attaque_Tornade = {
    name: 'Tornade',
    description:
      'La puissance est doublée si la cible est dans les airs (Vol et Rebond)',
    damage: 40,
    precision: 100,
    ppP1: 35,
    ppP2: 35,
    type: 'physique',
    element: 'Vol',
  };
  
   attaque_Lechouille = {
    name: 'Léchouille',
    description: '30% de chance de paralyser la cible.',
    damage: 20,
    precision: 100,
    ppP1: 30,
    ppP2: 30,
    type: 'physique',
    element: 'Spectre',
  };
  
   attaque_Tenebres = {
    name: 'Ténèbres',
    description: 'Inflige des dégâts équivalents au niveau du lanceur.',
    damage: 100,
    precision: 100,
    ppP1: 15,
    ppP2: 15,
    type: 'physique',
    element: 'Spectre',
  };
  
   attaque_Devoreve = {
    name: 'Dévorêve',
    description:
      "Le lanceur mange le rêve de l'ennemi endormi et récupère en PV la moitié des dégâts infligés.",
    damage: 100,
    precision: 100,
    ppP1: 15,
    ppP2: 15,
    type: 'spéciale',
    element: 'Psy',
  };
  
   attaque_RafalePsy = {
    name: 'Rafale Psy',
    description: '10% de chance de rendre confus la cible.',
    damage: 65,
    precision: 100,
    ppP1: 20,
    ppP2: 20,
    type: 'spéciale',
    element: 'Psy',
  };
  
   attaque_Eclair = {
    name: 'Eclair',
    description: '10% de chance de paralyser la cible.',
    damage: 40,
    precision: 100,
    ppP1: 30,
    ppP2: 30,
    type: 'spéciale',
    element: 'Electrik',
  };
  
   attaque_Charge = {
    name: 'Charge',
    description: 'Sans effet supplémentaire.',
    damage: 35,
    precision: 95,
    ppP1: 35,
    ppP2: 35,
    type: 'physique',
    element: 'Normal',
  };
  
   attaque_Tonnerre = {
    name: 'Tonnerre',
    description: '10% de chance de paralyser la cible.',
    damage: 95,
    precision: 100,
    ppP1: 15,
    ppP2: 15,
    type: 'spéciale',
    element: 'Electrik',
  };
  
   attaque_FouetLianes = {
    name: 'Fouet Lianes',
    description: 'Sans effet supplémentaire.',
    damage: 35,
    precision: 100,
    ppP1: 10,
    ppP2: 10,
    type: 'spéciale',
    element: 'Plante',
  };


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
