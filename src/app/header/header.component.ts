import { Component } from '@angular/core';
import { CategoriesComponent } from "../categories/categories.component";
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopbarComponent, CategoriesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
