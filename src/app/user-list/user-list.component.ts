import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../store/models/user.model';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
    @Input() users: ReadonlyArray<User> = [];
    @Output() add = new EventEmitter<string>();
}
