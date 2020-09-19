// logic to create  metadata for comp and module
import { NgModule } from '@angular/core';

// logic which helps to exe copm from module
import { BrowserModule } from '@angular/platform-browser';

import { FirstComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { PeoductsComponent } from './layouts/peoducts/peoducts.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { CantactUsComponent } from './layouts/cantact-us/cantact-us.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ShubhComponent } from './shubh/shubh.component';

@NgModule({
  declarations: [FirstComponent, NavComponent, BannerOneComponent, PeoductsComponent, BannerTwoComponent, CantactUsComponent, BannerThreeComponent, FooterComponent, ShubhComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
export class FirstModule {}
