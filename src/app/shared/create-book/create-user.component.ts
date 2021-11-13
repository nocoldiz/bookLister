import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
    age: number;
    name: string;
    country: string;
}

@Component({
    selector: 'create-user-modal',
    templateUrl: 'create-user.component.html',
})
export class CreateUserComponent {
    name: string;
    age: number;
    country: string;

    constructor(
        public dialogRef: MatDialogRef<CreateUserComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
        this.name = "";
        this.age = 0;
        this.country = "";


    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}

