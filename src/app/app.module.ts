import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HttpService} from '../app/services/httpservice.service';

import { AppComponent } from "./app.component";
import { SandboxComponent } from "./components/sandbox/sandbox.component";

@NgModule({
  declarations: [AppComponent, SandboxComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
