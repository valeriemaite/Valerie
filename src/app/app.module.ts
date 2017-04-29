import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomMaterialModule } from './angular-material.module';

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
    HttpModule, NgbModule.forRoot(), CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
