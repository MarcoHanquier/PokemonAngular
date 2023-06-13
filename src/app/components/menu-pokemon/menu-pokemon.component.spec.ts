import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPokemonComponent } from './menu-pokemon.component';

describe('MenuPokemonComponent', () => {
  let component: MenuPokemonComponent;
  let fixture: ComponentFixture<MenuPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
