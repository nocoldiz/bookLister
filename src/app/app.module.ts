import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CollectionReducer } from './store/reducers/collection.reducer';
import { UserReducer } from './store/reducers/user.reducer';
import { StoreModule } from '@ngrx/store';
import { UserListComponent } from './user-list/user-list.component'
import { UserCollectionComponent } from './user-collection/user-collection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent, UserListComponent, UserCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ users: UserReducer, collection: CollectionReducer }),
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
