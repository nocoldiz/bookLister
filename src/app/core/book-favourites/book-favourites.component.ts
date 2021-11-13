import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
    selector: 'app-book-favourites',
    templateUrl: './book-favourites.component.html',
    styleUrls: ['./book-favourites.component.scss'],
})
export class BookFavouritesComponent {
    @Input() books: ReadonlyArray<Book> = [];
    @Output() remove = new EventEmitter<string>();
}