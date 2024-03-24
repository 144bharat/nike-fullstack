import { Component } from '@angular/core';
import { ADUploadNewArrivalComponent } from '../../component/admin/ad-upload-new-arrival/ad-upload-new-arrival.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [ADUploadNewArrivalComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
