import { Routes } from '@angular/router';
import { HomePageComponent } from './container/home-page/home-page.component';
import { CartComponent } from './component/cart/cart.component';
import { SignUpComponent } from './Credential/sign-up/sign-up.component';
import { FindStoreComponent } from './component/find-store/find-store.component';
import { NewArrivalsComponent } from './container/new-arrivals/new-arrivals.component';
import { AdminPageComponent } from './Pages/admin-page/admin-page.component';

export const routes: Routes = [
  {
    path: 'main',
    children: [
      // ... other child routes (home, cart, sign-up, find-store, new-arrival)
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'find-store',
        component: FindStoreComponent,
      },
      {
        path: 'new-arrival',
        component: NewArrivalsComponent,
      },
    ],
  },
  {
    path: 'admin', // Explicit admin route
    component: AdminPageComponent,
  },
  {
    path: '**', // Catch-all route (redirect to admin)
    redirectTo: 'main/home',
    pathMatch: 'full',
  },
];
