import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    entity:any = {};
    user:any;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
      protected localStorageService:LocalStorageService) { }

    ngOnInit() {

    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.localStorageService.store('userSocial', this.user);
      this.router.navigate(['/login']);
    }
}
