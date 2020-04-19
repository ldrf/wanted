import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-search-projects',
  templateUrl: './search-projects.component.html',
  styleUrls: ['./search-projects.component.scss']
})
export class SearchProjectsComponent implements OnInit {

  router:any;
  publications: Array<any> = [];
  filter: any = {};
  userCurrent:any = {};
  projects: any[] = [];

  constructor(protected route: ActivatedRoute, router:Router,
    protected localStorageService:LocalStorageService) {

      this.router = router;
  }

  ngOnInit() {

    this.userCurrent = this.localStorageService.retrieve('userCurrent');

  }

  search(){

  }

  rentVehicle(publication:any){
    this.router.navigate(["rents/rent-vehicle/new/"+publication.id]);
  }
  //rents/rent-vehicle/new/:id

}
