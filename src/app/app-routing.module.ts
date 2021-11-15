import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './core/book-list/book-list.component';
import { BookFavouritesComponent } from './core/book-favourites/book-favourites.component';

const routes: Routes = [
  { path: 'home', component: BookListComponent },
  { path: 'favourites', component: BookFavouritesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: BookListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
