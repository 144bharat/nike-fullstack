import { Component, OnInit, signal } from '@angular/core';
import { NewArrivalsService } from '../../services/new-arrivals.service';
import { MessageService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [BlockUIModule,ProgressSpinnerModule,SkeletonModule],
  providers:[MessageService],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent implements OnInit{
  loading:boolean=false;
  newarrivalData:any;
  blockedDocument=signal(false);
  displayLimit!: number;
  displayedProducts: any;
  products: any;
  Category!: string;
  constructor(private newarrivalservice:NewArrivalsService,private messageservice:MessageService,private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.Category = params['Category'];
    })
    this.blockedDocument.update(value=>true);
    this.getnewarrivals();
    setTimeout(() => {
      this.blockedDocument.update(value=>false);
    }, 1000);
  }
  getnewarrivals()
  {
    this.newarrivalservice.getnewarrivals(this.Category).subscribe((res:any)=>{
      this.newarrivalData = res;
  })
}

}
