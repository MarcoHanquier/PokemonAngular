import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuObjetComponent } from './menu-objet.component';

describe('MenuObjetComponent', () => {
  let component: MenuObjetComponent;
  let fixture: ComponentFixture<MenuObjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuObjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
