import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HomeCarouselComponent } from '../../component/home-carousel/home-carousel.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UpperCasePipe,HomeCarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  justInAlternateImgSrc:string[]=["../../../assets/images/thumbnail1.png","../../../assets/images/thumbnail4.svg"];

  intervalId:any=0;
  currentImg = this.justInAlternateImgSrc[0];
  counter = 0;
  
  constructor() {
    this.intervalId = setInterval(() => {
        this.counter = (this.counter + 1) % 2;
        this.currentImg = this.justInAlternateImgSrc[this.counter];
      }, 1000);
    }
  
    ngOnDestroy(): void {
      if(this.intervalId) clearInterval(this.intervalId);
    }
}
