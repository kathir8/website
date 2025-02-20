import { Component, Input } from '@angular/core';
import { MultiCarouselComponent } from "../multi-carousel/multi-carousel.component";
import { ProductAllDetails, ProductDetails } from '../model/ecommerce';

@Component({
  selector: 'app-product-layout',
  standalone: true,
  imports: [MultiCarouselComponent],
  templateUrl: './product-layout.component.html',
  styleUrl: './product-layout.component.scss'
})
export class ProductLayoutComponent {
  @Input() heading:string="";
  @Input() isTopBrandSection:boolean=false;
  @Input() ProductsList:(ProductAllDetails | ProductDetails)[]=[];
}
