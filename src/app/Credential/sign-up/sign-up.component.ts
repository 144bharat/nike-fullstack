import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import {catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,BlockUIModule,ProgressSpinnerModule,ToastModule],
  providers:[MessageService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  userRegisterJson:object={};
  constructor(private authservice:AuthService,private messageService: MessageService) { }
  
  blockedDocument=signal(false);
  
  signUpFormFunction(formJson:NgForm)
  {
    this.blockedDocument.update(value=>true);

    formJson.value['formtype'] = 'signup'; // Add the new key-value pair
    this.userRegisterJson = formJson.value;
    console.log(this.userRegisterJson);
    this.authservice.signupuser(this.userRegisterJson).pipe(
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
