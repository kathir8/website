export class ProductDetails {
    id: number = 0;
    image: string = "";
    title: string = "";
    offer: string = "";
    userCount: string = "";
}

export class ProductAllDetails extends ProductDetails {
    description: string = "";
    oldPrice: string = "";
    newPrice: string = "";
    rating: string = "";
}

export interface TopCategoryProductDetails {
    name: string;
    brand: string;
    image: string;
    position: string;
}