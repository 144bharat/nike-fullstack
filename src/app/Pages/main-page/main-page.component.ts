import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HomePageComponent } from '../../component/home-page/home-page.component';
// import { CartComponent } from '../../component/cart/cart.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet], //,HomePageComponent,CartComponent
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  
}
