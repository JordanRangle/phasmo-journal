import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostDetailComponent } from './ghost-detail.component';

describe('GhostDetailComponent', () => {
  let component: GhostDetailComponent;
  let fixture: ComponentFixture<GhostDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
