import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPageScrollModule } from 'ngx-page-scroll';

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { ModalGalleryModule } from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

import { AppRoutingModule } from './app-routing.module';

import { RootComponent } from './components/root/root.component';
import { StickyHeaderComponent } from './components/root/sticky-header/sticky-header.component';
import { MainComponent } from './components/main/main.component';
import { MostOftenOrderedComponent } from './components/main/most-often-ordered/most-often-ordered.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StoreComponent } from './components/store/store.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { BasketWindowComponent } from './components/root/basket-window/basket-window.component';
import { BasketComponent } from './components/basket/basket.component';
import { SidebarNavigationComponent } from './components/root/sidebar-navigation/sidebar-navigation.component';
import { GalleryComponent } from './components/main/gallery/gallery.component';

import { ProductService } from './shared/product.service';
import { CartService } from './shared/cart.service';
import { FeedbackService } from './shared/feedback.service';

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
    BasketWindowComponent,
    BasketComponent,
    SidebarNavigationComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPageScrollModule,
    ModalGalleryModule.forRoot()
  ],
  providers: [ProductService, CartService, FeedbackService],
  bootstrap: [RootComponent]
})
export class AppModule { }
