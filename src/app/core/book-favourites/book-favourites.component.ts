import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { getFavourites } from '../../store/selectors/book.selector';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import {
    removeBook,
    addBook,
    getBooks
} from '../../store/actions/book.actions';
import { Filters } from 'src/app/models/filters.model';
import { Book } from 'src/app/models/book.model';
import { pipe } from 'rxjs';

@Component({
    selector: 'app-book-favourites',
    templateUrl: './book-favourites.component.html',
    styleUrls: ['./book-favourites.component.scss'],
})
export class BookFavouritesComponent {
    @Input() books: ReadonlyArray<Book> = [];
    @Output() remove = new EventEmitter<string>();
    favourites$ = this.store.select(getFavourites);

    drop(event: CdkDragDrop<string[]>) {
        this.favourites$.subscribe(pipe(console.log));
        // moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);

    }


    ngOnInit() {

    }

    onRemove(book: Book) {
        //this.store.dispatch(removeBook({ book: book }));
    }
    @Output() add = new EventEmitter<string>();
    constructor(
        private apiService: ApiService,
        private store: Store,
    ) { }
}
