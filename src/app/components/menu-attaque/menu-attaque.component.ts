import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-attaque',
  templateUrl: './menu-attaque.component.html',
  styleUrls: ['./menu-attaque.component.css']
})
export class MenuAttaqueComponent implements OnInit {
 currentAttack = 1;
  constructor() { }

attack1(){
  this.currentAttack = 1;
}

attack2(){
  this.currentAttack = 1;
}

attack3(){
  this.currentAttack = 1;
}

attack4(){
  this.currentAttack = 1;
}



  ngOnInit(): void {
  }

}
