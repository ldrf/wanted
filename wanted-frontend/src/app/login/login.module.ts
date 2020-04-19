
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import {ReactiveFormsModule,FormBuilder} from '@angular/forms';

import {LoginComponent} from './index';


@NgModule({
    imports: [ReactiveFormsModule,CommonModule, SharedModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {

  constructor( @Optional() @SkipSelf() parentModule:LoginModule) {
    if (parentModule) {
      throw new Error('LoginModule is already loaded. ');
    }

    console.log('Load LoginModule');
  }

}
