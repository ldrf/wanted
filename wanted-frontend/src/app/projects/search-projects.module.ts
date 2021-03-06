
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { SearchProjectsComponent } from './search-projects.component';


@NgModule({
    imports: [ReactiveFormsModule,CommonModule, SharedModule, DatepickerModule, BsDatepickerModule, NgbModule ],
    declarations: [SearchProjectsComponent ],
    exports: [SearchProjectsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsModule {

  constructor( @Optional() @SkipSelf() parentModule:ProjectsModule) {
    if (parentModule) {
      throw new Error('RentModule is already loaded. ');
    }

    console.log('Load RentModule');
  }

}
