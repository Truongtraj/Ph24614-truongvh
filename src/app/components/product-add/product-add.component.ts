import { Component } from '@angular/core';
import { ProductService } from '../../services/product.services'
import { Iproduct } from 'src/app/interface/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
 constructor(private formBuilder: FormBuilder,
  private ProductService: ProductService){

  }
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
  })
  onHandleSubmit(){
    if(this.productForm.valid){
      const product:Iproduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price|| 0,
      }
      this.productService.addProduct(product).subscribe(data=>{
        console.log(data)
      })
    }
  }
}
