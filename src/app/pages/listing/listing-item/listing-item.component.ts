import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.css']
})
export class ListingItemComponent implements OnInit {
  @Input() productItem!: Product;
  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
  }

  setCart(cartItem:any){

    this.cartService.cart=cartItem;
    // console.log(cart);
    
  
    // console.log(cartItem);
    //this.router.navigate(['/shopping']);
  }
 

}
