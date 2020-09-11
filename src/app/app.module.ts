import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {HttpService} from '../app/services/httpservice.service';

import { AppComponent } from "./app.component";
import { SandboxComponent } from "./components/sandbox/sandbox.component";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const appRoutes = [
  {path:'', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user/:id', component: UserDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent, 
    HomeComponent, 
    AboutComponent, NavbarComponent, UserDetailComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
