// logic to create  metadata for comp and module
import { NgModule } from '@angular/core';

// logic which helps to exe copm from module
import { BrowserModule } from '@angular/platform-browser';

// root compo
import { AppComponent } from './app.component';

// layouts
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { ProductsComponent } from './layouts/products/products.component';

// products
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { BikesComponent } from './products/bikes/bikes.component';

// pipes
import { OfferPipe } from './pipes/offer.pipe';
import { SimpleStyleDirective } from './directives/simple-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    ContactUsComponent,
    BannerThreeComponent,
    FooterComponent,
    MobilesComponent,
    LaptopComponent,
    BikesComponent,
    OfferPipe,
    SimpleStyleDirective,
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent], // root view: entrypoint
})
export class AppModule {}
