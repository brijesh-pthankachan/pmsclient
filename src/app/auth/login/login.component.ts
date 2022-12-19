import { Component } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService:AuthServiceService, private router:Router) {
  }
  handleLogin(form:any){
    this.authService.login(form.value).subscribe((res:any)=>{
      localStorage.setItem('token', res.data);
      let role=  JSON.parse(atob(res.data.split('.')[1]))['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    console.log(role);
    if (role==="Admin"){
      this.router.navigate(['admin/home']);
    }
    else if(role==="Doctor"){
      this.router.navigate(['doctor/home']);
    }
    })
  }
}
