import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectUserCollection, selectUsers } from './store/selectors/user.selector';
import {
  removeUserAction,
  addUserAction,
  getUserListAction
} from './store/actions/user.actions';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  users$ = this.store.select(selectUsers);
  userCollection$ = this.store.select(selectUserCollection);

  onAdd(userId: string) {
    this.store.dispatch(addUserAction({ userId }));
  }

  onRemove(userId: string) {
    this.store.dispatch(removeUserAction({ userId }));
  }

  constructor(
    private apiService: ApiService,
    private store: Store
  ) { }

  ngOnInit() {
    this.apiService
      .getUsers()
      .subscribe((users) => this.store.dispatch(getUserListAction({ users })));
  }
}