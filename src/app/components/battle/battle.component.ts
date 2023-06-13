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
  name = '';

box1JoueurAdverse = document.getElementById('box1JoueurAdverse');
box2JoueurAdverse = document.getElementById('box2JoueurAdverse');
box3JoueurAdverse = document.getElementById('box3JoueurAdverse');
box4JoueurAdverse = document.getElementById('box4JoueurAdverse');
box5JoueurAdverse = document.getElementById('box5JoueurAdverse');
box6JoueurAdverse = document.getElementById('box6JoueurAdverse');
box1JoueurActuel = document.getElementById('box1JoueurActuel');
box2JoueurActuel = document.getElementById('box2JoueurActuel');
box3JoueurActuel = document.getElementById('box3JoueurActuel');
box4JoueurActuel = document.getElementById('box4JoueurActuel');
box5JoueurActuel = document.getElementById('box5JoueurActuel');
box6JoueurActuel = document.getElementById('box6JoueurActuel');

currentPokemonImage = document.getElementById('joueurActuelImage');
enemyPokemonImage = document.getElementById('joueurAdverseImage');












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

  pokemon_Pikachu = {
    ID: 1,
    name: 'Pikachu',
    pv: 530,
    pvMax: 530,
    element1: 'Electrik',
    element2: '',
    attack1: this._attacksService.attaque_Eclair,
    attack2: this._attacksService.attaque_Souplesse,
    attack3: this._attacksService.attaque_Tonnerre,
    attack4: this._attacksService.attaque_FatalFoudre,
    protection: false,
    burned: false,
    poisoned: false,
    sleep: false,
    paralysed: false,
    level:100,
    statAttack: 145,
    statDefense: 95,
    statSpAttack: 135,
    statSpDefense: 115,
    statSpeed: 215,
    imageFront:
      'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
    imageBack:
      'https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif',
    thumbnail:
      'https://img.pokemondb.net/sprites/sword-shield/normal/pikachu.png',
  };



  public player1 = new Player(
    1,
    'Sacha',
    6,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,
    false,
  );

  public player2 = new Player(
    2,
    'Giovanni',
    6,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,
    this.pokemon_Pikachu,

    false
  );

  joueurActuelUI = document.getElementById('joueurActuelUI');
  joueurAdverseUI = document.getElementById('joueurAdverseUI');
  currentPokemon = document.getElementById('joueurActuelPokemon');
  enemyPokemon = document.getElementById('joueurAdversePokemon');
  currentPokemonPV = document.getElementById('joueurActuelPV');
  enemyPokemonPV = (<HTMLInputElement>document.getElementById('joueurAdversePV')).value;

  currentPlayer = 1;
  currentPokemonPlayer1 = this.player1.pokemon1;
  currentPokemonPlayer2 = this.player2.pokemon1;

  joueurActuel = this.player1;
  joueurAdverse = this.player2;

  pokemonJoueurActuel = this.currentPokemonPlayer1;
  pokemonJoueurAdverse = this.currentPokemonPlayer2;
  
  attaqueActuelle = this.currentPokemonPlayer1.attack1;

  // let usedPotion = potion;









  // getName() {
    // this.name = this.player1.;
    // this.name = this.pokemons[0].name;
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
    // // console.log(this.pokemons[this.player1.pokemon3].name);
    // console.log(this.pokemons[this.player1.pokemon4].attack3);
    // console.log(this.pokemons[this.player1.pokemon1].attack1);
    // console.log(this.attacks[this._pokemonsService.currentPokemonPlayer1].ID);

    // this._pokemonsService.currentPokemonPlayer1 = 9;
    // console.log(Player.getName())
    // console.log(this.player1.pokemon1.attack1);
  // }

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




// // todo :
// // - gérer altérations d'état
// // - effets attaques
// // - pokemons restants+pokeballs
// // - mettre les variables dans un autre fichier
// // - responsive
// const potion = {
//   name: 'Potion',
//   description: 'Rend 20 PV',
//   pvRendus: 20,
//   quantityP1: 5,
//   quantityP2: 5,
// };

// const potion_super = {
//   name: 'Super Potion',
//   description: 'Rend 50 PV',
//   pvRendus: 50,
//   quantityP1: 3,
//   quantityP2: 3,
// };

// const potion_hyper = {
//   name: 'Hyper Potion',
//   description: 'Rend 200 PV',
//   pvRendus: 200,
//   quantityP1: 1,
//   quantityP2: 1,
// };

// const attaque_Flammeche = {
//   name: 'Flammèche',
//   description: '10% de chance de brûler la cible.',
//   damage: 40,
//   precision: 100,
//   ppP1: 25,
//   ppP2: 25,
//   type: 'spéciale',
//   element: 'Feu',
// };

// const attaque_Ecume = {
//   name: 'Ecume',
//   description: "10% de chance de baisser la Vitesse des cibles d'un niveau.",
//   damage: 20,
//   precision: 100,
//   ppP1: 30,
//   ppP2: 30,
//   type: 'spéciale',
//   element: 'Eau',
// };

// const attaque_Puissance = {
//   name: 'Puissance',
//   description: "Augmente le taux de coups critiques d'un niveau.",
//   damage: 0,
//   precision: 100,
//   ppP1: 30,
//   ppP2: 30,
//   type: 'statut',
//   element: 'Normal',
// };

// const attaque_PoingKarate = {
//   name: 'Poing-Karaté',
//   description: 'Taux de coups critiques +1.',
//   damage: 50,
//   precision: 100,
//   ppP1: 25,
//   ppP2: 25,
//   type: 'physique',
//   element: 'Combat',
// };

// const attaque_CoupCroix = {
//   name: 'Coup croix',
//   description: 'Taux de coups critiques +1.',
//   damage: 100,
//   precision: 80,
//   ppP1: 5,
//   ppP2: 5,
//   type: 'physique',
//   element: 'Combat',
// };

// const attaque_Sacrifice = {
//   name: 'Sacrifice',
//   description:
//     "Attaque 'à contrecoup'. Les dégâts de recul sont équivalents à 1/4 des dégâts infligés à la cible.",
//   damage: 80,
//   precision: 80,
//   ppP1: 25,
//   ppP2: 25,
//   type: 'physique',
//   element: 'Combat',
// };

// const attaque_LanceFlamme = {
//   name: 'Lance-Flamme',
//   description: '10% de chance de brûler la cible.',
//   damage: 95,
//   precision: 100,
//   ppP1: 15,
//   ppP2: 15,
//   type: 'spéciale',
//   element: 'Feu',
// };

// const attaque_Deflagration = {
//   name: 'Déflagration',
//   description: '10% de chance de brûler la cible.',
//   damage: 120,
//   precision: 85,
//   ppP1: 5,
//   ppP2: 5,
//   type: 'spéciale',
//   element: 'Feu',
// };

// const attaque_Hydrocanon = {
//   name: 'Hydrocanon',
//   description: 'Sans effet supplémentaire.',
//   damage: 120,
//   precision: 80,
//   ppP1: 5,
//   ppP2: 5,
//   type: 'spéciale',
//   element: 'Eau',
// };

// const attaque_Ultralaser = {
//   name: 'Ultralaser',
//   description: 'Le lanceur doit se reposer au tour suivant.',
//   damage: 150,
//   precision: 90,
//   ppP1: 5,
//   ppP2: 5,
//   type: 'physique',
//   element: 'Normal',
// };

// const attaque_Ouragan = {
//   name: 'Ouragan',
//   description: "20% de chances d'apeurer les cibles.",
//   damage: 40,
//   precision: 100,
//   ppP1: 20,
//   ppP2: 20,
//   type: 'spéciale',
//   element: 'Dragon',
// };

// const attaque_FatalFoudre = {
//   name: 'Fatal-Foudre',
//   description: '30% de chance de paralyser la cible.',
//   damage: 120,
//   precision: 70,
//   ppP1: 10,
//   ppP2: 10,
//   type: 'spéciale',
//   element: 'Electrik',
// };

// const attaque_Souplesse = {
//   name: 'Souplesse',
//   description: 'Sans effet supplémentaire.',
//   damage: 80,
//   precision: 75,
//   ppP1: 20,
//   ppP2: 20,
//   type: 'Physique',
//   element: 'Normal',
// };

// const attaque_Hypnose = {
//   name: 'Hypnose',
//   description: 'Endort la cible.',
//   damage: 0,
//   precision: 60,
//   ppP1: 20,
//   ppP2: 20,
//   type: 'statut',
//   element: 'Psy',
// };

// const attaque_PoudreDodo = {
//   name: 'Poudre Dodo',
//   description: 'Endort la cible.',
//   damage: 0,
//   precision: 75,
//   ppP1: 35,
//   ppP2: 35,
//   type: 'statut',
//   element: 'Plante',
// };

// const attaque_PoudreToxik = {
//   name: 'Poudre Toxik',
//   description: 'Empoisonne la cible.',
//   damage: 0,
//   precision: 75,
//   ppP1: 35,
//   ppP2: 35,
//   type: 'statut',
//   element: 'Poison',
// };

// const attaque_Morsure = {
//   name: 'Morsure',
//   description: "30% de chance d'apeurer la cible.",
//   damage: 60,
//   precision: 100,
//   ppP1: 25,
//   ppP2: 25,
//   type: 'spéciale',
//   element: 'Ténèbres',
// };

// const attaque_Vampirisme = {
//   name: 'Vampirisme',
//   description:
//     'Convertit 50% des dégâts infligés à la cible en PV pour le lanceur.',
//   damage: 20,
//   precision: 100,
//   ppP1: 15,
//   ppP2: 15,
//   type: 'physique',
//   element: 'Insecte',
// };

// const attaque_Cruaile = {
//   name: 'Cru-aile',
//   description: 'Sans effet supplémentaire.',
//   damage: 60,
//   precision: 100,
//   ppP1: 35,
//   ppP2: 35,
//   type: 'physique',
//   element: 'Vol',
// };

// const attaque_Tornade = {
//   name: 'Tornade',
//   description:
//     'La puissance est doublée si la cible est dans les airs (Vol et Rebond)',
//   damage: 40,
//   precision: 100,
//   ppP1: 35,
//   ppP2: 35,
//   type: 'physique',
//   element: 'Vol',
// };

// const attaque_Lechouille = {
//   name: 'Léchouille',
//   description: '30% de chance de paralyser la cible.',
//   damage: 20,
//   precision: 100,
//   ppP1: 30,
//   ppP2: 30,
//   type: 'physique',
//   element: 'Spectre',
// };

// const attaque_Tenebres = {
//   name: 'Ténèbres',
//   description: 'Inflige des dégâts équivalents au niveau du lanceur.',
//   damage: 100,
//   precision: 100,
//   ppP1: 15,
//   ppP2: 15,
//   type: 'physique',
//   element: 'Spectre',
// };

// const attaque_Devoreve = {
//   name: 'Dévorêve',
//   description:
//     "Le lanceur mange le rêve de l'ennemi endormi et récupère en PV la moitié des dégâts infligés.",
//   damage: 100,
//   precision: 100,
//   ppP1: 15,
//   ppP2: 15,
//   type: 'spéciale',
//   element: 'Psy',
// };

// const attaque_RafalePsy = {
//   name: 'Rafale Psy',
//   description: '10% de chance de rendre confus la cible.',
//   damage: 65,
//   precision: 100,
//   ppP1: 20,
//   ppP2: 20,
//   type: 'spéciale',
//   element: 'Psy',
// };

// const attaque_Eclair = {
//   name: 'Eclair',
//   description: '10% de chance de paralyser la cible.',
//   damage: 40,
//   precision: 100,
//   ppP1: 30,
//   ppP2: 30,
//   type: 'spéciale',
//   element: 'Electrik',
// };

// const attaque_Charge = {
//   name: 'Charge',
//   description: 'Sans effet supplémentaire.',
//   damage: 35,
//   precision: 95,
//   ppP1: 35,
//   ppP2: 35,
//   type: 'physique',
//   element: 'Normal',
// };

// const attaque_Tonnerre = {
//   name: 'Tonnerre',
//   description: '10% de chance de paralyser la cible.',
//   damage: 95,
//   precision: 100,
//   ppP1: 15,
//   ppP2: 15,
//   type: 'spéciale',
//   element: 'Electrik',
// };

// const attaque_FouetLianes = {
//   name: 'Fouet Lianes',
//   description: 'Sans effet supplémentaire.',
//   damage: 35,
//   precision: 100,
//   ppP1: 10,
//   ppP2: 10,
//   type: 'spéciale',
//   element: 'Plante',
// };

// const pokemon_Pikachu = {
//   name: 'Pikachu',
//   PV: 530,
//   PVmax: 530,
//   PVp1: 530, // PV du pokemon pour le joueur 1
//   PVp2: 530, // PV du pokemon pour le joueur 2
//   element: 'Electrik',
//   element2: '',
//   attaque1: attaque_Eclair,
//   attaque2: attaque_Souplesse,
//   attaque3: attaque_Tonnerre,
//   attaque4: attaque_FatalFoudre,
//   protection: false,
//   burned: false,
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

// const pokemon_Florizarre = {
//   name: 'Florizarre',
//   PV: 710,
//   PVmax: 710,
//   PVp1: 710,
//   PVp2: 710,
//   element: 'Plante',
//   element2: 'Poison',
//   attaque1: attaque_Charge,
//   attaque2: attaque_FouetLianes,
//   attaque3: attaque_PoudreDodo,
//   attaque4: attaque_Ultralaser,
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

// const pokemon_Dracaufeu = {
//   name: 'Dracaufeu',
//   PV: 702,
//   PVmax: 702,
//   PVp1: 702,
//   PVp2: 702,
//   element: 'Feu',
//   element2: 'Vol',
//   attaque1: attaque_Flammeche,
//   attaque2: attaque_Cruaile,
//   attaque3: attaque_LanceFlamme,
//   attaque4: attaque_Deflagration,
//   protection: false,
//   burned: false,
//   statAttaque: 203,
//   statDéfense: 191,
//   statSpAttaque: 253,
//   statSpDéfense: 205,
//   statVitesse: 235,
//   imageFront:
//     'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
//   imageBack:
//     'https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif',
//   thumbnail:
//     'https://img.pokemondb.net/sprites/sword-shield/normal/charizard.png',
// };

// const pokemon_Tortank = {
//   name: 'Tortank',
//   PV: 706,
//   PVmax: 706,
//   PVp1: 706,
//   PVp2: 706,
//   element: 'Eau',
//   element2: '',
//   attaque1: attaque_Charge,
//   attaque2: attaque_Ecume,
//   attaque3: attaque_Morsure,
//   attaque4: attaque_Hydrocanon,
//   protection: false,
//   burned: false,
//   statAttaque: 201,
//   statDéfense: 235,
//   statSpAttaque: 205,
//   statSpDéfense: 245,
//   statVitesse: 191,
//   imageFront:
//     'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif',
//   imageBack:
//     'https://img.pokemondb.net/sprites/black-white/anim/back-normal/blastoise.gif',
//   thumbnail:
//     'https://img.pokemondb.net/sprites/sword-shield/normal/blastoise.png',
// };

// const pokemon_Ectoplasma = {
//   name: 'Ectoplasma',
//   PV: 570,
//   PVmax: 570,
//   PVp1: 570,
//   PVp2: 570,
//   element: 'Spectre',
//   element2: 'Poison',
//   attaque1: attaque_Hypnose,
//   attaque2: attaque_Lechouille,
//   attaque3: attaque_Tenebres,
//   attaque4: attaque_Devoreve,
//   protection: false,
//   burned: false,
//   statAttaque: 121,
//   statDéfense: 112,
//   statSpAttaque: 238,
//   statSpDéfense: 139,
//   statVitesse: 202,
//   imageFront:
//     'https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif',
//   imageBack:
//     'https://img.pokemondb.net/sprites/black-white/anim/back-normal/gengar.gif',
//   thumbnail: 'https://img.pokemondb.net/sprites/sword-shield/normal/gengar.png',
// };

// const pokemon_Nosferalto = {
//   name: 'Nosferalto',
//   PV: 690,
//   PVmax: 690,
//   PVp1: 690,
//   PVp2: 690,
//   element: 'Poison',
//   element2: 'Vol',
//   attaque1: attaque_Vampirisme,
//   attaque2: attaque_Morsure,
//   attaque3: attaque_Cruaile,
//   attaque4: attaque_Tornade,
//   protection: false,
//   burned: false,
//   statAttaque: 195,
//   statDéfense: 175,
//   statSpAttaque: 165,
//   statSpDéfense: 185,
//   statVitesse: 215,
//   imageFront:
//     'https://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif',
//   imageBack:
//     'https://img.pokemondb.net/sprites/black-white/anim/back-normal/golbat.gif',
//   thumbnail: 'https://img.pokemondb.net/sprites/sword-shield/normal/golbat.png',
// };

// const pokemon_Papillusion = {
//   name: 'Papillusion',
//   PV: 630,
//   PVmax: 630,
//   PVp1: 630,
//   PVp2: 630,
//   element: 'Insecte',
//   element2: 'Vol',
//   attaque1: attaque_PoudreToxik,
//   attaque2: attaque_PoudreDodo,
//   attaque3: attaque_Tornade,
//   attaque4: attaque_RafalePsy,
//   protection: false,
//   burned: false,
//   statAttaque: 125,
//   statDéfense: 135,
//   statSpAttaque: 195,
//   statSpDéfense: 195,
//   statVitesse: 175,
//   imageFront:
//     'https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif',
//   imageBack:
//     'https://img.pokemondb.net/sprites/black-white/anim/back-normal/butterfree.gif',
//   thumbnail:
//     'https://img.pokemondb.net/sprites/sword-shield/normal/butterfree.png',
// };

// const pokemon_Dracolosse = {
//   name: 'Dracolosse',
//   PV: 754,
//   PVmax: 754,
//   PVp1: 754,
//   PVp2: 754,
//   element: 'Dragon',
//   element2: 'Vol',
//   attaque1: attaque_Ouragan,
//   attaque2: attaque_Souplesse,
//   attaque3: attaque_Cruaile,
//   attaque4: attaque_Ultralaser,
//   protection: false,
//   burned: false,
//   statAttaque: 303,
//   statDéfense: 225,
//   statSpAttaque: 235,
//   statSpDéfense: 235,
//   statVitesse: 195,
//   imageFront:
//     'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif',
//   imageBack:
//     'https://img.pokemondb.net/sprites/black-white/anim/back-normal/dragonite.gif',
//   thumbnail:
//     'https://img.pokemondb.net/sprites/sword-shield/normal/dragonite.png',
// };

// const pokemon_Leviator = {
//   name: 'Léviator',
//   PV: 770,
//   PVmax: 770,
//   PVp1: 770,
//   PVp2: 770,
//   element: 'Eau',
//   element2: 'Vol',
//   attaque1: attaque_Morsure,
//   attaque2: attaque_Ouragan,
//   attaque3: attaque_Hydrocanon,
//   attaque4: attaque_Ultralaser,
//   protection: false,
//   burned: false,
//   statAttaque: 285,
//   statDéfense: 193,
//   statSpAttaque: 155,
//   statSpDéfense: 235,
//   statVitesse: 197,
//   imageFront:
//     'https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif',
//   imageBack:
//     'https://img.pokemondb.net/sprites/black-white/anim/back-normal/gyarados.gif',
//   thumbnail:
//     'https://img.pokemondb.net/sprites/sword-shield/normal/gyarados.png',
// };

// const pokemon_Mackogneur = {
//   name: 'Mackogneur',
//   PV: 750,
//   PVmax: 750,
//   PVp1: 750,
//   PVp2: 750,
//   element: 'Combat',
//   element2: '',
//   attaque1: attaque_Puissance,
//   attaque2: attaque_PoingKarate,
//   attaque3: attaque_CoupCroix,
//   attaque4: attaque_Sacrifice,
//   protection: false,
//   burned: false,
//   statAttaque: 295,
//   statDéfense: 195,
//   statSpAttaque: 165,
//   statSpDéfense: 205,
//   statVitesse: 145,
//   imageFront:
//     'https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif',
//   imageBack:
//     'https://img.pokemondb.net/sprites/black-white/anim/back-normal/machamp.gif',
//   thumbnail:
//     'https://img.pokemondb.net/sprites/sword-shield/normal/machamp.png',
// };

// const pokemon_Alakazam = {
//   name: 'Alakazam',
//   PV: 610,
//   PVmax: 610,
//   PVp1: 610,
//   PVp2: 610,
//   element: 'Psy',
//   element2: '',
//   attaque1: attaque_Hypnose,
//   attaque2: attaque_Devoreve,
//   attaque3: attaque_Ultralaser,
//   attaque4: attaque_RafalePsy,
//   protection: false,
//   burned: false,
//   statAttaque: 135,
//   statDéfense: 125,
//   statSpAttaque: 305,
//   statSpDéfense: 205,
//   statVitesse: 275,
//   imageFront:
//     'https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif',
//   imageBack:
//     'https://img.pokemondb.net/sprites/black-white/anim/back-normal/alakazam.gif',
//   thumbnail:
//     'https://img.pokemondb.net/sprites/sword-shield/normal/alakazam.png',
// };

// const player1 = {
//   name: 'Blue',
//   id: 1,
//   pokemon: 3, // points de vie du joueur
//   pokemonActuel: pokemon_Pikachu,
//   pokemon1: pokemon_Pikachu,
//   pokemon2: pokemon_Tortank,
//   pokemon3: pokemon_Leviator,
//   pokemon4: pokemon_Mackogneur,
//   pokemon5: pokemon_Ectoplasma,
//   pokemon6: pokemon_Dracaufeu,
//   pokemonChangeNeeded: false,
// };

// const player2 = {
//   name: 'Red',
//   id: 2,
//   pokemon: 3,
//   pokemonActuel: pokemon_Nosferalto,
//   pokemon1: pokemon_Nosferalto,
//   pokemon2: pokemon_Florizarre,
//   pokemon3: pokemon_Alakazam,
//   pokemon4: pokemon_Mackogneur,
//   pokemon5: pokemon_Dracolosse,
//   pokemon6: pokemon_Papillusion,
//   pokemonChangeNeeded: false,
// };

// let currentPlayer = 1;
// let currentPokemonPlayer1 = player1.pokemon1;
// let currentPokemonPlayer2 = player2.pokemon1;
// let joueurActuel = player1;
// let joueurAdverse = player2;
// let pokemonJoueurActuel = currentPokemonPlayer1;
// let pokemonJoueurAdverse = currentPokemonPlayer2;
// let attaqueActuelle = joueurActuel.pokemonActuel.attaque1;
// let finalDamage = 1;
// let critDamage = 1;
// let random = 1;
// let STAB = 1;
// let typeEffectiveness = 1;
// let burn = 1;
// let critTexte = 'Coup critique ! ';
// let typeTexte = "C'est super efficace ! ";
// let valeurBouton = 1;
// let usedPotion = potion;

// const joueurActuelUI = document.getElementById('joueurActuelUI');
// const joueurAdverseUI = document.getElementById('joueurAdverseUI');
// const currentPokemon = document.getElementById('joueurActuelPokemon');
// const enemyPokemon = document.getElementById('joueurAdversePokemon');
// const currentPokemonPV = document.getElementById('joueurActuelPV');
// const enemyPokemonPV = document.getElementById('joueurAdversePV');

// const boutonPokemonAttaque1 = document.getElementById('attaque1');
// const boutonPokemonAttaque2 = document.getElementById('attaque2');
// const boutonPokemonAttaque3 = document.getElementById('attaque3');
// const boutonPokemonAttaque4 = document.getElementById('attaque4');

// const boutonPokemon1 = document.getElementById('pokemon1');
// const boutonPokemon2 = document.getElementById('pokemon2');
// const boutonPokemon3 = document.getElementById('pokemon3');
// const boutonPokemon4 = document.getElementById('pokemon4');
// const boutonPokemon5 = document.getElementById('pokemon5');
// const boutonPokemon6 = document.getElementById('pokemon6');

// const boutonAttaque = document.getElementById('attaque');
// const boutonObjet = document.getElementById('utiliserObjet');
// const boutonPokemon = document.getElementById('changerPokemon');
// const boutonMenu = document.getElementById('menuBouton');

// const boutonPotion = document.getElementById('potion');
// const boutonPotionSuper = document.getElementById('potionSuper');
// const boutonPotionMax = document.getElementById('potionMax');

// const boutonAnnulerAttaque = document.getElementById('cancelAttaque');
// const boutonAnnulerObjet = document.getElementById('cancelObjet');
// const boutonAnnulerPokemon = document.getElementById('cancelPokemon');

// const menuAttaque = document.getElementById('menuAttaque');
// const menuObjet = document.getElementById('menuObjet');
// const menuPokemon = document.getElementById('menuPokemon');

// const currentPokemonImage = document.getElementById('joueurActuelImage');
// const enemyPokemonImage = document.getElementById('joueurAdverseImage');

// const box1JoueurAdverse = document.getElementById('box1JoueurAdverse');
// const box2JoueurAdverse = document.getElementById('box2JoueurAdverse');
// const box3JoueurAdverse = document.getElementById('box3JoueurAdverse');
// const box4JoueurAdverse = document.getElementById('box4JoueurAdverse');
// const box5JoueurAdverse = document.getElementById('box5JoueurAdverse');
// const box6JoueurAdverse = document.getElementById('box6JoueurAdverse');

// const box1JoueurActuel = document.getElementById('box1JoueurActuel');
// const box2JoueurActuel = document.getElementById('box2JoueurActuel');
// const box3JoueurActuel = document.getElementById('box3JoueurActuel');
// const box4JoueurActuel = document.getElementById('box4JoueurActuel');
// const box5JoueurActuel = document.getElementById('box5JoueurActuel');
// const box6JoueurActuel = document.getElementById('box6JoueurActuel');

// boutonAttaque.addEventListener('click', function () {
//   combat();
// });
// boutonObjet.addEventListener('click', function () {
//   choixObjet();
// });
// boutonPokemon.addEventListener('click', function () {
//   choixPokemon();
// });

// boutonAnnulerAttaque.addEventListener('click', function () {
//   combat();
// });
// boutonAnnulerObjet.addEventListener('click', function () {
//   choixObjet();
// });
// boutonAnnulerPokemon.addEventListener('click', function () {
//   choixPokemon();
// });

// boutonPokemon1.addEventListener('click', function () {
//   changePokemon1();
// });

// boutonPokemon2.addEventListener('click', function () {
//   changePokemon2();
// });

// boutonPokemon3.addEventListener('click', function () {
//   changePokemon3();
// });

// boutonPokemon4.addEventListener('click', function () {
//   changePokemon4();
// });

// boutonPokemon5.addEventListener('click', function () {
//   changePokemon5();
// });

// boutonPokemon6.addEventListener('click', function () {
//   changePokemon6();
// });

// boutonPotion.addEventListener('click', function () {
//   useNormalPotion();
// });

// boutonPotionSuper.addEventListener('click', function () {
//   useSuperPotion();
// });

// boutonPotionMax.addEventListener('click', function () {
//   useMaxPotion();
// });

// boutonPokemonAttaque1.addEventListener('click', function () {
//   attaque1();
// });
// boutonPokemonAttaque2.addEventListener('click', function () {
//   attaque2();
// });
// boutonPokemonAttaque3.addEventListener('click', function () {
//   attaque3();
// });
// boutonPokemonAttaque4.addEventListener('click', function () {
//   attaque4();
// });

// function changePokemon1() {
//   joueurActuel.pokemonActuel = joueurActuel.pokemon1;
//   valeurBouton = 1;
//   changePokemon();
//   checkDeadPokemon();
// }

// function changePokemon2() {
//   joueurActuel.pokemonActuel = joueurActuel.pokemon2;
//   valeurBouton = 2;
//   changePokemon();
//   checkDeadPokemon();
// }

// function changePokemon3() {
//   joueurActuel.pokemonActuel = joueurActuel.pokemon3;
//   valeurBouton = 3;
//   changePokemon();
//   checkDeadPokemon();
// }

// function changePokemon4() {
//   joueurActuel.pokemonActuel = joueurActuel.pokemon4;
//   valeurBouton = 4;
//   changePokemon();
//   checkDeadPokemon();
// }

// function changePokemon5() {
//   joueurActuel.pokemonActuel = joueurActuel.pokemon5;
//   valeurBouton = 5;
//   changePokemon();
//   checkDeadPokemon();
// }

// function changePokemon6() {
//   joueurActuel.pokemonActuel = joueurActuel.pokemon6;
//   valeurBouton = 6;
//   changePokemon();
//   checkDeadPokemon();
// }

// function checkDeadPokemon() {
//   if (joueurActuel.pokemonChangeNeeded == true) {
//     console.log(joueurActuel.name + ' doit changer de pokemon ');
//     joueurActuel.pokemonChangeNeeded = false;
//     menuPokemon.classList.remove('visible');
//     menuAttaque.classList.remove('visible');
//     menuObjet.classList.remove('visible');
//     boutonAttaque.classList.add('visible');
//     boutonMenu.classList.add('visible');
//     currentPokemonPV.classList.remove('progress-red');
//   } else {
//     endTurn();
//   }
// }

// function changePokemon() {
//   currentPokemonImage.src = joueurActuel.pokemonActuel.imageBack;
//   currentPokemon.innerText = joueurActuel.pokemonActuel.name;
//   currentPokemonPV.max = joueurActuel.pokemonActuel.PVmax;

//   if (currentPlayer === 1) {
//     currentPokemonPV.value = joueurActuel.pokemonActuel.PVp1;
//   } else if (currentPlayer === 2) {
//     currentPokemonPV.value = joueurActuel.pokemonActuel.PVp2;
//   }
// }

// function critMaths() {
//   critDamage = 1; // multiplicateur de coup critique
//   critChance = Math.floor(Math.random() * 17); //une chance sur 16 de faire un coup critique
//   if (critChance == 16) {
//     critDamage = 1.5;
//     critTexte = 'Coup critique ! ';
//   } else {
//     critDamage = 1;
//     critTexte = '';
//   }
// }

// function randomMaths() {
//   random = Math.floor(Math.random() * (100 - 85 + 1) + 85) / 100; //ajoute un multiplicateur entre 0.85 et 1
// }

// function STABMaths() {
//   //attaque plus puissante si du même élément que le pokemon
//   STAB = 1;
//   if (
//     joueurActuel.pokemonActuel.element == attaqueActuelle.element ||
//     joueurActuel.pokemonActuel.element2 == attaqueActuelle.element
//   ) {
//     STAB = 1.5;
//   } else STAB = 1;
// }

// function typeMaths() {
//   // Gère les rapports de puissance entre les éléments. Feu > Plante, etc
//   typeEffectiveness = 1; // Multiplicateur, attaque efficace = x2 dégâts, attaque peu efficace = x0.5 dégâts, attaque inefficace = 0 dégâts

//   // Vérifie le rapport entre l'élément de l'attaque et les deux éléments du Pokemon adverse
//   switch (attaqueActuelle.element) {
//     case 'Normal':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Spectre' ||
//         joueurAdverse.pokemonActuel.element2 == 'Spectre'
//       ) {
//         typeEffectiveness = 0;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Roche' ||
//         joueurAdverse.pokemonActuel.element == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Roche' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Feu':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Plante' ||
//         joueurAdverse.pokemonActuel.element == 'Glace' ||
//         joueurAdverse.pokemonActuel.element == 'Insecte' ||
//         joueurAdverse.pokemonActuel.element == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Plante' ||
//         joueurAdverse.pokemonActuel.element2 == 'Glace' ||
//         joueurAdverse.pokemonActuel.element2 == 'Insecte' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Feu' ||
//         joueurAdverse.pokemonActuel.element == 'Eau' ||
//         joueurAdverse.pokemonActuel.element == 'Roche' ||
//         joueurAdverse.pokemonActuel.element == 'Dragon'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Feu' ||
//         joueurAdverse.pokemonActuel.element2 == 'Eau' ||
//         joueurAdverse.pokemonActuel.element2 == 'Roche' ||
//         joueurAdverse.pokemonActuel.element2 == 'Dragon'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Eau':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Feu' ||
//         joueurAdverse.pokemonActuel.element == 'Sol'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Feu' ||
//         joueurAdverse.pokemonActuel.element2 == 'Sol'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Eau' ||
//         joueurAdverse.pokemonActuel.element == 'Plante' ||
//         joueurAdverse.pokemonActuel.element == 'Dragon'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Eau' ||
//         joueurAdverse.pokemonActuel.element2 == 'Plante' ||
//         joueurAdverse.pokemonActuel.element2 == 'Dragon'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Electrik':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Sol' ||
//         joueurAdverse.pokemonActuel.element2 == 'Sol'
//       ) {
//         typeEffectiveness = 0;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Eau' ||
//         joueurAdverse.pokemonActuel.element == 'Vol'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Eau' ||
//         joueurAdverse.pokemonActuel.element2 == 'Vol'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Electrik' ||
//         joueurAdverse.pokemonActuel.element == 'Plante' ||
//         joueurAdverse.pokemonActuel.element == 'Dragon'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Electrik' ||
//         joueurAdverse.pokemonActuel.element2 == 'Plante' ||
//         joueurAdverse.pokemonActuel.element2 == 'Dragon'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Plante':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Eau' ||
//         joueurAdverse.pokemonActuel.element == 'Sol' ||
//         joueurAdverse.pokemonActuel.element == 'Roche'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Eau' ||
//         joueurAdverse.pokemonActuel.element2 == 'Sol' ||
//         joueurAdverse.pokemonActuel.element2 == 'Roche'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Feu' ||
//         joueurAdverse.pokemonActuel.element == 'Plante' ||
//         joueurAdverse.pokemonActuel.element == 'Poison' ||
//         joueurAdverse.pokemonActuel.element == 'Vol' ||
//         joueurAdverse.pokemonActuel.element == 'Insecte' ||
//         joueurAdverse.pokemonActuel.element == 'Dragon' ||
//         joueurAdverse.pokemonActuel.element == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Feu' ||
//         joueurAdverse.pokemonActuel.element2 == 'Plante' ||
//         joueurAdverse.pokemonActuel.element2 == 'Poison' ||
//         joueurAdverse.pokemonActuel.element2 == 'Vol' ||
//         joueurAdverse.pokemonActuel.element2 == 'Insecte' ||
//         joueurAdverse.pokemonActuel.element2 == 'Dragon' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       break;

//     case 'Glace':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Plante' ||
//         joueurAdverse.pokemonActuel.element == 'Sol' ||
//         joueurAdverse.pokemonActuel.element == 'Vol' ||
//         joueurAdverse.pokemonActuel.element == 'Dragon'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Plante' ||
//         joueurAdverse.pokemonActuel.element2 == 'Sol' ||
//         joueurAdverse.pokemonActuel.element2 == 'Vol' ||
//         joueurAdverse.pokemonActuel.element2 == 'Dragon'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Feu' ||
//         joueurAdverse.pokemonActuel.element == 'Eau' ||
//         joueurAdverse.pokemonActuel.element == 'Glace' ||
//         joueurAdverse.pokemonActuel.element == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Feu' ||
//         joueurAdverse.pokemonActuel.element2 == 'Eau' ||
//         joueurAdverse.pokemonActuel.element2 == 'Glace' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Combat':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Spectre' ||
//         joueurAdverse.pokemonActuel.element2 == 'Spectre'
//       ) {
//         typeEffectiveness = 0;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Normal' ||
//         joueurAdverse.pokemonActuel.element == 'Glace' ||
//         joueurAdverse.pokemonActuel.element == 'Roche' ||
//         joueurAdverse.pokemonActuel.element == 'Ténèbres' ||
//         joueurAdverse.pokemonActuel.element == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Normal' ||
//         joueurAdverse.pokemonActuel.element2 == 'Glace' ||
//         joueurAdverse.pokemonActuel.element2 == 'Roche' ||
//         joueurAdverse.pokemonActuel.element2 == 'Ténèbres' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Poison' ||
//         joueurAdverse.pokemonActuel.element == 'Vol' ||
//         joueurAdverse.pokemonActuel.element == 'Psy' ||
//         joueurAdverse.pokemonActuel.element == 'Insecte' ||
//         joueurAdverse.pokemonActuel.element == 'Fée'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Poison' ||
//         joueurAdverse.pokemonActuel.element2 == 'Vol' ||
//         joueurAdverse.pokemonActuel.element2 == 'Psy' ||
//         joueurAdverse.pokemonActuel.element2 == 'Insecte' ||
//         joueurAdverse.pokemonActuel.element2 == 'Fée'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Poison':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Acier' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = 0;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Plante' ||
//         joueurAdverse.pokemonActuel.element == 'Fée'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Plante' ||
//         joueurAdverse.pokemonActuel.element2 == 'Fée'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Poison' ||
//         joueurAdverse.pokemonActuel.element == 'Sol' ||
//         joueurAdverse.pokemonActuel.element == 'Roche' ||
//         joueurAdverse.pokemonActuel.element == 'Spectre'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Feu' ||
//         joueurAdverse.pokemonActuel.element2 == 'Eau' ||
//         joueurAdverse.pokemonActuel.element2 == 'Roche' ||
//         joueurAdverse.pokemonActuel.element2 == 'Dragon'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Sol':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Vol' ||
//         joueurAdverse.pokemonActuel.element2 == 'Vol'
//       ) {
//         typeEffectiveness = 0;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Feu' ||
//         joueurAdverse.pokemonActuel.element == 'Electrik' ||
//         joueurAdverse.pokemonActuel.element == 'Poison' ||
//         joueurAdverse.pokemonActuel.element == 'Roche' ||
//         joueurAdverse.pokemonActuel.element == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Feu' ||
//         joueurAdverse.pokemonActuel.element2 == 'Electrik' ||
//         joueurAdverse.pokemonActuel.element2 == 'Poison' ||
//         joueurAdverse.pokemonActuel.element2 == 'Roche' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Plante' ||
//         joueurAdverse.pokemonActuel.element == 'Insecte'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Plante' ||
//         joueurAdverse.pokemonActuel.element2 == 'Insecte'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Vol':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Plante' ||
//         joueurAdverse.pokemonActuel.element == 'Combat' ||
//         joueurAdverse.pokemonActuel.element == 'Insecte'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Plante' ||
//         joueurAdverse.pokemonActuel.element2 == 'Combat' ||
//         joueurAdverse.pokemonActuel.element2 == 'Insecte'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Electrik' ||
//         joueurAdverse.pokemonActuel.element == 'Roche' ||
//         joueurAdverse.pokemonActuel.element == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Electrik' ||
//         joueurAdverse.pokemonActuel.element2 == 'Roche' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Psy':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Ténèbres' ||
//         joueurAdverse.pokemonActuel.element2 == 'Ténèbres'
//       ) {
//         typeEffectiveness = 0;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Combat' ||
//         joueurAdverse.pokemonActuel.element == 'Poison'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Combat' ||
//         joueurAdverse.pokemonActuel.element2 == 'Poison'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Psy' ||
//         joueurAdverse.pokemonActuel.element == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Psy' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Insecte':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Plante' ||
//         joueurAdverse.pokemonActuel.element == 'Psy' ||
//         joueurAdverse.pokemonActuel.element == 'Ténèbres'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Plante' ||
//         joueurAdverse.pokemonActuel.element2 == 'Psy' ||
//         joueurAdverse.pokemonActuel.element2 == 'Ténèbres'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Feu' ||
//         joueurAdverse.pokemonActuel.element == 'Combat' ||
//         joueurAdverse.pokemonActuel.element == 'Poison' ||
//         joueurAdverse.pokemonActuel.element == 'Vol' ||
//         joueurAdverse.pokemonActuel.element == 'Spectre' ||
//         joueurAdverse.pokemonActuel.element == 'Acier' ||
//         joueurAdverse.pokemonActuel.element == 'Fée'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Feu' ||
//         joueurAdverse.pokemonActuel.element2 == 'Combat' ||
//         joueurAdverse.pokemonActuel.element2 == 'Poison' ||
//         joueurAdverse.pokemonActuel.element2 == 'Vol' ||
//         joueurAdverse.pokemonActuel.element2 == 'Spectre' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier' ||
//         joueurAdverse.pokemonActuel.element2 == 'Fée'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Roche':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Feu' ||
//         joueurAdverse.pokemonActuel.element == 'Glace' ||
//         joueurAdverse.pokemonActuel.element == 'Vol' ||
//         joueurAdverse.pokemonActuel.element == 'Insecte'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Feu' ||
//         joueurAdverse.pokemonActuel.element2 == 'Glace' ||
//         joueurAdverse.pokemonActuel.element2 == 'Vol' ||
//         joueurAdverse.pokemonActuel.element2 == 'Insecte'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Combat' ||
//         joueurAdverse.pokemonActuel.element == 'Sol' ||
//         joueurAdverse.pokemonActuel.element == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Combat' ||
//         joueurAdverse.pokemonActuel.element2 == 'Sol' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Spectre':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Normal' ||
//         joueurAdverse.pokemonActuel.element2 == 'Normal'
//       ) {
//         typeEffectiveness = 0;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Psy' ||
//         joueurAdverse.pokemonActuel.element == 'Spectre'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Psy' ||
//         joueurAdverse.pokemonActuel.element2 == 'Spectre'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (joueurAdverse.pokemonActuel.element == 'Ténèbres') {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (joueurAdverse.pokemonActuel.element2 == 'Ténèbres') {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Dragon':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Fée' ||
//         joueurAdverse.pokemonActuel.element2 == 'Fée'
//       ) {
//         typeEffectiveness = 0;
//       }

//       if (joueurAdverse.pokemonActuel.element == 'Dragon') {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (joueurAdverse.pokemonActuel.element2 == 'Dragon') {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (joueurAdverse.pokemonActuel.element == 'Acier') {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (joueurAdverse.pokemonActuel.element2 == 'Acier') {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Ténèbres':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Psy' ||
//         joueurAdverse.pokemonActuel.element == 'Spectre'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Psy' ||
//         joueurAdverse.pokemonActuel.element2 == 'Spectre'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Combat' ||
//         joueurAdverse.pokemonActuel.element == 'Ténèbres' ||
//         joueurAdverse.pokemonActuel.element == 'Fée'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Combat' ||
//         joueurAdverse.pokemonActuel.element2 == 'Ténèbres' ||
//         joueurAdverse.pokemonActuel.element2 == 'Fée'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Acier':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Glace' ||
//         joueurAdverse.pokemonActuel.element == 'Roche' ||
//         joueurAdverse.pokemonActuel.element == 'Fée'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Glace' ||
//         joueurAdverse.pokemonActuel.element2 == 'Roche' ||
//         joueurAdverse.pokemonActuel.element2 == 'Fée'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Feu' ||
//         joueurAdverse.pokemonActuel.element == 'Eau' ||
//         joueurAdverse.pokemonActuel.element == 'Electrik' ||
//         joueurAdverse.pokemonActuel.element == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Feu' ||
//         joueurAdverse.pokemonActuel.element2 == 'Eau' ||
//         joueurAdverse.pokemonActuel.element2 == 'Electrik' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     case 'Fée':
//       if (
//         joueurAdverse.pokemonActuel.element == 'Combat' ||
//         joueurAdverse.pokemonActuel.element == 'Dragon' ||
//         joueurAdverse.pokemonActuel.element == 'Ténèbres'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Combat' ||
//         joueurAdverse.pokemonActuel.element2 == 'Dragon' ||
//         joueurAdverse.pokemonActuel.element2 == 'Ténèbres'
//       ) {
//         typeEffectiveness = typeEffectiveness * 2;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element == 'Feu' ||
//         joueurAdverse.pokemonActuel.element == 'Poison' ||
//         joueurAdverse.pokemonActuel.element == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }

//       if (
//         joueurAdverse.pokemonActuel.element2 == 'Feu' ||
//         joueurAdverse.pokemonActuel.element2 == 'Poison' ||
//         joueurAdverse.pokemonActuel.element2 == 'Acier'
//       ) {
//         typeEffectiveness = typeEffectiveness * 0.5;
//       }
//       break;

//     default:
//       typeEffectiveness = typeEffectiveness * 1;
//   } //fin switch

//   if (typeEffectiveness > 1) {
//     typeTexte = "C'est super efficace !";
//   } else if (typeEffectiveness < 1) {
//     typeTexte = "Ce n'est pas très efficace...";
//   } else typeTexte = '';
// }

// function burnMaths() {
//   // l'attaquant fait moins de dégâts s'il est brûlé, pas implémenté pour l'instant
//   if (joueurActuel.pokemonActuel.burned == true) {
//     (burn = 0), 5;
//     console.log('Burned !');
//   } else burn = 1;
// }

// function finalDamageMaths() {
//   critMaths();
//   randomMaths();
//   STABMaths();
//   typeMaths();
//   burnMaths();

//   if ((attaqueActuelle.type = 'physique')) {
//     // attaque physique défendue par défense physique
//     finalDamage =
//       ((42 *
//         attaqueActuelle.damage *
//         (joueurActuel.pokemonActuel.statAttaque /
//           joueurActuel.pokemonActuel.statDéfense)) /
//         50 +
//         2) * // formule de calcul de dégâts officielle simplifiée
//       critDamage *
//       random *
//       STAB *
//       typeEffectiveness *
//       burn;
//     if (finalDamage < 0) {
//       finalDamage = 0; // Empêche les pv négatifs
//     }
//   } else if ((attaqueActuelle.type = 'spéciale')) {
//     // attaque spéciale défendue par défense spéciale
//     finalDamage =
//       ((42 *
//         attaqueActuelle.damage *
//         (joueurActuel.pokemonActuel.statSpAttaque /
//           joueurActuel.pokemonActuel.statSpDéfense)) /
//         50 +
//         2) *
//       critDamage *
//       random *
//       STAB *
//       typeEffectiveness *
//       burn;
//     if (finalDamage < 0) {
//       finalDamage = 0;
//     }
//   } else if ((attaqueActuelle.type = 'statut')) {
//     finalDamage = 0;
//   }

//   if (currentPlayer === 1) {
//     joueurAdverse.pokemonActuel.PVp2 =
//       joueurAdverse.pokemonActuel.PVp2 - finalDamage;
//     enemyPokemonPV.value = joueurAdverse.pokemonActuel.PVp2;
//   } else if (currentPlayer === 2) {
//     joueurAdverse.pokemonActuel.PVp1 =
//       joueurAdverse.pokemonActuel.PVp1 - finalDamage;
//     enemyPokemonPV.value = joueurAdverse.pokemonActuel.PVp1;
//   }

//   // if (enemyPokemonPV.value < (enemyPokemonPV.PVmax*70)/100) {
//   //   // progress::-webkit-progress-value.style.backgroundColor = "red";
//   //   // enemyPokemonPV.value = joueurAdverse.pokemonActuel.PVp2;
//   //   // enemyPokemonPV.value.style.backgroundColor = "red";
//   //   enemyPokemonPV.classList.toggle("progress-red");
//   //   // enemyPokemonPV.style.backgroundColor = "orange";
//   // }

//   // if (currentPlayer === 1) {
//   // } else if (currentPlayer === 2) {
//   // }

//   console.log('ppP1 ' + attaqueActuelle.ppP1);
//   console.log('ppP2 ' + attaqueActuelle.ppP2);
//   if (finalDamage > 0) {
//     console.log(
//       joueurActuel.pokemonActuel.name +
//         ' attaque ' +
//         attaqueActuelle.name +
//         ' ! ' +
//         critTexte +
//         typeTexte
//     );
//   } else {
//     console.log(
//       joueurActuel.pokemonActuel.name +
//         ' attaque ' +
//         attaqueActuelle.name +
//         " ! C'est complètement inefficace..."
//     );
//   }
// }

// function attaque1() {
//   attaqueActuelle = joueurActuel.pokemonActuel.attaque1;
//   checkPP();
// }

// function attaque2() {
//   attaqueActuelle = joueurActuel.pokemonActuel.attaque2;
//   checkPP();
// }

// function attaque3() {
//   attaqueActuelle = joueurActuel.pokemonActuel.attaque3;
//   checkPP();
// }

// function attaque4() {
//   attaqueActuelle = joueurActuel.pokemonActuel.attaque4;
//   checkPP();
// }

// function checkPrecision() {
//   random = Math.floor(Math.random() * 101);
//   console.log('random ' + random);

//   console.log('Précision attaque ' + attaqueActuelle.precision);

//   if (random <= attaqueActuelle.precision) {
//     finalDamageMaths();
//     endTurn();
//   } else {
//     console.log('Attaque rateé');
//     endTurn();
//   }
// }

// function useNormalPotion() {
//   usedPotion = potion;
//   usePotion();
// }

// function useSuperPotion() {
//   usedPotion = potion_super;
//   usePotion();
// }

// function useMaxPotion() {
//   usedPotion = potion_hyper;
//   usePotion();
// }

// function usePotion() {
//   if (currentPlayer === 1 && usedPotion.quantityP1 > 0) {
//     joueurActuel.pokemonActuel.PVp1 =
//       joueurActuel.pokemonActuel.PVp1 + usedPotion.pvRendus;
//     if (joueurActuel.pokemonActuel.PVp1 > joueurActuel.pokemonActuel.PVmax) {
//       joueurActuel.pokemonActuel.PVp1 = joueurActuel.pokemonActuel.PVmax;
//     }
//     usedPotion.quantityP1 = usedPotion.quantityP1 - 1;
//     endTurn();
//   } else if (currentPlayer === 2 && usedPotion.quantityP2 > 0) {
//     joueurActuel.pokemonActuel.PVp2 =
//       joueurActuel.pokemonActuel.PVp2 + usedPotion.pvRendus;
//     if (joueurActuel.pokemonActuel.PVp2 > joueurActuel.pokemonActuel.PVmax) {
//       joueurActuel.pokemonActuel.PVp2 = joueurActuel.pokemonActuel.PVmax;
//     }
//     usedPotion.quantityP2 = usedPotion.quantityP2 - 1;
//     endTurn();
//   } else {
//     alert('Pas assez de Potions !');
//   }
// }

// function checkPP() {
//   if (currentPlayer === 1 && attaqueActuelle.ppP1 > 0) {
//     joueurActuel.pokemonActuel.ppP1 = attaqueActuelle.ppP1 - 1;
//     checkPrecision();
//   } else if (currentPlayer === 2 && attaqueActuelle.ppP2 > 0) {
//     attaqueActuelle.ppP2 = attaqueActuelle.ppP2 - 1;
//     checkPrecision();
//   } else {
//     alert('Pas assez de PP !');
//   }
// }

// function combat() {
//   // affiche le menu des attaques quand on clique sur Attaquer
//   menuAttaque.classList.toggle('visible');
//   boutonAttaque.classList.toggle('visible');
//   boutonMenu.classList.toggle('visible');

//   boutonPokemonAttaque1.innerHTML = `<span class="tooltiptext">${joueurActuel.pokemonActuel.attaque1.description}</span> ${joueurActuel.pokemonActuel.attaque1.name}`;
//   boutonPokemonAttaque1.classList.add(
//     `${joueurActuel.pokemonActuel.attaque1.element}`
//   );
//   boutonPokemonAttaque2.innerHTML = `<span class="tooltiptext">${joueurActuel.pokemonActuel.attaque2.description}</span> ${joueurActuel.pokemonActuel.attaque2.name}`;
//   boutonPokemonAttaque2.classList.add(
//     `${joueurActuel.pokemonActuel.attaque2.element}`
//   );

//   boutonPokemonAttaque3.innerHTML = `<span class="tooltiptext">${joueurActuel.pokemonActuel.attaque3.description}</span> ${joueurActuel.pokemonActuel.attaque3.name}`;
//   boutonPokemonAttaque3.classList.add(
//     `${joueurActuel.pokemonActuel.attaque3.element}`
//   );

//   boutonPokemonAttaque4.innerHTML = `<span class="tooltiptext">${joueurActuel.pokemonActuel.attaque4.description}</span> ${joueurActuel.pokemonActuel.attaque4.name}`;
//   boutonPokemonAttaque4.classList.add(
//     `${joueurActuel.pokemonActuel.attaque4.element}`
//   );
// }

// function choixPokemon() {
//   // affiche le menu pokemon quand on clique sur Pokemon
//   menuPokemon.classList.toggle('visible');
//   boutonAttaque.classList.toggle('visible');
//   boutonMenu.classList.toggle('visible');
//   boutonPokemon1.innerText = joueurActuel.pokemon1.name;
//   boutonPokemon2.innerText = joueurActuel.pokemon2.name;
//   boutonPokemon3.innerText = joueurActuel.pokemon3.name;
//   boutonPokemon4.innerText = joueurActuel.pokemon4.name;
//   boutonPokemon5.innerText = joueurActuel.pokemon5.name;
//   boutonPokemon6.innerText = joueurActuel.pokemon6.name;
// }

// function changeDeadPokemon() {
//   // affiche le menu pokemon quand on clique sur Pokemon
//   menuPokemon.classList.add('visible');
//   menuAttaque.classList.remove('visible');
//   menuObjet.classList.remove('visible');
//   boutonAttaque.classList.remove('visible');
//   boutonMenu.classList.remove('visible');

//   switch (valeurBouton) {
//     case 1:
//       boutonPokemon1.disabled = true;
//       break;
//     case 2:
//       boutonPokemon2.disabled = true;
//       break;
//     case 3:
//       boutonPokemon3.disabled = true;
//       break;
//     case 4:
//       boutonPokemon4.disabled = true;
//       break;
//     case 5:
//       boutonPokemon5.disabled = true;
//       break;
//     case 6:
//       boutonPokemon6.disabled = true;
//       break;
//   }
//   // boutonPokemon2.disabled = true;
//   // boutonPokemon3.disabled = true;
//   boutonPokemon1.innerText = joueurActuel.pokemon1.name;
//   boutonPokemon2.innerText = joueurActuel.pokemon2.name;
//   boutonPokemon3.innerText = joueurActuel.pokemon3.name;
//   boutonPokemon4.innerText = joueurActuel.pokemon4.name;
//   boutonPokemon5.innerText = joueurActuel.pokemon5.name;
//   boutonPokemon6.innerText = joueurActuel.pokemon6.name;
//   console.log('coucou');
// }

// function choixObjet() {
//   // affiche le menu objets quand on clique sur Objets
//   menuObjet.classList.toggle('visible');
//   boutonAttaque.classList.toggle('visible');
//   boutonMenu.classList.toggle('visible');
// }

// function endTurn() {
//   if (player1.pokemonActuel.PVp1 <= 0) {
//     player1.pokemon = player1.pokemon - 1;
//     player1.pokemonChangeNeeded = true;
//   } else if (player2.pokemonActuel.PVp2 <= 0) {
//     player2.pokemon = player2.pokemon - 1;
//     player2.pokemonChangeNeeded = true;
//   }

//   // vérifie condition de victoire
//   if (joueurAdverse.pokemon <= 0) {
//     gameOver();
//   } else {
//     console.log(`Fin de tour du joueur ${currentPlayer} `);

//     changePlayer();
//   }
// }

// function changePlayer() {
//   if (currentPlayer === 1) {
//     currentPokemonPlayer1 = joueurActuel.pokemonActuel;
//     currentPlayer = 2;
//   } else if (currentPlayer === 2) {
//     currentPokemonPlayer2 = joueurActuel.pokemonActuel;
//     currentPlayer = 1;
//   }

//   // Enlève les classes d'éléments pour pouvoir les réappliquer proprement ensuite
//   boutonPokemonAttaque1.classList.remove(
//     `${joueurActuel.pokemonActuel.attaque1.element}`
//   );
//   boutonPokemonAttaque2.classList.remove(
//     `${joueurActuel.pokemonActuel.attaque2.element}`
//   );
//   boutonPokemonAttaque3.classList.remove(
//     `${joueurActuel.pokemonActuel.attaque3.element}`
//   );
//   boutonPokemonAttaque4.classList.remove(
//     `${joueurActuel.pokemonActuel.attaque4.element}`
//   );

//   if (currentPlayer === 1) {
//     joueurActuel = player1;
//     joueurAdverse = player2;
//     if (joueurActuel.pokemonChangeNeeded == true) {
//       // console.log(joueurActuel.name + " doit changer de pokemon ")
//       changeDeadPokemon();
//     } else {
//       menuPokemon.classList.remove('visible');
//       menuAttaque.classList.remove('visible');
//       menuObjet.classList.remove('visible');
//       boutonAttaque.classList.add('visible');
//       boutonMenu.classList.add('visible');
//     }
//     joueurActuel.pokemonActuel = currentPokemonPlayer1;
//     joueurAdverse.pokemonActuel = currentPokemonPlayer2;

//     //barre de pv UI
//     currentPokemonPV.value = currentPokemonPlayer1.PVp1;
//     enemyPokemonPV.value = currentPokemonPlayer2.PVp2;

//     if (player1.pokemonActuel.PVp1 < (player1.pokemonActuel.PVmax / 100) * 30) {
//       currentPokemonPV.classList.add('progress-red');
//     } else {
//       currentPokemonPV.classList.remove('progress-red');
//     }
//     if (player2.pokemonActuel.PVp2 < (player2.pokemonActuel.PVmax / 100) * 30) {
//       enemyPokemonPV.classList.add('progress-red');
//     } else {
//       enemyPokemonPV.classList.remove('progress-red');
//     }
//   } else if (currentPlayer === 2) {
//     joueurActuel = player2;
//     joueurAdverse = player1;
//     if (joueurActuel.pokemonChangeNeeded == true) {
//       console.log(joueurActuel.name + ' doit changer de pokemon ');
//       changeDeadPokemon();
//     } else {
//       menuPokemon.classList.remove('visible');
//       menuAttaque.classList.remove('visible');
//       menuObjet.classList.remove('visible');
//       boutonAttaque.classList.add('visible');
//       boutonMenu.classList.add('visible');
//     }

//     joueurActuel.pokemonActuel = currentPokemonPlayer2;
//     joueurAdverse.pokemonActuel = currentPokemonPlayer1;

//     currentPokemonPV.value = player2.pokemonActuel.PVp2;
//     enemyPokemonPV.value = player1.pokemonActuel.PVp1;

//     if (player2.pokemonActuel.PVp2 < (player2.pokemonActuel.PVmax / 100) * 30) {
//       currentPokemonPV.classList.add('progress-red');
//     } else {
//       currentPokemonPV.classList.remove('progress-red');
//     }
//     if (player1.pokemonActuel.PVp1 < (player1.pokemonActuel.PVmax / 100) * 30) {
//       enemyPokemonPV.classList.add('progress-red');
//     } else {
//       enemyPokemonPV.classList.remove('progress-red');
//     }
//   }
//   console.log(`Début de tour du joueur ${currentPlayer} `);
//   console.log('pokemons joueur 1 - ' + player1.pokemon);
//   console.log('pokemons joueur 2 - ' + player2.pokemon);
//   currentPokemonPV.max = joueurActuel.pokemonActuel.PVmax;
//   enemyPokemonPV.max = joueurAdverse.pokemonActuel.PVmax;

//   joueurActuelUI.innerText = joueurActuel.name;
//   joueurAdverseUI.innerText = joueurAdverse.name;

//   currentPokemon.innerText = joueurActuel.pokemonActuel.name;
//   enemyPokemon.innerText = joueurAdverse.pokemonActuel.name;

//   currentPokemonImage.src = joueurActuel.pokemonActuel.imageBack;
//   enemyPokemonImage.src = joueurAdverse.pokemonActuel.imageFront;
// }

// function gameOver() {
//   alert(`Victoire de ${joueurActuel.name} !!!`); // Avertit du gagnant, remet les menus à 0 puis lance une nouvelle partie
//   menuPokemon.classList.remove('visible');
//   menuAttaque.classList.remove('visible');
//   menuObjet.classList.remove('visible');
//   boutonAttaque.classList.add('visible');
//   boutonMenu.classList.add('visible');

//   boutonPokemonAttaque1.classList.remove(
//     `${joueurActuel.pokemonActuel.attaque1.element}`
//   );
//   boutonPokemonAttaque2.classList.remove(
//     `${joueurActuel.pokemonActuel.attaque2.element}`
//   );
//   boutonPokemonAttaque3.classList.remove(
//     `${joueurActuel.pokemonActuel.attaque3.element}`
//   );
//   boutonPokemonAttaque4.classList.remove(
//     `${joueurActuel.pokemonActuel.attaque4.element}`
//   );

//   enemyPokemonPV.classList.remove('progress-red');
//   currentPokemonPV.classList.remove('progress-red');

//   init();
// }

// function init() {
//   //initialise/réinitialise le jeu en cas de lancement/nouvelle partie
//   currentPlayer = 1;
//   joueurActuel = player1;
//   joueurAdverse = player2;
//   joueurActuel.pokemonActuel = joueurActuel.pokemon1;
//   joueurAdverse.pokemonActuel = joueurAdverse.pokemon1;
//   currentPokemonPlayer1 = player1.pokemon1;
//   currentPokemonPlayer2 = player2.pokemon1;
//   player1.pokemon = 3;
//   player2.pokemon = 3;
//   player1.pokemon1.PVp1 = player1.pokemon1.PVmax;
//   player1.pokemon2.PVp1 = player1.pokemon2.PVmax;
//   player1.pokemon3.PVp1 = player1.pokemon3.PVmax;
//   player1.pokemon4.PVp1 = player1.pokemon4.PVmax;
//   player1.pokemon5.PVp1 = player1.pokemon5.PVmax;
//   player1.pokemon6.PVp1 = player1.pokemon6.PVmax;

//   player2.pokemon1.PVp2 = player2.pokemon1.PVmax;
//   player2.pokemon2.PVp2 = player2.pokemon2.PVmax;
//   player2.pokemon3.PVp2 = player2.pokemon3.PVmax;
//   player2.pokemon4.PVp2 = player2.pokemon4.PVmax;
//   player2.pokemon5.PVp2 = player2.pokemon5.PVmax;
//   player2.pokemon6.PVp2 = player2.pokemon6.PVmax;

//   currentPokemon.innerText = joueurActuel.pokemonActuel.name;
//   enemyPokemon.innerText = joueurAdverse.pokemonActuel.name;

//   currentPokemonPV.max = joueurActuel.pokemonActuel.PVmax;
//   currentPokemonPV.value = joueurActuel.pokemonActuel.PVp1;
//   enemyPokemonPV.max = joueurAdverse.pokemonActuel.PVmax;
//   enemyPokemonPV.value = joueurAdverse.pokemonActuel.PVp2;

//   joueurActuel.pokemonActuel.imageFront = joueurActuel.pokemon1.imageFront;
//   joueurActuel.pokemonActuel.imageBack = joueurActuel.pokemon1.imageBack;
//   joueurAdverse.pokemonActuel.imageFront = joueurAdverse.pokemon1.imageFront;
//   joueurAdverse.pokemonActuel.imageBack = joueurAdverse.pokemon1.imageBack;

//   currentPokemonImage.src = joueurActuel.pokemonActuel.imageBack;
//   enemyPokemonImage.src = joueurAdverse.pokemonActuel.imageFront;

//   joueurActuelUI.innerText = joueurActuel.name;
//   joueurAdverseUI.innerText = joueurAdverse.name;

//   box1JoueurAdverse.src = joueurAdverse.pokemon1.thumbnail;
//   box2JoueurAdverse.src = joueurAdverse.pokemon2.thumbnail;
//   box3JoueurAdverse.src = joueurAdverse.pokemon3.thumbnail;
//   box4JoueurAdverse.src = joueurAdverse.pokemon4.thumbnail;
//   box5JoueurAdverse.src = joueurAdverse.pokemon5.thumbnail;
//   box6JoueurAdverse.src = joueurAdverse.pokemon6.thumbnail;

//   box1JoueurActuel.src = joueurActuel.pokemon1.thumbnail;
//   box2JoueurActuel.src = joueurActuel.pokemon2.thumbnail;
//   box3JoueurActuel.src = joueurActuel.pokemon3.thumbnail;
//   box4JoueurActuel.src = joueurActuel.pokemon4.thumbnail;
//   box5JoueurActuel.src = joueurActuel.pokemon5.thumbnail;
//   box6JoueurActuel.src = joueurActuel.pokemon6.thumbnail;
// }

// init();
