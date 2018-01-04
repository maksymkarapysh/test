import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { RootComponent } from './components/root/root.component';
import { StickyHeaderComponent } from './components/sticky-header/sticky-header.component';
import { MainComponent } from './components/main/main.component';
import { MostOftenOrderedComponent } from './components/most-often-ordered/most-often-ordered.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import {NgxPageScrollModule} from 'ngx-page-scroll';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './shared/product.service';
import { StoreComponent } from './components/store/store.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { BasketComponent } from './components/basket/basket.component';
import { BasketService } from './shared/basket.service';

@NgModule({
  declarations: [
    RootComponent,
    StickyHeaderComponent,
    MainComponent,
    MostOftenOrderedComponent,
    FooterComponent,
    AboutUsComponent,
    StoreComponent,
    ItemProductComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPageScrollModule
  ],
  providers: [ProductService, BasketService],
  bootstrap: [RootComponent]
})
export class AppModule { }
