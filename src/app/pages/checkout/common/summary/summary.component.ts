import { Component, OnInit } from '@angular/core';
import { CartService} from 'src/app/services/cart.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{
  carts:any;

  constructor(private cartService:CartService){
    this.cartService.cartItems.subscribe((val)=>{
        this.carts=val;
       

    });
  }

}
