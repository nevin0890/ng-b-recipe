import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { ViewrecipeComponent } from './viewrecipe/viewrecipe.component';

const routes: Routes = [
  { path: '', component: AddrecipeComponent },
  { path: 'ViewRecipe', component: ViewrecipeComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddrecipeComponent,
    ViewrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
