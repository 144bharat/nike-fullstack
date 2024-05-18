import { Component, OnInit, signal } from '@angular/core';
import { NewArrivalsService } from '../../services/new-arrivals.service';
import { MessageService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ProductInterface } from '../../interfaces/product-interface';
import { StoreService } from '../../services/store.service';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';

import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [BlockUIModule,ProgressSpinnerModule,SkeletonModule,ScrollPanelModule,RouterLink,AccordionModule,CheckboxModule,FormsModule],
  providers:[MessageService],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit{
  Title:string = "";
  CountSkeleton:number[]=[1,2,3,4,5,6];
  newarrivalData:ProductInterface[]=[];
  blockedDocument=signal(false);
  Category!: string;
  TypeOfProductRoute!: string;
  filteredJsonParams:any={};
  FTRgender: string[] = []; // FTR means Filter.
  FTRprice: string[] = [];
  constructor(private newarrivalservice:NewArrivalsService,private messageservice:MessageService,private route: ActivatedRoute,private storeservice:StoreService) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.Title = params['label'];
      let TypeFilter = params['Type']?params['Type']:"";
      let CategoryFilter = params['Category']?params['Category']:"";
      let ItemCategoryFilter = params['ItemCategory']?params['ItemCategory']:"";
      let SubCategoryFilter = params['SubCategory']?params['SubCategory']:"";
      let AgeFilter = params['Age']?params['Age']:""; 
      this.blockedDocument.update(value=>true);
      this.storeservice.getProductsBasedOnRoute(TypeFilter,CategoryFilter,ItemCategoryFilter,SubCategoryFilter,AgeFilter)
      .subscribe(data => {
        this.newarrivalData = data;
        
      //Below line is to make the products list random.
      this.newarrivalData.sort(() => Math.random() - 0.5);
      });
      setTimeout(() => {
        this.blockedDocument.update(value=>false);
      }, 1000);
    })
  }

public FTRGenderGot(){
  console.log(this.FTRgender);
}

public FTRPriceGot(){
  console.log(this.FTRprice);
}
}