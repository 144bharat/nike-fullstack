import { Component, signal } from '@angular/core';
import { NewArrivalsService } from '../../../services/new-arrivals.service';
import { MessageService } from 'primeng/api';
import { catchError } from 'rxjs';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-ad-upload-new-arrival',
  standalone: true,
  imports: [BlockUIModule,ProgressSpinnerModule,ToastModule],
  providers:[MessageService],
  templateUrl: './ad-upload-new-arrival.component.html',
  styleUrl: './ad-upload-new-arrival.component.css'
})
export class ADUploadNewArrivalComponent {
  blockedDocument=signal(false);
  constructor(private newArrivalsservice:NewArrivalsService,private messageService: MessageService) {}

  uploadjson(event:any)
  {
    const jsonfile = event.currentTarget.files[0];
    const formobj = new FormData();
    formobj.append("jsonfile",jsonfile);
    formobj.append("tablename","kids");
    this.blockedDocument.update(value=>true);
    this.newArrivalsservice.postnewarrivalsJSON(formobj).pipe(
      catchError((error)=>{
        throw error;
      })
    ).subscribe(res=>{
      if(res.result == "success")
      {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    })
    setTimeout(() => {
      this.blockedDocument.update(value=>false);
    }, 3000);
  }

  uploadcsv(event:any)
  {
    const CsvFile = event.currentTarget.files[0];
    const formobj = new FormData();
    formobj.append("csvfile",CsvFile);
    this.blockedDocument.update(value=>true);
    this.newArrivalsservice.postnewarrivalsCSV(formobj).pipe(
      catchError((error)=>{
        throw error;
      })
    ).subscribe(res=>{
      if(res.result == "success")
      {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    })
    setTimeout(() => {
      this.blockedDocument.update(value=>false);
    }, 3000);
  }
}
