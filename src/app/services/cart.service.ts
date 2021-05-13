import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../models/product"
@Injectable({
    providedIn: "root"
})
export class CartService {
    cartItems: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>
        (
            []

        );
    get cart() {
        return this.cartItems.asObservable();
    }
    set cart(cartItem: any) {
        let productExists = false;
        let cartList = this.cartItems.value;
        // console.log(cartItem);
      
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].id == cartItem.id) {
                cartList[i].qty = cartItem.qty;
                productExists = true;
                this.cartItems.next(cartList);
            }
           

        }
        if (!productExists) {
            //  console.log("in 2 if block");
            const currentValue = this.cartItems.value;
            const updatedValue = [...currentValue, cartItem];
            this.cartItems.next(updatedValue);
        }
        // console.log(this.cartItems.value);
    }

}

