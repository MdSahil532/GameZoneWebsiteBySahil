import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivationComponent } from './activation/activation.component';
import { AdminComponent } from './admin/admin.component';
import { BillingComponent } from './billing/billing.component';
import { CartViewNitendoComponent } from './cart-view-nitendo/cart-view-nitendo.component';
import { CartViewPsComponent } from './cart-view-ps/cart-view-ps.component';
import { CartViewXboxComponent } from './cart-view-xbox/cart-view-xbox.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CashOnDeliveryComponent } from './cash-on-delivery/cash-on-delivery.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { DmcaComponent } from './dmca/dmca.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { FrequentComponent } from './frequent/frequent.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { NewsComponent } from './news/news.component';
import { NitendoOrderComponent } from './nitendo-order/nitendo-order.component';
import { NitendoComponent } from './nitendo/nitendo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { PcOrderComponent } from './pc-order/pc-order.component';
import { PcComponent } from './pc/pc.component';
import { PlayStationComponent } from './play-station/play-station.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PsOrderComponent } from './ps-order/ps-order.component';
import { RefundComponent } from './refund/refund.component';
import { RegisterComponent } from './register/register.component';
import { TermsComponent } from './terms/terms.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { XboxOrderComponent } from './xbox-order/xbox-order.component';
import { XboxComponent } from './xbox/xbox.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'refund', component: RefundComponent },
  { path: 'frequent', component: FrequentComponent },
  { path: 'activation', component: ActivationComponent },
  { path: 'dmca', component: DmcaComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'xbox', component: XboxComponent },
  { path: 'nitendo', component: NitendoComponent },
  { path: 'play-station', component: PlayStationComponent },
  { path: 'ps-order/:id', component: PsOrderComponent },
  { path: 'pc-order/:id', component: PcOrderComponent },
  { path: 'xbox-order/:id', component: XboxOrderComponent },
  { path: 'nitendo-order/:nId', component: NitendoOrderComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'lost-password', component: LostPasswordComponent },
  { path: 'cart-view/:name/:img/:price', component: CartViewComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
  {
    path: 'cart-view-xbox/:nameX/:imgX/:priceX',
    component: CartViewXboxComponent,
  },
  {
    path: 'cart-view-ps/:namePs/:imgPs/:pricePs',
    component: CartViewPsComponent,
  },
  {path: 'cart-view-nitendo/:nName/:nImg/:nPrice', component: CartViewNitendoComponent},
  { path: 'checkout/:name/:quan/:total', component: CheckoutComponent },
  { path: 'billing/:pname/:pquan/:ptotal', component: BillingComponent },
  { path: 'payment/:namep/:quanp/:totalp', component: PaymentComponent },
  {
    path: 'cash-on-delivery/:namec/:quanc/:totalc',
    component: CashOnDeliveryComponent,
  },
  { path: 'thank-you/:oname/:oquan/:ototal', component: ThankYouComponent },
  { path: 'pc', component: PcComponent },
  { path: 'news', component: NewsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
