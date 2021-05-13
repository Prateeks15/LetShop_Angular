import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule} from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ListingComponent } from './pages/listing/listing.component';
import { ListingDetailComponent } from './pages/listing-detail/listing-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { ShoppingCartComponent } from './pages/checkout/shopping-cart/shopping-cart.component';

import { ErrorComponent } from './pages/error/error.component';
import { ListingItemComponent } from './pages/listing/listing-item/listing-item.component';
import { CouponComponent } from './pages/checkout/common/coupon/coupon.component';
import { SummaryComponent } from './pages/checkout/common/summary/summary.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ListingComponent,
    ListingDetailComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    ShoppingCartComponent,
    ErrorComponent,
    ListingItemComponent,
    CouponComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

