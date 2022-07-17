import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionJuegosModaComponent } from './seccion-juegos-moda.component';

describe('SeccionJuegosModaComponent', () => {
  let component: SeccionJuegosModaComponent;
  let fixture: ComponentFixture<SeccionJuegosModaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionJuegosModaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionJuegosModaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
