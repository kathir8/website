import { Component, Input } from '@angular/core';
import { ProductAllDetails, ProductDetails } from '../model/ecommerce';
import { CardOuterComponent } from "../card-outer/card-outer.component";
import { NgIf } from '@angular/common';
import { MultiCarouselComponent } from '../multi-carousel/multi-carousel.component';

@Component({
  selector: 'app-product-layout',
  standalone: true,
  imports: [NgIf, CardOuterComponent, MultiCarouselComponent],
  templateUrl: './product-layout.component.html',
  styleUrl: './product-layout.component.scss'
})
export class ProductLayoutComponent {
  @Input() heading: string = "";
  @Input() isTopBrandSection: boolean = false;
  @Input() multiCarousel: boolean = false;
  @Input() ProductsList: ProductAllDetails[] | ProductDetails[] = [];
  getProductsAllList() {

  }
}
