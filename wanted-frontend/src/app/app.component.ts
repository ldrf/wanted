import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import { setTheme } from 'ngx-bootstrap/utils';
import {TranslateService} from '@ngx-translate/core';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    private translationLet: any;

    constructor( public location: Location, private router: Router, translate: TranslateService) {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('es');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('es');

      translate.get(['LOGIN','LOADING','DOWNLOADED','NOCONNECTION']).subscribe((translation: [string]) => {
        this.translationLet = translation;
    });

    setTheme('bs3');
    }

    ngOnInit() {

    }

}
