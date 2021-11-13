import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Ngrx Store 
import { StoreModule } from '@ngrx/store';
import { CollectionReducer } from './store/reducers/collection.reducer';
import { BookReducer } from './store/reducers/book.reducer';

// Custom components
import { BookListComponent } from './core/book-list/book-list.component'
import { BookCollectionComponent } from './core/book-collection/book-collection.component';
import { BookCardComponent } from './shared/book-card/book-card.component';



//Import material components
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ books: BookReducer, collection: CollectionReducer }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
