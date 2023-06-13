import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-objet',
  templateUrl: './menu-objet.component.html',
  styleUrls: ['./menu-objet.component.css']
})
export class MenuObjetComponent implements OnInit {
  
boutonPotion = document.getElementById('potion');
boutonPotionSuper = document.getElementById('potionSuper');
boutonPotionMax = document.getElementById('potionMax');
boutonAnnulerObjet = document.getElementById('cancelObjet');

  constructor() { }

  ngOnInit(): void {
  }

}
