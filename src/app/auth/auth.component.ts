import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form!: FormGroup;
  Signup= false;


  constructor(
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let mailID ="";
    let password ="";
    let rePassword="";

    this.form = new FormGroup({
      userMail: new FormControl(mailID, [Validators.required]),
      password: new FormControl(password, [Validators.required]),
      password1: new FormControl(rePassword, [Validators.required]),
    });
  
  }


  onSignup(){
    const mailID = this.form.value.userMail;
    const password = this.form.value.password;
    const rePassword = this.form.value.password1;
    console.log(this.form.value.userMail);
    console.log(this.form.value.password);
    console.log(this.form.value.password1);

    if(password === rePassword){
      console.log("Signup Successfull")
    }
    else{
      console.log("Invaid Password")
    }
  }

}
