import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../store/models/user.model';

@Component({
    selector: 'app-user-collection',
    templateUrl: './user-collection.component.html',
    styleUrls: ['./user-collection.component.scss'],
})
export class UserCollectionComponent {
    @Input() users: ReadonlyArray<User> = [];
    @Output() remove = new EventEmitter<string>();
}