import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    collapse: boolean;
    items: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', collapse:false, items:[] },
    { path: 'my-account', title: 'My Account',  icon:'person', class: '', collapse:false, items:[] },
    { path: 'users', title: 'Users',  icon:'supervisor_account', class: '', collapse:false, items:[] },
    { path: 'projects', title: 'My projects',  icon:'content_paste', class: '', collapse:true, items:[] },
    { path: 'clients', title: 'Clients',  icon:'person', class: '', collapse:false, items:[] },
    { path: 'issues', title: 'Issues',  icon:'library_books', class: '', collapse:true, items:[]},
    { path: 'artifacts', title: 'Artifacts',  icon:'library_books', class: '', collapse:true, items:[]},
    { path: 'configure-notifications', title: 'Config. Notifications',  icon:'notifications', class: '', collapse:false, items:[] },
    { path: 'links-utiles', title: 'Links utiles',  icon:'link', class: '', collapse:false, items:[] },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  routerPath($event:any, menuItem:any){

    console.log("$event", $event);
    this.router.navigate(['/'+menuItem.path]);

  }

}
