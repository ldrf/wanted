
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { NotificationsComponent } from './notifications.component';


@NgModule({
    imports: [ReactiveFormsModule,CommonModule, SharedModule],
    declarations: [NotificationsComponent],
    exports: [NotificationsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationModule {

  constructor( @Optional() @SkipSelf() parentModule:NotificationModule) {
    if (parentModule) {
      throw new Error('NotificationModule is already loaded. ');
    }

    console.log('Load NotificationModule');
  }

}
