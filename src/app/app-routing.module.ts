import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuAttaqueComponent } from './components/menu-attaque/menu-attaque.component';
import { MenuObjetComponent } from './components/menu-objet/menu-objet.component';
import { MenuPokemonComponent } from './components/menu-pokemon/menu-pokemon.component';

const routes: Routes = [
{ path: '', component: MenuComponent },
{ path: 'attack', component: MenuAttaqueComponent },
{ path: 'object', component: MenuObjetComponent },
{ path: 'pokemon', component: MenuPokemonComponent },
{ path: 'menu', component: MenuComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
