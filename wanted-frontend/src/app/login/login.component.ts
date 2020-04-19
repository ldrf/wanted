import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { UserResourceApiService } from '../shared/services/user-resource-api.service';
import { LocalStorageService } from 'ngx-webstorage';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  title = 'Carpnd';
  img = 'assets/public/img/carpnd2.jpg';
  myAppComponent : any
  userCurrent:any = {};
  entity:any = {};
  user: any;
  private loggedIn: boolean;
  @Input('homeComponent') homeComponent: HomeComponent;

  constructor( private router: Router,
    protected userResourceApiService:UserResourceApiService, protected localStorageService:LocalStorageService) { }

  ngOnInit() {

    this.localStorageService.store('userSocial', this.user);
    this.loggedIn = (this.user != null);
    // this.loadUser();
    if(this.loggedIn ){
      this.redirectToHome();
    }

    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(assets/public/img/carpnd2.jpg)';

  }

  login(){
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(/)';
    this.homeComponent = this.homeComponent;

    if(this.homeComponent != undefined){
      this.homeComponent.isNotLogin = false;
      this.homeComponent.isLogin = true;
    }
    this.loadUserForSocialNetwork();
    this.router.navigate(['/home']);
  }

  loadUser(user:any){

  }

  loadUserForSocialNetwork(){

    this.entity.idGoogle = this.user + "-" + this.user.id;
    this.entity.idFacebook = this.user + "-" + this.user.id;

    this.userResourceApiService.getUserForSocialNetwork(this.entity).subscribe(result => {
      console.log(result);
      this.userCurrent = result;
      this.localStorageService.store('userCurrent', this.user);

    });
  }

  redirectToHome(){
    if(this.loggedIn){
      var body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = 'url(/)';
      this.homeComponent = this.homeComponent;

      if(this.homeComponent != undefined){
        this.homeComponent.isNotLogin = false;
        this.homeComponent.isLogin = true;
      }
      this.loadUserForSocialNetwork();
      this.router.navigate(['/home']);
    }
  }

  signInWithGoogle(): void {

  }

  signInWithFB(): void {

  }

  signOut(): void {

  }

  onSubmit(){

  }

}
