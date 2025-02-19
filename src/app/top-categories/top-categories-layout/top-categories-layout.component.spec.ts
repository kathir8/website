import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCategoriesLayoutComponent } from './top-categories-layout.component';

describe('TopCategoriesLayoutComponent', () => {
  let component: TopCategoriesLayoutComponent;
  let fixture: ComponentFixture<TopCategoriesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCategoriesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCategoriesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
