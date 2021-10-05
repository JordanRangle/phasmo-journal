import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritBoxComponent } from './spirit-box.component';

describe('SpiritBoxComponent', () => {
  let component: SpiritBoxComponent;
  let fixture: ComponentFixture<SpiritBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiritBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
