import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email:string = '';
  password: string = '';
  disableBtn: boolean = true;
constructor (
  private router: Router,
  private route: ActivatedRoute,
  private authService:  AuthService

) {}

listenToForm(event:any) {
  // console.log('event>>>', event)
  if (event.length>1) {
    this.disableBtn = false;
  }
}

routeToTable() {
  let payload = {
    email: this.email,
    password: this.password
  }
  this.authService.setUserCredential(payload)
  this.router.navigate(['/table'],{relativeTo:this.route}) 
}

}
