import { Component } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";
import { CategoriesComponent } from "../categories/categories.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopbarComponent, CategoriesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
