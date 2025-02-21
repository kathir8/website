import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories = [
    { name: 'Electronics', subcategories: ['Computer & Laptop', 'Computer Accessories', 'Smartphone', 'Headphone', 'Mobile Accessroies', 'Gaming Console', 'Camera & Photo', 'TV & Home Appliances', 'Watchs & Accessories', 'GPS & Navigation', 'Wearable Technology'] },
    { name: 'Fashion', subcategories: ['Computer & Laptop', 'Computer Accessories', 'Smartphone', 'Headphone', 'Mobile Accessroies', 'Gaming Console', 'Camera & Photo', 'TV & Home Appliances', 'Watchs & Accessories', 'GPS & Navigation', 'Wearable Technology'] },
    { name: 'Beauty', subcategories: ['Computer & Laptop', 'Computer Accessories', 'Smartphone', 'Headphone', 'Mobile Accessroies', 'Gaming Console', 'Camera & Photo', 'TV & Home Appliances', 'Watchs & Accessories', 'GPS & Navigation', 'Wearable Technology'] },
    { name: 'Home Improvement', subcategories: ['Computer & Laptop', 'Computer Accessories', 'Smartphone', 'Headphone', 'Mobile Accessroies', 'Gaming Console', 'Camera & Photo', 'TV & Home Appliances', 'Watchs & Accessories', 'GPS & Navigation', 'Wearable Technology'] },
    { name: 'Sports, Toys & Luggage', subcategories: ['Computer & Laptop', 'Computer Accessories', 'Smartphone', 'Headphone', 'Mobile Accessroies', 'Gaming Console', 'Camera & Photo', 'TV & Home Appliances', 'Watchs & Accessories', 'GPS & Navigation', 'Wearable Technology'] },
    { name: 'Groceries', subcategories: ['Computer & Laptop', 'Computer Accessories', 'Smartphone', 'Headphone', 'Mobile Accessroies', 'Gaming Console', 'Camera & Photo', 'TV & Home Appliances', 'Watchs & Accessories', 'GPS & Navigation', 'Wearable Technology'] },
    { name: 'Daily Essentials', subcategories: ['Computer & Laptop', 'Computer Accessories', 'Smartphone', 'Headphone', 'Mobile Accessroies', 'Gaming Console', 'Camera & Photo', 'TV & Home Appliances', 'Watchs & Accessories', 'GPS & Navigation', 'Wearable Technology'] },
  ];
}
