import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOuterComponent } from './card-outer.component';

describe('CardOuterComponent', () => {
  let component: CardOuterComponent;
  let fixture: ComponentFixture<CardOuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOuterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
