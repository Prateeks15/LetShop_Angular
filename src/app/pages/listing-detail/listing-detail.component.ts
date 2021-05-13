import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService} from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {
  productList:Product[] = [];
  receivedId!: number;
  product!:any;
  imageurl:string="";
  constructor(public productService:ProductService, private activatedRoute: ActivatedRoute, private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response=>{
      this.productList=response;
      this.receivedId = +this.activatedRoute.snapshot.params['id'];
    this.product = this.productList.find(el => el.id === this.receivedId);
    this.imageurl=this.product.imageurl[0];

    }));
    
  }

  setCart(cartItem:any){
    this.cartService.cart=cartItem;
    this.router.navigate(['/shopping']);
  }
  

  imageChange(event:any){
    this.imageurl=this.product.imageurl[event.target.value];
    localStorage.setItem("imageColor",event.target.value);
    // console.log(localStorage.getItem("imageColor"));
  }
 
 
}
