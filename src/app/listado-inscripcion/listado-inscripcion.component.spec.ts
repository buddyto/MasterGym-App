import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInscripcionComponent } from './listado-inscripcion.component';

describe('ListadoInscripcionComponent', () => {
  let component: ListadoInscripcionComponent;
  let fixture: ComponentFixture<ListadoInscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoInscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
