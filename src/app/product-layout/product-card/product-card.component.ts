import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RatingComponent } from "../../rating/rating.component";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() carouselItems: any[] = [];
  getProductGroups(): any[] {
    const groups = [];
    for (let i = 0; i < this.carouselItems.length; i += 4) {
      groups.push(this.carouselItems.slice(i, i + 4));
    }
    return groups;
  }
}
