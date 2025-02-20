import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-categories-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-categories-layout.component.html',
  styleUrl: './top-categories-layout.component.scss'
})
export class TopCategoriesLayoutComponent {
  products = [
    { name: 'Product 1', brand: 'Bayer', image: 'images/top-categories/product1.png','position':'right' },
    { name: 'Product 2', brand: 'Bayer', image: 'images/top-categories/product2.png','position':'right' },
    { name: 'Product 3', brand: 'Bayer', image: 'images/top-categories/product3.png','position':'right'},
    { name: 'Product 4', brand: 'Bayer', image: 'images/top-categories/product4.png','position':'top' },
    { name: 'Product 5', brand: 'Donna Karan', image: 'images/top-categories/product5.png','position':'center' },
    { name: 'Product 6', brand: 'Donna Karan', image: 'images/top-categories/product6.png','position':'center' },
    { name: 'Product 7', brand: 'Donna Karan', image: 'images/top-categories/product7.png','position':'center' },
    { name: 'Product 8', brand: 'Donna Karan', image: 'images/top-categories/product8.png','position':'center' }
  ];

  getProductGroups(): any[] {
    let groups = [];
    for (let i = 0; i < this.products.length; i += 4) {
        groups.push(this.products.slice(i, i + 4));
    }
    return groups;
}
}
