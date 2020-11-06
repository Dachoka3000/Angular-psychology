import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: any;
  constructor(public _userService: UserService) { }

  ngOnInit() {
  	this.user = {
      username: '',
      email: '',
      password1: ''
      
    }
    this._userService.errors=[]
  }
  registerUser() {
  	console.log(this.user)
    this._userService.registerUser({'username': this.user.username,'email': this.user.email,'password': this.user.password1});
   }

}


