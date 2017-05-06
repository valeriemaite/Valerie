import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LibrariesModule } from './libraries.module';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent, MainHeaderComponent, BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, NgbModule.forRoot(), LibrariesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
