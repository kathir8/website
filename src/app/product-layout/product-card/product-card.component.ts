import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
// import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @ViewChild('carousel') carousel!: ElementRef;

  items = [
    { image: 'images/Laptop.png', title: 'Item 1', description: 'Description 1' },
    { image: 'images/Laptop.png', title: 'Item 2', description: 'Description 2' },
    { image: 'images/Laptop.png', title: 'Item 3', description: 'Description 3' },
    { image: 'images/Laptop.png', title: 'Item 4', description: 'Description 4' },
    { image: 'images/Laptop.png', title: 'Item 5', description: 'Description 5' },
    { image: 'images/Laptop.png', title: 'Item 6', description: 'Description 6' },
  ];

}
