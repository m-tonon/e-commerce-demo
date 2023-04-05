import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  openDropdown = true;

  categories: Array<string> | undefined;
  categoriesSub: Subscription | undefined;

  constructor (private storeService: StoreService) {}

  ngOnInit(): void {
    this.categoriesSub = this.storeService.getAllCategories()
      .subscribe((response) => {
        this.categories = response;
      });
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
    this.onOpenDropdown();
  }

  onOpenDropdown(): void {
    this.openDropdown = !this.openDropdown;
  }

  ngOnDestroy(): void {
    this.categoriesSub?.unsubscribe();
  }
}
