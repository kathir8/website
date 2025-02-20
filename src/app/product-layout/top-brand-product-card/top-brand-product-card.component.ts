import { Component, Input } from '@angular/core';
import { ProductDetails } from '../../model/ecommerce';

@Component({
  selector: 'app-top-brand-product-card',
  standalone: true,
  imports: [],
  templateUrl: './top-brand-product-card.component.html',
  styleUrl: './top-brand-product-card.component.scss'
})
export class TopBrandProductCardComponent {
  @Input() product: ProductDetails = new ProductDetails();
}
