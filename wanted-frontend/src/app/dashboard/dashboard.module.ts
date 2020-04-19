
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule,FormBuilder } from '@angular/forms';

// import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './index';


@NgModule({
    imports: [ReactiveFormsModule,CommonModule, SharedModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {

  constructor( @Optional() @SkipSelf() parentModule:DashboardModule) {
    if (parentModule) {
      throw new Error('DashboardModule is already loaded. ');
    }

    console.log('Load DashboardModule');
  }

}
