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
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent implements OnInit{
  CountSkeleton:number[]=[1,2,3,4,5,6];
  newarrivalData:ProductInterface[]=[];
  blockedDocument=signal(false);
  Category!: string;
  constructor(private newarrivalservice:NewArrivalsService,private messageservice:MessageService,private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.Category = params['Category'];
      this.blockedDocument.update(value=>true);
      this.getnewarrivals();
      setTimeout(() => {
        this.blockedDocument.update(value=>false);
      }, 1000);
    })
  }
  getnewarrivals()
  {
    this.newarrivalservice.getnewarrivals(this.Category).subscribe((res:any)=>{
      this.newarrivalData = res;
      //Below line is to make the products list random.
      this.newarrivalData.sort(() => Math.random() - 0.5);

  })
}

}
