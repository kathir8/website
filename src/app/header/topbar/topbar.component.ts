import { Component } from '@angular/core';
import { DropdownToggleDirective } from '../../directives/dropdown-toggle.directive';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [DropdownToggleDirective],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
}
