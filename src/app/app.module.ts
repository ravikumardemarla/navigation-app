import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import { TransposedComponent } from './transposed/transposed.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    HomeComponent,
    UserComponent,
    TransposedComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(APP_ROUTES),  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
