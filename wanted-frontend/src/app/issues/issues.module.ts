
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { IssuesComponent } from './issues.component';


@NgModule({
    imports: [ReactiveFormsModule,CommonModule, SharedModule, DatepickerModule, BsDatepickerModule, NgbModule ],
    declarations: [IssuesComponent ],
    exports: [IssuesComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IssuesModule {

  constructor( @Optional() @SkipSelf() parentModule:IssuesModule) {
    if (parentModule) {
      throw new Error('IssuesModule is already loaded. ');
    }

    console.log('Load IssuesModule');
  }

}
