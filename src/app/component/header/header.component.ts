import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
[x: string]: any;
  Nav_fav_imgs:string = '../../../assets/icons/favorite.svg';
  Nav_bag_imgs:string = '../../../assets/icons/bag.svg';
}
