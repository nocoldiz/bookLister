import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.model';


export interface BookModal {
    title: string;
    subtitle: string;
    description: string;
}

@Component({
    selector: 'book-modal',
    templateUrl: 'book-modal.component.html',
})

export class BookModalComponent {
    book: Book;
    onNoClick(): void {
        this.dialogRef.close();
    }
    constructor(
        public dialogRef: MatDialogRef<BookModal>,
        @Inject(MAT_DIALOG_DATA) public data: BookModal,
    ) { }

}

