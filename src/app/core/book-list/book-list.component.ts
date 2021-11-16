import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { getBookList, getIsLoading } from '../../store/selectors/book.selector';

import {
    removeBook,
    addBook,
    getBooks
} from '../../store/actions/book.actions';
import { Filters } from 'src/app/models/filters.model';
import { Book } from 'src/app/models/book.model';

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
    books$ = this.store.select(getBookList);

    isLoading$ = this.store.select(getIsLoading);


    ngOnInit() {
        this.isLoading$.subscribe(res => console.log(res));

        this.store.dispatch(getBooks({ filters: this.request }));

    }

    onAdd(book: Book) {
        this.store.dispatch(addBook({ book }));
    }

    onRemove(book: Book) {
        // this.departments = this.departments.filter(item => item != name);

        //.store.dispatch(removeBook({ books }));
    }
    @Output() add = new EventEmitter<string>();
    constructor(
        private apiService: ApiService,
        private store: Store,
    ) { }
}
