import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrodpownStateService {
  private activeDropdown = new BehaviorSubject<Element | null>(null);

  // Observable to track the active dropdown
  activeDropdown$ = this.activeDropdown.asObservable();

  setActiveDropdown(element: Element | null) {
    this.activeDropdown.next(element);
  }
}
