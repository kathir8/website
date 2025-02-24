import { Injectable } from '@angular/core';
import { ProductAllDetails, ProductDetails } from '../model/ecommerce';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor() { }

  getProductDetails(product: ProductAllDetails | ProductDetails): ProductDetails {
    return product as ProductDetails;
  }

  getProductAllDetails(product: ProductAllDetails | ProductDetails): ProductAllDetails {
    return product as ProductAllDetails;
  }
}
