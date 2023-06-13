import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './components/battle/battle.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogComponent } from './components/log/log.component';
import { MenuAttaqueComponent } from './components/menu-attaque/menu-attaque.component';
import { MenuObjetComponent } from './components/menu-objet/menu-objet.component';
import { MenuPokemonComponent } from './components/menu-pokemon/menu-pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    MenuComponent,
    LogComponent,
    MenuAttaqueComponent,
    MenuObjetComponent,
    MenuPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
