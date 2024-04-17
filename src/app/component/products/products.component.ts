import { Component, OnInit, signal } from '@angular/core';
import { NewArrivalsService } from '../../services/new-arrivals.service';
import { MessageService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { ActivatedRoute } from '@angular/router';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ProductInterface } from '../../interfaces/product-interface';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [BlockUIModule,ProgressSpinnerModule,SkeletonModule,ScrollPanelModule,TriStateCheckboxModule],
  providers:[MessageService],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit{
  CountSkeleton:number[]=[1,2,3,4,5,6];
  newarrivalData:ProductInterface[]=[];
  blockedDocument=signal(false);
  Category!: string;
  TypeOfProductRoute!: string;
  constructor(private newarrivalservice:NewArrivalsService,private messageservice:MessageService,private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.Category = params['Category'];
      this.TypeOfProductRoute = params['Type'];
      this.blockedDocument.update(value=>true);
      this.GetProducts();
      setTimeout(() => {
        this.blockedDocument.update(value=>false);
      }, 1000);
    })
  }
  GetProducts()
  {
    this.newarrivalservice.GetProducts(this.Category,this.TypeOfProductRoute).subscribe((res:any)=>{
      this.newarrivalData = res;
      //Below line is to make the products list random.
      this.newarrivalData.sort(() => Math.random() - 0.5);

  })
}

}
