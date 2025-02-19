import { Component, Input } from '@angular/core';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-product-layout',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-layout.component.html',
  styleUrl: './product-layout.component.scss'
})
export class ProductLayoutComponent {
  @Input() heading:string="";
}
