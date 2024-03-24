import { Component, OnInit, signal } from '@angular/core';
import { NewArrivalsService } from '../../services/new-arrivals.service';
import { MessageService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [BlockUIModule,ProgressSpinnerModule],
  providers:[MessageService],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent implements OnInit{
  newarrivalData:any;
  blockedDocument=signal(false);
  constructor(private newarrivalservice:NewArrivalsService,private messageservice:MessageService) {}
  ngOnInit(): void {
    this.blockedDocument.update(value=>true);
    this.getnewarrivals();
    setTimeout(() => {
      this.blockedDocument.update(value=>false);
    }, 1000);
  }
  getnewarrivals()
  {
    this.newarrivalservice.getnewarrivals().subscribe((res:any)=>{
      this.newarrivalData = res;
  })
}
}
