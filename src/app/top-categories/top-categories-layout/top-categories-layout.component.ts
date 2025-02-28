import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-categories-layout',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, JsonPipe],
  templateUrl: './top-categories-layout.component.html',
  styleUrl: './top-categories-layout.component.scss'
})
export class TopCategoriesLayoutComponent {
  @Input() products: any[] = [];

  getProductGroups(): any[] {
    const groups = [];
    for (let i = 0; i < this.products.length; i += 8) {
      groups.push(this.products.slice(i, i + 8));
    }
    return groups;
  }
}
