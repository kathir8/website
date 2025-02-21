import { Component, Input } from '@angular/core';
import { RatingComponent } from "../../rating/rating.component";
import { ProductAllDetails } from '../../model/ecommerce';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product: ProductAllDetails = new ProductAllDetails();
}
