import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
declare let $:any;
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent {
  carts: any;
  totalamount: number = 0;
  name = "";
  message = "Coupon Successfull"
  coupon = "Bootcamp2021";



  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.cartItems.subscribe((val) => {
      this.carts = val;
      
    });

  }
  get cartTotal(){
    let total:number=0;
    for (let item of this.carts) {
      total += (item.qty *item.price);
    


    }
    return total;
  }
  get totalBill(){
    let Bill=0;
    if (localStorage.getItem('bill') == "null") {
      Bill = 13 + this.cartTotal;
    }
    else {
      Bill = JSON.parse(localStorage.getItem('bill') || '{}');
    }
    if ($("#code").val() == "Bootcamp2021") {
      Bill = (this.cartTotal - ((this.cartTotal * 10) / 100)) + 13;

    }
    
    return Bill;
   
  }

  onKeyUpEnter($event: any) {

    localStorage.setItem('bill', JSON.stringify(this.totalBill));
    return (localStorage.getItem('bill'));

  }
}




