
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { LoginModule } from '../login/login.module'
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './index';


@NgModule({
    imports: [ReactiveFormsModule,CommonModule, SharedModule, ComponentsModule, LoginModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {

  constructor( @Optional() @SkipSelf() parentModule:HomeModule) {
    if (parentModule) {
      throw new Error('HomeModule is already loaded. ');
    }

    console.log('Load HomeModule');
  }

}
