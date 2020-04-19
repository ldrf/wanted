import { Component, OnInit } from '@angular/core';
import { UserResourceApiService } from '../shared/services/user-resource-api.service';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../model/User';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ErrorHandler } from '../shared/utils/util/util.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  entity:User = {};
  router:any;
  userSocial:any;
  isCreate:boolean = true;
  errorMessage:string

  constructor(protected route: ActivatedRoute, router:Router, protected userResourceApiService:UserResourceApiService,
     protected localStorageService:LocalStorageService, private errorHandler: ErrorHandler,) {

    this.router = router;

  }

  ngOnInit() {

    this.userSocial = this.localStorageService.retrieve('userSocial');

  }

  loadUserForSocialNetwork(userSocial:any){

  }

  updateAccount($event:any){

  }

  ngAfterViewInit(){

  }

}
