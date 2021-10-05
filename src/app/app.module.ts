import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { CRUDComponent } from './crud/crud.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    CRUDComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatListModule,
    MatButtonModule,HttpClientModule,
    MatCardModule,MatToolbarModule,MatSidenavModule,
    MatIconModule
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
