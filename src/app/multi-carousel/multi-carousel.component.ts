import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-layout/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ProductAllDetails, ProductDetails } from '../model/ecommerce';
import { EcommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-multi-carousel',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './multi-carousel.component.html',
  styleUrl: './multi-carousel.component.scss'
})
export class MultiCarouselComponent {
  constructor(public ecommerceService: EcommerceService) { }
  @Input() isTopBrandSection: boolean = false;
  @Input() ProductsList: ProductAllDetails[] | ProductDetails[] = [];
  private resizeListener: any;

  ngOnInit() {
    this.resizeListener = () => {
      this.getProductGroups();
    };
    window.addEventListener('resize', this.resizeListener);
  }

  getProductGroups():any[] {
    const itemsPerGroup = getItemsPerGroup();
    const groups = [];
    for (let i = 0; i < this.ProductsList.length; i += itemsPerGroup) {
      groups.push(this.ProductsList.slice(i, i + itemsPerGroup));
    }
    return groups;

    function getItemsPerGroup(): number {
      const width = window.innerWidth;

      if (width >= 1024) { // Desktop
        return 4;
      } else if (width >= 768) { // iPad/Tablets
        return 2;
      } else { // Mobile
        return 1;
      }
    }
  }
  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  }
}
