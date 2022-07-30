import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  myRecForm: FormGroup;

  submitted = false;

  onSubmit(myLoginForm: NgForm) {
    this.submitted = true;
    console.log(myLoginForm);
    myLoginForm.resetForm();
  }

  onClose(myLoginForm: NgForm) {
    myLoginForm.resetForm();
  }

  onRecSubmit() {}

  onRecClose() {}

  UserName = '';
  password = '';

  ngOnInit(): void {
    this.myRecForm = new FormGroup({
      fname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6),
      ]),
      lname: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(6),
      ]),
      contact: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      pswd: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      cnfpswd: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
