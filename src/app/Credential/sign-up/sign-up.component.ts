import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FloatLabelModule,FormsModule,BlockUIModule,ProgressSpinnerModule,HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private http:HttpClient) { }
  
  blockedDocument=signal(false);
  signUpFormFunction(formJson:NgForm)
  {
    this.blockedDocument.update(value=>true);
    setTimeout(() => {
      this.blockedDocument.update(value=>false);
    }, 3000);
    // this.http.post('',formJson).subscribe((res)=>{
    //   if(res.result)
    //   {

    //   }else{
    //     alert(res.message);
    //   }
    // })
  }
}
