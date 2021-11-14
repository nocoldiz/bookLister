import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Ngrx Store 
import { StoreModule } from '@ngrx/store';
import { FavouritesReducer } from './store/reducers/favourites.reducer';
import { BookReducer } from './store/reducers/book.reducer';
import { FiltersReducer } from './store/reducers/filters.reducer';

// Custom components
import { BookListComponent } from './core/book-list/book-list.component'
import { BookFavouritesComponent } from './core/book-favourites/book-favourites.component';
import { BookCardComponent } from './shared/book-card/book-card.component';
import { FiltersComponent } from './core/filters/filters.component';

//Import Layout components
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeaderComponent } from './core/header/header.component';
import { DrawerComponent } from './core/drawer/drawer.component';
import { FooterComponent } from './core/footer/footer.component';
//Import material components
import { MatCardModule } from '@angular/material/card';
//import { MatCardAcModule } from '@angular/material/';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from "@angular/material/divider"
import { MatSelectModule } from "@angular/material/select"

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFavouritesComponent,
    BookCardComponent,
    NavbarComponent,
    HeaderComponent,
    DrawerComponent,
    FooterComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ books: BookReducer, favourites: FavouritesReducer, filters: FiltersReducer }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDividerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
