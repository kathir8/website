import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RatingComponent } from "../../rating/rating.component";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @ViewChild('carouselInner', { static: false }) carouselInner!: ElementRef;

  carouselItems: any[] = [
    { id: 1, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 2, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 3, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 4, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 5, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 6, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 7, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 8, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
  ];

  visibleItems: any[] = [
    { id: 1, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 2, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 3, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 4, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 5, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 6, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 7, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 8, image: 'images/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },];
  currentIndex = 0;
  itemsPerPage = 4; 
  startX: number = 0;
  scrollLeft: number = 0;
  isDragging: boolean = false;
  
  ngAfterViewInit() {
    const carousel = this.carouselInner.nativeElement;

    carousel.addEventListener('mousedown', (e: MouseEvent) => {
      this.isDragging = true;
      this.startX = e.pageX - carousel.offsetLeft;
      this.scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      this.isDragging = false;
    });

    carousel.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    carousel.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - this.startX) * 1; // Adjust sensitivity
      carousel.scrollLeft = this.scrollLeft - walk;

      // Update visible items based on scroll position (optional, for more dynamic updates)
       this.updateVisibleItemsOnScroll();
    });

    carousel.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault(); // Prevent default scrolling behavior
      const delta = Math.sign(event.deltaY) * 50; // Adjust scroll speed
      carousel.scrollLeft += delta;
      this.updateVisibleItemsOnScroll();
    });
  }


  updateVisibleItems() {
    this.visibleItems = this.carouselItems.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  updateVisibleItemsOnScroll() {
    const carousel = this.carouselInner.nativeElement;
    const scrollLeft = carousel.scrollLeft;
    const itemWidth = this.carouselInner.nativeElement.querySelector('.col-md-3').offsetWidth + 20; // Add margin

    this.currentIndex = Math.round(scrollLeft / itemWidth);
    this.updateVisibleItems();
  }

}
