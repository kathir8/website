import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  carouselItems: any[] = [
    { id: 1, image: 'images/Laptop.png', title: 'Item 1', description: 'Description for item 1' },
    { id: 2, image: 'images/Laptop.png', title: 'Item 2', description: 'Description for item 2' },
    { id: 3, image: 'images/Laptop.png', title: 'Item 3', description: 'Description for item 3' },
    { id: 4, image: 'images/Laptop.png', title: 'Item 4', description: 'Description for item 4' },
    { id: 5, image: 'images/Laptop.png', title: 'Item 5', description: 'Description for item 5' },
    { id: 6, image: 'images/Laptop.png', title: 'Item 6', description: 'Description for item 6' },
    { id: 7, image: 'images/Laptop.png', title: 'Item 7', description: 'Description for item 7' },
    { id: 8, image: 'images/Laptop.png', title: 'Item 8', description: 'Description for item 8' },
  ];

  visibleItems: any[] = [];
  currentIndex = 0;
  itemsPerPage = 4; 

  ngOnInit() {
    this.updateVisibleItems();
  }

  next() {
    this.currentIndex = Math.min(this.currentIndex + 1, this.carouselItems.length - this.itemsPerPage);
    this.updateVisibleItems();
  }

  prev() {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
    this.updateVisibleItems();
  }

  updateVisibleItems() {
    this.visibleItems = this.carouselItems.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

}
