import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookFavourites, selectBooks } from './store/selectors/book.selector';
import { selectFilters } from './store/selectors/filters.selector';

import {
  removeBook,
  addBook,
  retrievedBookList
} from './store/actions/book.actions';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookFavourites$ = this.store.select(selectBookFavourites);
  filters$ = this.store.select(selectFilters);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private apiService: ApiService,
    private store: Store
  ) { }

  ngOnInit() {
    this.apiService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}