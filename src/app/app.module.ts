import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RefundComponent } from './refund/refund.component';
import { DmcaComponent } from './dmca/dmca.component';
import { NewsComponent } from './news/news.component';
import { PricingComponent } from './pricing/pricing.component';
import { FrequentComponent } from './frequent/frequent.component';
import { ActivationComponent } from './activation/activation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayStationComponent } from './play-station/play-station.component';
import { XboxComponent } from './xbox/xbox.component';
import { PcComponent } from './pc/pc.component';
import { PsOrderComponent } from './ps-order/ps-order.component';
import { PcOrderComponent } from './pc-order/pc-order.component';
import { XboxOrderComponent } from './xbox-order/xbox-order.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CartViewXboxComponent } from './cart-view-xbox/cart-view-xbox.component';
import { CartViewPsComponent } from './cart-view-ps/cart-view-ps.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BillingComponent } from './billing/billing.component';
import { PaymentComponent } from './payment/payment.component';
import { CashOnDeliveryComponent } from './cash-on-delivery/cash-on-delivery.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthServiceService } from './services/auth-service.service';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { AdminComponent } from './admin/admin.component';
import { NitendoComponent } from './nitendo/nitendo.component';
import { NitendoOrderComponent } from './nitendo-order/nitendo-order.component';
import { CartViewNitendoComponent } from './cart-view-nitendo/cart-view-nitendo.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    TermsComponent,
    PrivacyComponent,
    RefundComponent,
    DmcaComponent,
    NewsComponent,
    PricingComponent,
    FrequentComponent,
    ActivationComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PlayStationComponent,
    XboxComponent,
    PcComponent,
    PsOrderComponent,
    PcOrderComponent,
    XboxOrderComponent,
    CartViewComponent,
    CartViewXboxComponent,
    CartViewPsComponent,
    CheckoutComponent,
    BillingComponent,
    PaymentComponent,
    CashOnDeliveryComponent,
    ThankYouComponent,
    EmailVerificationComponent,
    LostPasswordComponent,
    AdminComponent,
    NitendoComponent,
    NitendoOrderComponent,
    CartViewNitendoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule 
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
