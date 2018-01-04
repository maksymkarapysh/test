import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from '../../shared/product.service';
import { Product } from '../../shared/product';

@Component({
  selector: 'nut-product-create-edit',
  templateUrl: './product-create-edit.component.html',
  styleUrls: ['./product-create-edit.component.scss']
})
export class ProductCreateEditComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  public currentProduct: any;
  public productForm: FormGroup;

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getProductFromRoute();
  }

  public onSubmit() {  //productForm: FormGroup
    // this.currentProduct.name = productForm.value.name;
    // this.currentProduct.price = productForm.value.price;

    this.currentProduct = this.prepareSave();
    //console.log(this.currentProduct);
    if (this.currentProduct._id) {
      this.productService.updateProduct(this.currentProduct)
        .subscribe(() => this.goBack());
    } else {
      this.productService.addProduct(this.currentProduct)
        .subscribe(() => this.goBack());
    }
  }



  private prepareSave(): any {
    let valueForms = new FormData();
    valueForms.append('name', this.productForm.get('name').value);
    valueForms.append('productImage', this.productForm.get('productImage').value)
    valueForms.append('price', this.productForm.get('price').value);
    return valueForms;
  }


  private getProductFromRoute() {

    this.activatedRoute.params.forEach((params: Params) => {

      let id = params["id"];

      if (id) {
        this.productService.getProduct(id).subscribe(
          product => {
            console.log(product)
            //this.currentProduct = product;
            var ImageOfProduct = new Image();
            ImageOfProduct.src = 'http://localhost:3000/' + product.productImage;
            this.productForm.get('name').setValue(product.name);
            this.productForm.get('price').setValue(product.price);
            this.productForm.get('productImage').setValue(ImageOfProduct);
            //this.productForm.patchValue(this.currentProduct);
          });
      }
      else {
        this.currentProduct = new Product(null, null, null);
        //this.productForm.patchValue(this.currentProduct);
      }
    });
  }

  public goBack() {
    this.router.navigate(["admin"]);
  }
  private buildForm() {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      productImage: null
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      //console.log(this.productForm.get("productImage"))
      this.productForm.get('productImage').setValue(file);
    }
  }

  clearFile() {
    //this.productForm.get('productImage').setValue(null);
    // this.fileInput.nativeElement.value = '';
    console.log(this.fileInput.nativeElement.value)
  }

}
