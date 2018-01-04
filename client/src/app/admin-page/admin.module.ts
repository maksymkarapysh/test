import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductCreateEditComponent } from './product-create-edit/product-create-edit.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        ProductListComponent, 
        ProductDeleteComponent, 
        ProductCreateEditComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    providers: []

})

export class AdminModule {  }