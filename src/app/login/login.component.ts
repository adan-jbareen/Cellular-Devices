import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users=[];
  loginForm : FormGroup;

  constructor(private userService:UsersService , private router: Router) {}

  ngOnInit(): void {
    this.users=this.userService.getUsers();
    this.createLoginForm();
    this.userService.getUser().subscribe((data) => {
      console.log(data);
      this.users=data;
    });
  }
  createLoginForm(){
    this.loginForm = new FormGroup({
      name: new FormControl ('',[Validators.required]),
      password: new FormControl ('',[Validators.required]),
    });
  }
  
  onSubmit(loginForm){
    for (let user of this.users){
      if(user.name==loginForm.value.name && user.password == loginForm.value.password){
        console.log('valid user');
        this.router.navigateByUrl('home');
        this.userService.nameUser=loginForm.value.name;
        return;
      }
    }
    console.log('Invalid user');
    window.alert('Your name or password incorrect!');
  }
}

