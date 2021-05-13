import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService} from 'src/app/services/cart.service';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  @ViewChild('f') signup = "NgForm";
  form: any;
  step: any = 1;
  carts:any;
  cartTotal!:number;
  imageurl:Array<number>=[];
  j: number = 0;
  isSelect1: Boolean = true;
  isSelect2: Boolean = false;
  color: Boolean = true;

  constructor(private cartService:CartService,private router:Router,private route:ActivatedRoute){
    this.cartService.cartItems.subscribe((val)=>{
        this.carts=val;
        
    });
  
  
  
  }
  ngOnInit(){
    for(let i in this.carts){
      this.imageurl[this.j]=this.carts[i].imageurl[localStorage.getItem("imageColor")|| ""];
      this.j++;

    }
  }

  onChangeEvent(cartItem: any,event:any){
    this.cartService.cart=cartItem;
    
    cartItem.qty=event.target.value;
  
    this.cartTotal=cartItem.qty*cartItem.price;
   

  }

  onSubmit(f:any){
    let data: any = this.form.value;
    this.router.navigate(['/success'],{
      queryParams:{data:JSON.stringify(data)}
    })
  }
 
  back(){
    this.step = this.step - 1;
  }

  onPay() {
   
    
    this.router.navigate(['/success']);

  }

  onItemChange(event: any) {
    if (event.target.value == "card") {
      this.isSelect1 = true;
      this.isSelect2 = false;

    }
    else if (event.target.value == "paypal") {
      this.isSelect1 = false;
      this.isSelect2 = true;
    }
  }
  getColor() {
    return this.color == this.isSelect1 ? 'black' : 'grey';
  }
  getColor2() {
    return this.color == this.isSelect2 ? 'black' : 'grey';
  }
 
  next(){
    this.step = this.step + 1;
  }
}


 


  



