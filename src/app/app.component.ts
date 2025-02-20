import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { TopCategoriesComponent } from "./top-categories/top-categories.component";
import { ProductLayoutComponent } from "./product-layout/product-layout.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductAllDetails, ProductDetails } from './model/ecommerce';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, TopCategoriesComponent, ProductLayoutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  OtherProducts: ProductAllDetails[] = [
    { id: 1, image: 'images/products/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver', oldPrice: '$1024.99+', newPrice: '$999.99+', offer: '10%', rating: '5.0', userCount: '123' },
    { id: 2, image: 'images/products/nike.png', title: 'Nike', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver', oldPrice: '$1024.99+', newPrice: '$999.99+', offer: '12%', rating: '4.0', userCount: '120' },
    { id: 3, image: 'images/products/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver', oldPrice: '$1024.99+', newPrice: '$999.99+', offer: '8%', rating: '4.5', userCount: '123' },
    { id: 4, image: 'images/products/liquid.png', title: 'Palmolive', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver', oldPrice: '$1024.99+', newPrice: '$999.99+', offer: '6%', rating: '5.3', userCount: '113' },
    { id: 5, image: 'images/products/nike.png', title: 'Nike', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver', oldPrice: '$1024.99+', newPrice: '$999.99+', offer: '10%', rating: '3.0', userCount: '12' },
    { id: 6, image: 'images/products/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver', oldPrice: '$1024.99+', newPrice: '$999.99+', offer: '12%', rating: '2.0', userCount: '53' },
    { id: 7, image: 'images/products/liquid.png', title: 'Palmolive', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver', oldPrice: '$1024.99+', newPrice: '$999.99+', offer: '4%', rating: '4.5', userCount: '103' },
    { id: 8, image: 'images/products/Laptop.png', title: 'Macbook', description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver', oldPrice: '$1024.99+', newPrice: '$999.99+', offer: '12%', rating: '3.5', userCount: '100' },
  ];
  TopBrandProducts: ProductDetails[] = [
    { id: 1, image: 'images/products/liquid.png', title: 'Palmolive', offer: '10%', userCount: '23' },
    { id: 2, image: 'images/products/nike.png', title: 'Nike', offer: '10%', userCount: '23' },
    { id: 3, image: 'images/products/levi.png', title: `Levi's`, offer: '10%', userCount: '23' },
    { id: 4, image: 'images/products/himalaya.png', title: 'Himalaya', offer: '10%', userCount: '23' },
    { id: 5, image: 'images/products/nike.png', title: 'Nike', offer: '10%', userCount: '23' },
    { id: 6, image: 'images/products/liquid.png', title: 'Palmolive', offer: '10%', userCount: '23' },
    { id: 7, image: 'images/products/himalaya.png', title: 'Himalaya', offer: '10%', userCount: '23' },
    { id: 8, image: 'images/products/levi.png', title: `Levi's`, offer: '10%', userCount: '23' },

  ];
}
