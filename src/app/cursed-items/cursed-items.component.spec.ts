import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursedItemsComponent } from './cursed-items.component';

describe('CursedItemsComponent', () => {
  let component: CursedItemsComponent;
  let fixture: ComponentFixture<CursedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
