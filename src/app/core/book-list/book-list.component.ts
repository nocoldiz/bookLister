import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { selectBooks } from '../../store/selectors/book.selector';

import {
    removeBook,
    addBook,
    getBooksSuccess,
    getBooks
} from '../../store/actions/book.actions';
import { Filters } from 'src/app/models/filters.model';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
    request: Filters = {
        search: "Angular",
        author: "",
        isbn: "",
        publisher: "",
        subject: ""
    }

    books$ = this.store.select(selectBooks);

    ngOnInit() {
        this.store.dispatch(getBooks({ filters: this.request }));
        /*
        this.apiService
            .getBooks(this.request)
            .subscribe((books) => this.store.dispatch(getBooksSuccess({ books })));
            */
    }

    onAdd(bookId: string) {
        this.store.dispatch(addBook({ bookId }));
    }

    onRemove(bookId: string) {
        this.store.dispatch(removeBook({ bookId }));
    }
    @Output() add = new EventEmitter<string>();
    constructor(
        private apiService: ApiService,
        private store: Store,
    ) { }
}
