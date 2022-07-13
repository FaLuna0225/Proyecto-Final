import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosModaComponent } from './juegos-moda.component';

describe('JuegosModaComponent', () => {
  let component: JuegosModaComponent;
  let fixture: ComponentFixture<JuegosModaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosModaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosModaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
