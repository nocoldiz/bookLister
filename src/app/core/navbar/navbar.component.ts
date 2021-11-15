import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { pipe } from 'rxjs';
import { getDrawer } from '../../store/selectors/app-utils.selector';
import { toggleDrawer } from 'src/app/store/actions/app-utils.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isToggled$ = this.store.select(getDrawer);

  toggleDrawer(): void {
    this.isToggled$.subscribe(pipe(console.log))

    this.store.dispatch(toggleDrawer());
  }
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
