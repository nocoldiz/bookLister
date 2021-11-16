import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';
import { getBooksFromAuthor, addBook } from 'src/app/store/actions/book.actions';
import { BookModalComponent } from '../book-modal/book-modal.component'
@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})

export class BookCardComponent implements OnInit {
  @Input() book: Book;
  openDialog(): void {
    const dialogRef = this.dialog.open(BookModalComponent, {
      data: {
        title: this.book.volumeInfo.title,
        description: this.book.volumeInfo.description
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onImgError(event: any) {
    event.target.src = 'assets/default.jpg';
  }

  openAuthor(author: string): void {
    this.store.dispatch(getBooksFromAuthor({ author: author }));
  }

  saveBook(book: Book): void {
    this.store.dispatch(addBook({ book: book }));
  }

  constructor(public dialog: MatDialog, public store: Store) { }
  ngOnInit(): void {
  }
}
