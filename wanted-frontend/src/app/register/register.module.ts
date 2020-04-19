
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import {ReactiveFormsModule,FormBuilder} from '@angular/forms';

import {RegisterComponent} from './index';


@NgModule({
    imports: [ReactiveFormsModule,CommonModule, SharedModule],
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterModule {

  constructor( @Optional() @SkipSelf() parentModule:RegisterModule) {
    if (parentModule) {
      throw new Error('RegisterModule is already loaded. ');
    }

    console.log('Load RegisterModule');
  }

}
