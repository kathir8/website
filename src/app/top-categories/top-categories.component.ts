import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TopCategoriesLayoutComponent } from "./top-categories-layout/top-categories-layout.component";
import { TopCategoryProductDetails } from '../model/ecommerce';

@Component({
  selector: 'app-top-categories',
  standalone: true,
  imports: [NgFor, TopCategoriesLayoutComponent],
  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.scss'
})
export class TopCategoriesComponent {
  tabs = ['Health and Wellness', 'Home and Garden', 'Entertainment', 'Fashion'];
  activeTab = 'Entertainment';

  products_Health: TopCategoryProductDetails[] = [
    { name: 'Product 1', brand: 'Bayer', image: 'images/top-categories/product1.png', position: 'right' },
    { name: 'Product 2', brand: 'Bayer', image: 'images/top-categories/product2.png', position: 'right' },
    { name: 'Product 3', brand: 'Bayer', image: 'images/top-categories/product3.png', position: 'right' },
    { name: 'Product 4', brand: 'Bayer', image: 'images/top-categories/product4.png', position: 'top' },
    { name: 'Product 5', brand: 'Donna Karan', image: 'images/top-categories/product5.png', position: 'center' },
    { name: 'Product 6', brand: 'Donna Karan', image: 'images/top-categories/product6.png', position: 'center' },
    { name: 'Product 7', brand: 'Donna Karan', image: 'images/top-categories/product7.png', position: 'center' },
    { name: 'Product 8', brand: 'Donna Karan', image: 'images/top-categories/product8.png', position: 'center' },
    { name: 'Product 9', brand: 'Procter & Gamble', image: 'images/top-categories/product9.png', position: 'center' },
    { name: 'Product 10', brand: 'Procter & Gamble', image: 'images/top-categories/product10.png', position: 'center' },
    { name: 'Product 11', brand: 'Procter & Gamble', image: 'images/top-categories/product11.png', position: 'center' },
    { name: 'Product 12', brand: 'Procter & Gamble', image: 'images/top-categories/product12.png', position: 'center' },
    { name: 'Product 13', brand: 'Haleon', image: 'images/top-categories/product13.png', position: 'center' },
    { name: 'Product 14', brand: 'Haleon', image: 'images/top-categories/product14.png', position: 'center' },
    { name: 'Product 15', brand: 'Haleon', image: 'images/top-categories/product15.png', position: 'center' },
    { name: 'Product 16', brand: 'Haleon', image: 'images/top-categories/product16.png', position: 'center' }
  ];
  products_Home: TopCategoryProductDetails[] = [
    { name: 'Product 9', brand: 'Procter & Gamble', image: 'images/top-categories/product9.png', position: 'center' },
    { name: 'Product 10', brand: 'Procter & Gamble', image: 'images/top-categories/product10.png', position: 'center' },
    { name: 'Product 12', brand: 'Procter & Gamble', image: 'images/top-categories/product12.png', position: 'center' },
    { name: 'Product 11', brand: 'Procter & Gamble', image: 'images/top-categories/product11.png', position: 'center' },
    { name: 'Product 13', brand: 'Haleon', image: 'images/top-categories/product13.png', position: 'center' },
    { name: 'Product 14', brand: 'Haleon', image: 'images/top-categories/product14.png', position: 'center' },
    { name: 'Product 16', brand: 'Haleon', image: 'images/top-categories/product16.png', position: 'center' },
    { name: 'Product 15', brand: 'Haleon', image: 'images/top-categories/product15.png', position: 'center' },
    { name: 'Product 1', brand: 'Bayer', image: 'images/top-categories/product1.png', position: 'right' },
    { name: 'Product 2', brand: 'Bayer', image: 'images/top-categories/product2.png', position: 'right' },
    { name: 'Product 4', brand: 'Bayer', image: 'images/top-categories/product4.png', position: 'top' },
    { name: 'Product 3', brand: 'Bayer', image: 'images/top-categories/product3.png', position: 'right' },
    { name: 'Product 5', brand: 'Donna Karan', image: 'images/top-categories/product5.png', position: 'center' },
    { name: 'Product 6', brand: 'Donna Karan', image: 'images/top-categories/product6.png', position: 'center' },
    { name: 'Product 8', brand: 'Donna Karan', image: 'images/top-categories/product8.png', position: 'center' },
    { name: 'Product 7', brand: 'Donna Karan', image: 'images/top-categories/product7.png', position: 'center' }
  ];
  products_Entertainment: TopCategoryProductDetails[] = [
    { name: 'Product 1', brand: 'Bayer', image: 'images/top-categories/product1.png', position: 'right' },
    { name: 'Product 2', brand: 'Bayer', image: 'images/top-categories/product2.png', position: 'right' },
    { name: 'Product 3', brand: 'Bayer', image: 'images/top-categories/product3.png', position: 'right' },
    { name: 'Product 4', brand: 'Bayer', image: 'images/top-categories/product4.png', position: 'top' },
    { name: 'Product 5', brand: 'Donna Karan', image: 'images/top-categories/product5.png', position: 'center' },
    { name: 'Product 6', brand: 'Donna Karan', image: 'images/top-categories/product6.png', position: 'center' },
    { name: 'Product 7', brand: 'Donna Karan', image: 'images/top-categories/product7.png', position: 'center' },
    { name: 'Product 8', brand: 'Donna Karan', image: 'images/top-categories/product8.png', position: 'center' },
    { name: 'Product 9', brand: 'Procter & Gamble', image: 'images/top-categories/product9.png', position: 'center' },
    { name: 'Product 10', brand: 'Procter & Gamble', image: 'images/top-categories/product10.png', position: 'center' },
    { name: 'Product 11', brand: 'Procter & Gamble', image: 'images/top-categories/product11.png', position: 'center' },
    { name: 'Product 12', brand: 'Procter & Gamble', image: 'images/top-categories/product12.png', position: 'center' },
    { name: 'Product 13', brand: 'Haleon', image: 'images/top-categories/product13.png', position: 'center' },
    { name: 'Product 14', brand: 'Haleon', image: 'images/top-categories/product14.png', position: 'center' },
    { name: 'Product 15', brand: 'Haleon', image: 'images/top-categories/product15.png', position: 'center' },
    { name: 'Product 16', brand: 'Haleon', image: 'images/top-categories/product16.png', position: 'center' }
  ];
  products_Fashion: TopCategoryProductDetails[] = [
    { name: 'Product 9', brand: 'Procter & Gamble', image: 'images/top-categories/product9.png', position: 'center' },
    { name: 'Product 10', brand: 'Procter & Gamble', image: 'images/top-categories/product10.png', position: 'center' },
    { name: 'Product 11', brand: 'Procter & Gamble', image: 'images/top-categories/product11.png', position: 'center' },
    { name: 'Product 12', brand: 'Procter & Gamble', image: 'images/top-categories/product12.png', position: 'center' },
    { name: 'Product 13', brand: 'Haleon', image: 'images/top-categories/product13.png', position: 'center' },
    { name: 'Product 14', brand: 'Haleon', image: 'images/top-categories/product14.png', position: 'center' },
    { name: 'Product 15', brand: 'Haleon', image: 'images/top-categories/product15.png', position: 'center' },
    { name: 'Product 16', brand: 'Haleon', image: 'images/top-categories/product16.png', position: 'center' },
    { name: 'Product 1', brand: 'Bayer', image: 'images/top-categories/product1.png', position: 'right' },
    { name: 'Product 2', brand: 'Bayer', image: 'images/top-categories/product2.png', position: 'right' },
    { name: 'Product 3', brand: 'Bayer', image: 'images/top-categories/product3.png', position: 'right' },
    { name: 'Product 4', brand: 'Bayer', image: 'images/top-categories/product4.png', position: 'top' },
    { name: 'Product 5', brand: 'Donna Karan', image: 'images/top-categories/product5.png', position: 'center' },
    { name: 'Product 6', brand: 'Donna Karan', image: 'images/top-categories/product6.png', position: 'center' },
    { name: 'Product 7', brand: 'Donna Karan', image: 'images/top-categories/product7.png', position: 'center' },
    { name: 'Product 8', brand: 'Donna Karan', image: 'images/top-categories/product8.png', position: 'center' },
  ];
  products = this.products_Entertainment;
  setActiveTab(tab: string) {
    this.activeTab = tab;
    switch (tab) {
      case 'Health and Wellness':
        this.products = this.products_Health;
        break;
      case 'Home and Garden':
        this.products = this.products_Home;
        break;
      case 'Entertainment':
        this.products = this.products_Entertainment;
        break;

      default: //Fashion
        this.products = this.products_Fashion;
        break;
    }
  }
}

