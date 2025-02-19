import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.scss'
})
export class TopCategoriesComponent {
  tabs = ['Health and Wellness', 'Home and Garden', 'Entertainment', 'Fashion'];
  activeTab = 'Entertainment';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}

