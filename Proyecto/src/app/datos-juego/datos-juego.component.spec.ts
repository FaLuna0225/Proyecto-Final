import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosJuegoComponent } from './datos-juego.component';

describe('DatosJuegoComponent', () => {
  let component: DatosJuegoComponent;
  let fixture: ComponentFixture<DatosJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
