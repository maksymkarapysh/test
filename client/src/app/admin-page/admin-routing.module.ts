import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductCreateEditComponent } from "./product-create-edit/product-create-edit.component";
import { ProductDeleteComponent } from "./product-delete/product-delete.component";


const adminRoutes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'edit/:id', component: ProductCreateEditComponent },
    { path: 'create', component: ProductCreateEditComponent },
    { path: 'delete/:id', component: ProductDeleteComponent }


]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule { }