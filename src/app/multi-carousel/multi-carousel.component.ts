import { Component, Input } from '@angular/core';
import { TopBrandProductCardComponent } from '../product-layout/top-brand-product-card/top-brand-product-card.component';
import { ProductCardComponent } from '../product-layout/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ProductAllDetails, ProductDetails } from '../model/ecommerce';

@Component({
  selector: 'app-multi-carousel',
  standalone: true,
  imports: [TopBrandProductCardComponent,ProductCardComponent,CommonModule],
  templateUrl: './multi-carousel.component.html',
  styleUrl: './multi-carousel.component.scss'
})
export class MultiCarouselComponent {
  @Input() isTopBrandSection:boolean=false;
  @Input() ProductsList:(ProductAllDetails | ProductDetails)[]=[];
}
