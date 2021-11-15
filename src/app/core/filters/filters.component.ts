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

    filters: Filters = {
        author: "",
        isbn: "",
        search: "",
        publisher: "",
        subject: ""
    }
    subjects = subjectsArray;
    @Output() add = new EventEmitter<string>();


    ngAfterViewInit() {
        // server-side search
        fromEvent(this.search.nativeElement, 'keyup')
            .pipe(
                filter(Boolean),
                debounceTime(800),
                distinctUntilChanged(),
                tap(() => {
                    this.onKeyUp();

                    this.store.dispatch(getBooks({ filters: this.filters }));
                })
            )
            .subscribe();
        fromEvent(this.author.nativeElement, 'keyup')
            .pipe(
                filter(Boolean),
                debounceTime(800),
                distinctUntilChanged(),
                tap(() => {
                    this.onKeyUp();
                })
            )
            .subscribe();
        fromEvent(this.subject.nativeElement, 'keyup')
            .pipe(
                filter(Boolean),
                debounceTime(800),
                distinctUntilChanged(),
                tap(() => {
                    this.onKeyUp();
                })
            )
            .subscribe();
        fromEvent(this.isbn.nativeElement, 'keyup')
            .pipe(
                filter(Boolean),
                debounceTime(800),
                distinctUntilChanged(),
                tap(() => {
                    this.onKeyUp();
                })
            )
            .subscribe();
        fromEvent(this.publisher.nativeElement, 'keyup')
            .pipe(
                filter(Boolean),
                debounceTime(800),
                distinctUntilChanged(),
                tap(() => {
                    this.onKeyUp();
                })
            )
            .subscribe();
    }


    onKeyUp = () => {


        //this.store.dispatch(getBooks({ filters: this.filters }));

        this.apiService
            .getBooks(this.filters)
            .subscribe((books) => this.store.dispatch(getBooksSuccess({ books })));

    }
    constructor(
        private apiService: ApiService,
        private store: Store,

    ) { }

}
