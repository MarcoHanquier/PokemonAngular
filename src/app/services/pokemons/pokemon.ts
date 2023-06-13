import { Attack } from "src/app/components/attack";
import { AttacksService } from "../attacks/attacks.service";

export interface Ipokemons {

    ID: number;
    name: string;
    pv: number;
    pvMax: number;
    element1: string;
    element2: string;
    attack1: Attack;
    attack2: Attack;
    attack3: Attack;
    attack4: Attack;
    protection: boolean;
    burned: boolean;
    poisoned: boolean;
    sleep: boolean;
    paralysed: boolean;
    level: number;
    statAttack: number;
    statDefense: number;
    statSpAttack: number;
    statSpDefense: number;
    statSpeed: number;
    imageFront: string;
    imageBack: string;
    thumbnail: string;




  }


//   const mewtwo: Ipokemons = {
//     ID: 1,
//     name: "Mewtwo",
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


    // private ID: number;
    // private name: string;
    // private attack1: string;
    // private attack2: string;
    // private attack3: string;
    // private attack4: string;
    // private type1: string;
    // private type2: string;
    // private level: number;
    // private pv: number;
    // private statAttack: number;
    // private statDefense: number;
    // private statSpAttack: number;
    // private statSpDefense: number;
    // private statSpeed: number;
    // private protection: boolean;
    // private burned: boolean;

    // constructor(_ID: number, _name: string, _attack1: string, _attack2: string, _attack3: string, _attack4: string, _type1: string, _type2: string, _level: number, _pv: number,
    //      _statAttack: number, _statDefense: number, _statSpAttack: number, _statSpDefense: number, _statSpeed: number, _protection: boolean, _burned: boolean,) {  
    //     this.ID = _ID;
    //     this.name = _name;
    //     this.attack1 = _attack1;
    //     this.attack2 = _attack2;
    //     this.attack3 = _attack3;
    //     this.attack4 = _attack4;
    //     this.type1 = _type1;
    //     this.type2 = _type2;
    //     this.level = _level;
    //     this.pv = _pv;
    //     this.statAttack = _statAttack;
    //     this.statDefense = _statDefense;
    //     this.statSpAttack = _statSpAttack;
    //     this.statSpDefense = _statSpDefense;
    //     this.statSpeed = _statSpeed;
    //     this.protection = _protection;
    //     this.burned = _burned;
    // }
    // getArmors(): Observable<Iarmors[]> {
    //     return this.http.get<Iarmors[]>(this._url);
    //   }


//   const pikachu: Pokemon =  {
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
// };