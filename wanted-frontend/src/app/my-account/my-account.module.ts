
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import {ReactiveFormsModule,FormBuilder} from '@angular/forms';

import {MyAccountComponent} from './index';


@NgModule({
    imports: [ReactiveFormsModule,CommonModule, SharedModule],
    declarations: [MyAccountComponent],
    exports: [MyAccountComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAccountModule {

  constructor( @Optional() @SkipSelf() parentModule:MyAccountModule) {
    if (parentModule) {
      throw new Error('MyAccountModule is already loaded. ');
    }

    console.log('Load MyAccountModule');
  }

}
