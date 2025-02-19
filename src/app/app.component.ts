import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { TopCategoriesComponent } from "./top-categories/top-categories.component";
import { ProductLayoutComponent } from "./product-layout/product-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, TopCategoriesComponent, ProductLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
