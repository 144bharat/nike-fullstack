import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { HomeCarouselInterface } from '../../interfaces/home-carousel-interface';
@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CarouselModule,TagModule,ButtonModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent implements OnInit {

  products: HomeCarouselInterface[]=[];

  responsiveOptions: {breakpoint:string,  numVisible:number,  numScroll: number}[]=[];
  // constructor(private productService: ProductService) {}

  ngOnInit() {
      // this.productService.getProductsSmall().then((products) => {
      //     this.products = products;
      // });
    this.products= [
        { name: "Nike Basketball", img: "home-carousel1.jpg", slogan:"Styles made for your game.", button: "Shop" },
        { name: "Nike Golf", img: "home-carousel2.jpg", slogan:"Conquer any course with style.", button: "Shop" },
        { name: "Nike Trail", img: "home-carousel3.jpg", slogan:"Gear that leads to wild places.", button: "Shop" },
        { name: "Nike Tennis", img: "home-carousel4.jpg", slogan:"Serve up in style.", button: "Shop" },
        { name: "Nike  Football", img: "home-carousel5.jpg", slogan:"Bring mad style to the pitch with the latest gear.", button: "Shop" },
      ];

     this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }
}
