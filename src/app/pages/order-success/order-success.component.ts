import { Component, OnInit } from '@angular/core';
import { CartService} from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  users!:any;
  carts:any;

  constructor(private cartService:CartService){
    
    this.cartService.cartItems.subscribe((val)=>{
      this.carts=val;
      
  });
  this.cartService.cart=0;
   this.cartService.cartItems.value.length=0;

    localStorage.setItem('bill','null');
    this.users = JSON.parse(localStorage.getItem('user')|| '{}');
   }

  ngOnInit(): void {
  }
  success(){
   
    localStorage.removeItem("user");
  }
}
