import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService} from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  productList:Product[]=[];
  li:any;
  product!:Product[];
  name!:string;
  constructor(public productService:ProductService,private http: HttpClient) {
   
   }

   ngOnInit(): void {
    this.productService.getProducts().subscribe((response=>{
      this.productList=response;
    }));
   
   
    }
    Search(){
      if(this.name!=""){
        this.productService.getProducts().subscribe((response=>{
          this.productList=response;
          this.productList = this.productList.filter(res=>{
            return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          });
        }));
        
      }else if(this.name == ""){
        this.ngOnInit();
      }
    }

}
