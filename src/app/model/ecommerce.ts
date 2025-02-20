export interface ProductAllDetails extends ProductDetails{
    description:string;
    oldPrice:string;
    newPrice:string;
    rating:string;
}

export interface ProductDetails{
    id:number;
    image:string;
    title:string;
    offer:string;
    userCount:string;
}

export interface TopCategoryProductDetails{
    name:string;
    brand:string;
    image:string;
    position:string;
}