import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBrandProductCardComponent } from './top-brand-product-card.component';

describe('TopBrandProductCardComponent', () => {
  let component: TopBrandProductCardComponent;
  let fixture: ComponentFixture<TopBrandProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBrandProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBrandProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
