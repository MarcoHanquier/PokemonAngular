import { Component, OnInit } from '@angular/core';
import { BattleComponent } from '../battle/battle.component';

@Component({
  selector: 'app-menu-attaque',
  templateUrl: './menu-attaque.component.html',
  styleUrls: ['./menu-attaque.component.css']
})
export class MenuAttaqueComponent implements OnInit {
 currentAttack = 1;
 random = 1;
 finalDamage = 1;
 critDamage = 1;
 STAB = 1;
 typeEffectiveness = 1;
 burn = 1;
 critTexte = 'Coup critique ! ';
 typeTexte = "C'est super efficace ! ";
 valeurBouton = 1;


 boutonPokemonAttaque1 = document.getElementById('attaque1');
 boutonPokemonAttaque2 = document.getElementById('attaque2');
 boutonPokemonAttaque3 = document.getElementById('attaque3');
 boutonPokemonAttaque4 = document.getElementById('attaque4');
 boutonAnnulerAttaque = document.getElementById('cancelAttaque');
 enemyPokemonPV = document.getElementById('joueurAdversePV');

  constructor(private _battleComponent: BattleComponent) { }

// attack1(){
//   this.currentAttack = 1;
// }

// attack2(){
//   this.currentAttack = 2;
// }

// attack3(){
//   this.currentAttack = 3;
// }

// attack4(){
//   this.currentAttack = 4;
// }

 randomMaths() {
  this.random = Math.floor(Math.random() * (100 - 85 + 1) + 85) / 100; //ajoute un multiplicateur entre 0.85 et 1
}

 STABMaths() {
  //attaque plus puissante si du même élément que le pokemon
  this.STAB = 1;
  if (
    this._battleComponent.pokemonJoueurActuel.element1 == this._battleComponent.attaqueActuelle.element 
    || this._battleComponent.pokemonJoueurActuel.element2 == this._battleComponent.attaqueActuelle.element
    // this._battleComponent.pokemonJoueurActuel.element == this._battleComponent.attaqueActuelle.element || this._battleComponent.pokemonJoueurActuel.element2 == this._battleComponent.attaqueActuelle.element
  ) {
    this.STAB = 1.5;
  } else this.STAB = 1;
}


 typeMaths() {
  // Gère les rapports de puissance entre les éléments. Feu > Plante, etc
  this.typeEffectiveness = 1; // Multiplicateur, attaque efficace = x2 dégâts, attaque peu efficace = x0.5 dégâts, attaque inefficace = 0 dégâts

  // Vérifie le rapport entre l'élément de l'attaque et les deux éléments du Pokemon adverse
  switch (this._battleComponent.attaqueActuelle.element) {
    case 'Normal':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Spectre' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Spectre'
      ) {
        this.typeEffectiveness = 0;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Feu':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Glace' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Insecte' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Glace' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Insecte' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Dragon'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Dragon'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Eau':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Sol'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Sol'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Dragon'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Dragon'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Electrik':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Sol' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Sol'
      ) {
        this.typeEffectiveness = 0;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Vol'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Vol'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Electrik' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Dragon'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Electrik' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Dragon'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Plante':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Sol' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Roche'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Sol' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Roche'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Poison' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Vol' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Insecte' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Dragon' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Poison' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Vol' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Insecte' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Dragon' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      break;

    case 'Glace':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Sol' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Vol' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Dragon'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Sol' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Vol' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Dragon'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Glace' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Glace' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Combat':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Spectre' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Spectre'
      ) {
        this.typeEffectiveness = 0;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Normal' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Glace' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Ténèbres' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Normal' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Glace' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Ténèbres' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Poison' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Vol' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Psy' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Insecte' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Fée'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Poison' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Vol' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Psy' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Insecte' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Fée'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Poison':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = 0;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Fée'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Fée'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Poison' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Sol' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Spectre'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Dragon'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Sol':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Vol' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Vol'
      ) {
        this.typeEffectiveness = 0;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Electrik' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Poison' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Electrik' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Poison' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Insecte'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Insecte'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Vol':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Insecte'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Insecte'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Electrik' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Electrik' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Psy':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Ténèbres' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Ténèbres'
      ) {
        this.typeEffectiveness = 0;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Poison'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Poison'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Psy' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Psy' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Insecte':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Psy' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Ténèbres'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Plante' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Psy' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Ténèbres'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Poison' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Vol' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Spectre' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Fée'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Poison' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Vol' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Spectre' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Fée'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Roche':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Glace' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Vol' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Insecte'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Glace' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Vol' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Insecte'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Sol' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Sol' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Spectre':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Normal' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Normal'
      ) {
        this.typeEffectiveness = 0;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Psy' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Spectre'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Psy' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Spectre'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (this._battleComponent.pokemonJoueurActuel.element1 == 'Ténèbres') {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (this._battleComponent.pokemonJoueurActuel.element2 == 'Ténèbres') {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Dragon':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Fée' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Fée'
      ) {
        this.typeEffectiveness = 0;
      }

      if (this._battleComponent.pokemonJoueurActuel.element1 == 'Dragon') {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (this._battleComponent.pokemonJoueurActuel.element2 == 'Dragon') {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (this._battleComponent.pokemonJoueurActuel.element1 == 'Acier') {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (this._battleComponent.pokemonJoueurActuel.element2 == 'Acier') {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Ténèbres':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Psy' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Spectre'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Psy' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Spectre'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Ténèbres' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Fée'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Ténèbres' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Fée'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Acier':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Glace' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Fée'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Glace' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Roche' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Fée'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Electrik' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Eau' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Electrik' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    case 'Fée':
      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Dragon' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Ténèbres'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Combat' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Dragon' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Ténèbres'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 2;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element1 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Poison' ||
        this._battleComponent.pokemonJoueurActuel.element1 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }

      if (
        this._battleComponent.pokemonJoueurActuel.element2 == 'Feu' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Poison' ||
        this._battleComponent.pokemonJoueurActuel.element2 == 'Acier'
      ) {
        this.typeEffectiveness = this.typeEffectiveness * 0.5;
      }
      break;

    default:
      this.typeEffectiveness = this.typeEffectiveness * 1;
  } //fin switch

  if (this.typeEffectiveness > 1) {
    this.typeTexte = "C'est super efficace !";
  } else if (this.typeEffectiveness < 1) {
    this.typeTexte = "Ce n'est pas très efficace...";
  } else this.typeTexte = '';
}


 burnMaths() {
  // l'attaquant fait moins de dégâts s'il est brûlé, pas implémenté pour l'instant
  if (this._battleComponent.pokemonJoueurActuel.burned == true) {
    (this.burn = 0), 5;
    console.log('Burned !');
  } else this.burn = 1;
}

 finalDamageMaths() {
  // thiscritMaths();
  this.randomMaths();
  this.STABMaths();
  this.typeMaths();
  this.burnMaths();

  if ((this._battleComponent.attaqueActuelle.type = 'physique')) {
    // attaque physique défendue par défense physique
    this.finalDamage =
      ((42 *
        this._battleComponent.attaqueActuelle.damage *
        (this._battleComponent.pokemonJoueurActuel.statAttack /
          this._battleComponent.pokemonJoueurActuel.statDefense)) /
        50 +
        2) * // formule de calcul de dégâts officielle simplifiée
      this.critDamage *
      this.random *
      this.STAB *
      this.typeEffectiveness *
      this.burn;
    if (this.finalDamage < 0) {
      this.finalDamage = 0; // Empêche les pv négatifs
    }
  } else if ((this._battleComponent.attaqueActuelle.type = 'spéciale')) {
    // attaque spéciale défendue par défense spéciale
    this.finalDamage =
      ((42 *
        this._battleComponent.attaqueActuelle.damage *
        (this._battleComponent.pokemonJoueurActuel.statSpAttack /
          this._battleComponent.pokemonJoueurActuel.statSpDefense)) /
        50 +
        2) *
      this.critDamage *
      this.random *
      this.STAB *
      this.typeEffectiveness *
      this.burn;
    if (this.finalDamage < 0) {
      this.finalDamage = 0;
    }
  } else if ((this._battleComponent.attaqueActuelle.type = 'statut')) {
    this.finalDamage = 0;
  }
  this._battleComponent.joueurAdverse.pokemonActuel.pv = this._battleComponent.joueurAdverse.pokemonActuel.pv - this.finalDamage;
  // this._battleComponent.enemyPokemonPV.value = this._battleComponent.joueurAdverse.pokemonActuel.pv;

  // if (this._battleComponent.currentPlayer === 1) {
  //   this._battleComponent.joueurAdverse.pokemonActuel.pv = this._battleComponent.joueurAdverse.pokemonActuel.pv - this.finalDamage;
  //   // joueurAdverse.pokemonActuel.PVp2 =
  //   //   joueurAdverse.pokemonActuel.PVp2 - finalDamage;

  //   this_battleComponent.enemyPokemonPV.value = this._battleComponent.joueurAdverse.pokemonActuel.pv;
  // } else if (this._battleComponent.currentPlayer === 2) {
  //   joueurAdverse.pokemonActuel.PVp1 =
  //     joueurAdverse.pokemonActuel.PVp1 - finalDamage;
  //   enemyPokemonPV.value = joueurAdverse.pokemonActuel.PVp1;
  // }

  // if (enemyPokemonPV.value < (enemyPokemonPV.PVmax*70)/100) {
  //   // progress::-webkit-progress-value.style.backgroundColor = "red";
  //   // enemyPokemonPV.value = joueurAdverse.pokemonActuel.PVp2;
  //   // enemyPokemonPV.value.style.backgroundColor = "red";
  //   enemyPokemonPV.classList.toggle("progress-red");
  //   // enemyPokemonPV.style.backgroundColor = "orange";
  // }

  // if (currentPlayer === 1) {
  // } else if (currentPlayer === 2) {
  // }

  console.log('ppP1 ' + this._battleComponent.attaqueActuelle.ppP1);
  console.log('ppP2 ' + this._battleComponent.attaqueActuelle.ppP2);
  if (this.finalDamage > 0) {
    console.log(
      this._battleComponent.pokemonJoueurActuel.name +
        ' attaque ' +
        this._battleComponent.attaqueActuelle.name +
        ' ! ' +
        this.critTexte +
        this.typeTexte
    );
  } else {
    console.log(
      this._battleComponent.pokemonJoueurActuel.name +
        ' attaque ' +
        this._battleComponent.attaqueActuelle.name +
        " ! C'est complètement inefficace..."
    );
  }
}


  ngOnInit(): void {
  }

}
