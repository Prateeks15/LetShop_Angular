import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService} from 'src/app/services/cart.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  carts:any;
  constructor(public router: Router,private cartService:CartService) {
    this.cartService.cartItems.subscribe((val) => {
      this.carts = val;
    });

  }

  ngOnInit(): void {
  }
  routeDisable() {
    if (this.router.navigate(['/shopping'])) {
      console.log("disabled");
    }
  }


}
