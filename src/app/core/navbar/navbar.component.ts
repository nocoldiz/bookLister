import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleDrawer } from 'src/app/store/actions/app-utils.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isToggled$ = this.store.select(toggleDrawer);

  toggleDrawer(): void {
    this.store.dispatch(toggleDrawer());
  }
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
