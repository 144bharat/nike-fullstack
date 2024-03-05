import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  justInAlternateImgSrc:string[]=["../../../assets/images/thumbnail1.png","../../../assets/images/thumbnail3.png"];

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
