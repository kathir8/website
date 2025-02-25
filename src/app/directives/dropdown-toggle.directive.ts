import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DrodpownStateService } from '../drodpown-state.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appDropdownToggle]',
  standalone: true
})
export class DropdownToggleDirective {
  private isOpen = false;
  private subscription: Subscription;

  constructor(private el: ElementRef, private renderer: Renderer2, private dropdownStateService: DrodpownStateService) {
    this.subscription = this.dropdownStateService.activeDropdown$.subscribe((activeElement) => {
      if (activeElement !== this.el.nativeElement) {
        this.isOpen = false;
        this.setIconState(false);
      }
    });
   }

  @HostListener('click', ['$event'])
  toggleDropdown(event:Event) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.dropdownStateService.setActiveDropdown(this.el.nativeElement); // Notify others
    } else {
      this.dropdownStateService.setActiveDropdown(null);
    }

    this.setIconState(this.isOpen);
  }

  @HostListener('document:click', ['$event'])
  closeOnClickOutside(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.setIconState(false);
      this.dropdownStateService.setActiveDropdown(null);
    }
  }

  private setIconState(isOpen: boolean) {
    const icon = this.el.nativeElement.querySelector('i');
    if (icon) {
      this.renderer.removeClass(icon, isOpen ? 'bi-chevron-down' : 'bi-chevron-up');
      this.renderer.addClass(icon, isOpen ? 'bi-chevron-up' : 'bi-chevron-down');
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
