import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopCategoriesLayoutComponent } from "./top-categories-layout/top-categories-layout.component";

@Component({
  selector: 'app-top-categories',
  standalone: true,
  imports: [CommonModule, TopCategoriesLayoutComponent],
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

