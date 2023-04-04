import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  openDropdown = false;

  categories = ['Shoes', 'Sports'];

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
    this.onOpenDropdown();
  }

  onOpenDropdown(): void {
    this.openDropdown = !this.openDropdown;
  }
}
