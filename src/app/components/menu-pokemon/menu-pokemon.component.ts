import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-pokemon',
  templateUrl: './menu-pokemon.component.html',
  styleUrls: ['./menu-pokemon.component.css']
})
export class MenuPokemonComponent implements OnInit {


  boutonPokemon1 = document.getElementById('pokemon1');
  boutonPokemon2 = document.getElementById('pokemon2');
  boutonPokemon3 = document.getElementById('pokemon3');
  boutonPokemon4 = document.getElementById('pokemon4');
  boutonPokemon5 = document.getElementById('pokemon5');
  boutonPokemon6 = document.getElementById('pokemon6');
  boutonAnnulerPokemon = document.getElementById('cancelPokemon');

  constructor() { }

  ngOnInit(): void {
  }

}
