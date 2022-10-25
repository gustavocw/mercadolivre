import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { HomeComponent } from './pages/home/home.component';
import { LogginComponent } from './pages/loggin/loggin.component';
import { SingupComponent } from './pages/singup/singup.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'cart', component:CartComponent},
  {path: 'loggin', component:LogginComponent},
  {path: 'compras', component:ComprasComponent},
  {path: 'singup', component:SingupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
