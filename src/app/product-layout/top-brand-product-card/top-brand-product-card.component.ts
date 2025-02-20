import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductDetails } from '../../model/ecommerce';

@Component({
  selector: 'app-top-brand-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-brand-product-card.component.html',
  styleUrl: './top-brand-product-card.component.scss'
})
export class TopBrandProductCardComponent {
  @Input() carouselItems: ProductDetails[] = [];
  getProductGroups(): any[] {
    const groups = [];
    for (let i = 0; i < this.carouselItems.length; i += 4) {
      groups.push(this.carouselItems.slice(i, i + 4));
    }
    return groups;
  }
}
