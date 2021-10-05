import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuijaComponent } from './ouija.component';

describe('OuijaComponent', () => {
  let component: OuijaComponent;
  let fixture: ComponentFixture<OuijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
