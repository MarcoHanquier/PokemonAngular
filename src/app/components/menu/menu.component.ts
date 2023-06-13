import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  boutonAttaque = document.getElementById('attaque');
  boutonObjet = document.getElementById('utiliserObjet');
  boutonPokemon = document.getElementById('changerPokemon');
  boutonMenu = document.getElementById('menuBouton');
  
  constructor() { }

  ngOnInit(): void {
  }

}
