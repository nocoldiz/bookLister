import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Filters } from '../../models/filters.model';
import subjectsArray from 'src/assets/categories.json';
import { ApiService } from 'src/app/services/api.service';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { getBooks, getBooksSuccess } from 'src/app/store/actions/book.actions';
import { fromEvent } from 'rxjs';
@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    @ViewChild('search') search: ElementRef;
    @ViewChild('author') author: ElementRef;
    @ViewChild('isbn') isbn: ElementRef;
    @ViewChild('subject') subject: ElementRef;
    @ViewChild('publisher') publisher: ElementRef;
    subjects = subjectsArray;
    onKey = () => {
        console.log(this.search.nativeElement.value);

        this.store.dispatch(getBooks({
            filters: {
                search: this.search.nativeElement.value,
                author: this.author.nativeElement.value,
                isbn: this.isbn.nativeElement.value,
                publisher: this.publisher.nativeElement.value,
                subject: "ss",
            }
        }));
        /*
                this.apiService
                    .getBooks(this.filters)
                    .subscribe((books) => this.store.dispatch(getBooksSuccess({ books })));
        */
    }
    constructor(
        private apiService: ApiService,
        private store: Store,

    ) { }

}
