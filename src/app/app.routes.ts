import { Routes } from '@angular/router';
import { HomePageComponent } from './container/home-page/home-page.component';
import { CartComponent } from './component/cart/cart.component';
import { SignUpComponent } from './Credential/sign-up/sign-up.component';

export const routes: Routes = [
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },

  {
    path: 'home', 
    component:HomePageComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
{
  path:'sign-up',
  component:SignUpComponent
},
{
  path:'**',
  redirectTo:'home',
  pathMatch:'full'
}
];
