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
  passingData:ProductInterface[]=[];
  completeData: ProductInterface[]=[];
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
        this.completeData = data; //This completeData is kept as a super data. And whole appication will use this super data by assigning it to the other variables and displayed.
        this.passingData = this.completeData; // Here we are assigning data into passingData variable to pass it to the product html.
        console.log(1 + " -- " + JSON.stringify(data));
      //Below line is to make the products list random.
      this.passingData.sort(() => Math.random() - 0.5);
      });
      setTimeout(() => {
        this.blockedDocument.update(value=>false);
      }, 1000);
    })
  }

public FTRGenderGot(){
  console.log(this.FTRgender);
  debugger;
  if(this.FTRgender.length > 0)
  {
    this.passingData = this.completeData.filter(({Category}) => this.FTRgender.includes(Category)) //Here either we got the filtered data based on gender or we got complete data.
    console.log("\n My gender filtered Data: \n" + JSON.stringify(this.passingData));
  }else{
    this.passingData = this.completeData;
  }
}

public FTRPriceGot(){
  console.log(this.FTRprice);
  if(this.FTRprice.length > 0){
    this.passingData = this.completeData.filter(({ Price }) => {
      return this.FTRprice.some((condition) => {
        if (condition === 'Under_2500') {
          return Price < 2500; // Handle "Under_2500"
        } else if (condition === '2501-7500') {
          const [min, max] = [2501, 7500];
          return Price >= min && Price <= max; // Handle "2501-7500"
        } else if (condition === '7501-12999') {
          const [min, max] = [7501, 12999];
          return Price >= min && Price <= max; // Handle "7501-12999"
        } else if (condition === 'Over_13000') {
          return Price > 13000; // Handle "Over_13000"
        } else {
          return true; // Include all data if no specific condition is matched
        }
      });
    });
  }else{
    this.passingData = this.completeData;
  }
}
}