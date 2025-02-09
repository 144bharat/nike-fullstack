import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HomeCarouselComponent } from '../../component/home-carousel/home-carousel.component';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UpperCasePipe,HomeCarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent{
  justInAlternateImgSrc:string[]=["../../../assets/images/ice-skate1.jpg","../../../assets/images/green-forest1.jpg"];

  intervalId:any=0;
  currentImg = this.justInAlternateImgSrc[0];
  counter = 0;
  
  constructor(private storeservice:StoreService) {
    this.intervalId = setInterval(() => {
        this.counter = (this.counter + 1) % 2;
        this.currentImg = this.justInAlternateImgSrc[this.counter];
      }, 1000);
    }
    ngOnDestroy(): void {
      if(this.intervalId) clearInterval(this.intervalId);
    }
}
