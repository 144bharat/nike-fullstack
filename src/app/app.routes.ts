import { Routes } from '@angular/router';
import { HomePageComponent } from './container/home-page/home-page.component';
import { CartComponent } from './component/cart/cart.component';

export const routes: Routes = [  {
    path: 'home', 
    component:HomePageComponent
  },
  {
    path:'cart',
    component:CartComponent
  }];
