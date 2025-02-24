import { Component, Input } from '@angular/core';
import { ProductAllDetails, ProductDetails } from '../model/ecommerce';
import { NgFor, NgIf } from '@angular/common';
import { TopBrandProductCardComponent } from "../product-layout/top-brand-product-card/top-brand-product-card.component";
import { ProductCardComponent } from '../product-layout/product-card/product-card.component';
import { EcommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-card-outer',
  standalone: true,
  imports: [NgFor,NgIf, TopBrandProductCardComponent, ProductCardComponent],
  templateUrl: './card-outer.component.html',
  styleUrl: './card-outer.component.scss'
})
export class CardOuterComponent {
  @Input() ProductsList:ProductAllDetails[] | ProductDetails[]=[];
  @Input() isTopBrandSection:boolean = false;

  constructor(public ecommerceService:EcommerceService){

  }
  
}
