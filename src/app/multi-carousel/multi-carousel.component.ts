import { Component, Input } from '@angular/core';
import { TopBrandProductCardComponent } from '../product-layout/top-brand-product-card/top-brand-product-card.component';
import { ProductCardComponent } from '../product-layout/product-card/product-card.component';

@Component({
  selector: 'app-multi-carousel',
  standalone: true,
  imports: [TopBrandProductCardComponent,ProductCardComponent],
  templateUrl: './multi-carousel.component.html',
  styleUrl: './multi-carousel.component.scss'
})
export class MultiCarouselComponent {
  @Input() isTopBrandSection:boolean=false;
  carouselItems: any[] = [
    { id: 1, image: 'images/products/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'5.0', 'userCount':'123' },
    { id: 2, image: 'images/products/nike.png', title: 'nike', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'12%', 'rating':'4.0', 'userCount':'120' },
    { id: 3, image: 'images/products/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'8%', 'rating':'4.5', 'userCount':'123' },
    { id: 4, image: 'images/products/liquid.png', title: 'liquid', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'6%', 'rating':'5.3', 'userCount':'113' },
    { id: 5, image: 'images/products/nike.png', title: 'nike', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'10%', 'rating':'3.0', 'userCount':'12' },
    { id: 6, image: 'images/products/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'12%', 'rating':'2.0', 'userCount':'53' },
    { id: 7, image: 'images/products/liquid.png', title: 'liquid', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'4%', 'rating':'4.5', 'userCount':'103' },
    { id: 8, image: 'images/products/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver','oldPrice':'$1024.99+', 'newPrice':'$999.99+', 'offer':'12%', 'rating':'3.5', 'userCount':'100' },
  ]
}
