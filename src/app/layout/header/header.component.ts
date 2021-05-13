import { Component, OnInit } from '@angular/core';
import {Product } from '../../models/product';
import { ProductService} from 'src/app/services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  product!:Product[];
  name!:string;
  constructor(public productService:ProductService) { 
   
  }

  ngOnInit(){
    this.productService.getProducts().subscribe((response=>{
      this.product=response;
    }));
   
  }
  Search(){
    if(this.name!=""){
      console.log(this.product);
      this.product = this.product.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }else if(this.name == ""){
      this.ngOnInit();
    }
   
  }
  

}
