// logic to create  metadata for comp and module
import { NgModule } from '@angular/core';

// logic which helps to exe copm from module
import { BrowserModule } from '@angular/platform-browser';

import { FirstComponent } from './app.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
export class FirstModule {}
