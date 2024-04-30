import { Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { CartComponent } from './component/cart/cart.component';
import { SignUpComponent } from './Credential/sign-up/sign-up.component';
import { FindStoreComponent } from './component/find-store/find-store.component';
import { ProductsComponent } from './component/products/products.component';
import { AdminPageComponent } from './Pages/admin-page/admin-page.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

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
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'product-detail',
        component: ProductDetailComponent
      }
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
