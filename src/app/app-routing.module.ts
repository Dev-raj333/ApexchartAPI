import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Firstpage/login/login.component';
import { SignupComponent } from './Firstpage/signup/signup.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'login', component:LoginComponent},
  { path:'signup', component:SignupComponent },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)},
  { path:'received', loadChildren: () => import('./received/received.module').then(m =>m.ReceivedModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
