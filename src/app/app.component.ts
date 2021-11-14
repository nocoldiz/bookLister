import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

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
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(
    private apiService: ApiService,
    private store: Store,
    private breakpoints: BreakpointObserver
  ) { }
  books$ = this.store.select(selectBooks);
  bookFavourites$ = this.store.select(selectBookFavourites);
  filters$ = this.store.select(selectFilters);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }



  ngOnInit() {
    this.apiService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }

  ngAfterViewInit() {
    this.breakpoints
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
}