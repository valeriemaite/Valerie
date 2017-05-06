import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, FlexLayoutModule],
  exports: [MdButtonModule, FlexLayoutModule],
})
export class LibrariesModule { }
