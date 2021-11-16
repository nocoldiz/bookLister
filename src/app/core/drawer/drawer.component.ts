import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  isFavouritesRouter() {
    return this.router.url === '/favourites';
  }

  ngOnInit(): void { }

  constructor(private router: Router) { }
}
