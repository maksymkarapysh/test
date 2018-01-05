import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StoreComponent } from './components/store/store.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { BasketComponent } from './components/basket/basket.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'store' , component: StoreComponent},
  { path: 'item/:id', component: ItemProductComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'admin', loadChildren: './admin-page/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
