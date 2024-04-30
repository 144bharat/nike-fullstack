import { Component, OnInit, signal } from '@angular/core';
import { NewArrivalsService } from '../../services/new-arrivals.service';
import { MessageService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ProductInterface } from '../../interfaces/product-interface';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ProductFilteringInterface } from '../../interfaces/product-filtering-interface';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [BlockUIModule,ProgressSpinnerModule,SkeletonModule,ScrollPanelModule,TriStateCheckboxModule,RouterLink],
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
        console.log(data);
        console.log(this.newarrivalData);
      });
      setTimeout(() => {
        this.blockedDocument.update(value=>false);
      }, 1000);
    })
  }
  GetProducts(ProductFilters:ProductFilteringInterface)
  {
    this.newarrivalservice.GetProducts(ProductFilters).subscribe((res:any)=>{
      this.newarrivalData = res;
      console.log(this.newarrivalData);
      //Below line is to make the products list random.
      this.newarrivalData.sort(() => Math.random() - 0.5);

  })
}

}




// ngOnInit(): void {
//   this.route.queryParams.subscribe(params=>{
//     console.log(JSON.stringify(params));
//     this.Title = params['label'];
//     this.filteredJsonParams.Type=params['Type']?params['Type']:"";
//     this.filteredJsonParams.Category=params['Category']?params['Category']:"";
//     this.filteredJsonParams.ItemCategory=params['ItemCategory']?params['ItemCategory']:"";
//     this.filteredJsonParams.SubCategory=params['SubCategory']?params['SubCategory']:"";
//     this.filteredJsonParams.Age=params['Age']?params['Age']:"";
    
//     this.blockedDocument.update(value=>true);
//     this.GetProducts(this.filteredJsonParams);
//     setTimeout(() => {
//       this.blockedDocument.update(value=>false);
//     }, 1000);
//   })
// }
// GetProducts(ProductFilters:ProductFilteringInterface)
// {
//   this.newarrivalservice.GetProducts(ProductFilters).subscribe((res:any)=>{
//     this.newarrivalData = res;
//     console.log(this.newarrivalData);
//     //Below line is to make the products list random.
//     this.newarrivalData.sort(() => Math.random() - 0.5);

// })
// }

