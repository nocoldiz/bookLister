import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book.model';
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { selectBooks } from '../../store/selectors/book.selector';
import { selectFilters } from '../../store/selectors/filters.selector';

import {
    removeBook,
    addBook,
    retrievedBookList
} from '../../store/actions/book.actions';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
    constructor(
        private apiService: ApiService,
        private store: Store,
    ) { }
    books$ = this.store.select(selectBooks);
    filters$ = this.store.select(selectFilters);

    ngOnInit() {
        let a = this.filters$.subscribe(event => event.search);
        console.log(a);

        this.apiService
            .getBooks({ search: "Stephen King", isbn: "", author: "", publisher: "", subject: "" })
            .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
    }

    onAdd(bookId: string) {
        this.store.dispatch(addBook({ bookId }));
    }

    onRemove(bookId: string) {
        this.store.dispatch(removeBook({ bookId }));
    }
    @Output() add = new EventEmitter<string>();
}
