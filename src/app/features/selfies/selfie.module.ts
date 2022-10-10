import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { ASelfieReadonlyComponent } from './a-selfie-readonly/a-selfie-readonly.component';
import { AddSelfieComponent } from './add-selfie/add-selfie.component';
import { SelfiesRoutingModule } from './selfies-routing.module';
import { ASelfieComponent } from './a-selfie/a-selfie.component';

@NgModule({
  declarations: [SelfieListComponent,
    ASelfieReadonlyComponent,
    AddSelfieComponent,
    ASelfieComponent],
  imports: [
    CommonModule,
    SharedModule,
    SelfiesRoutingModule
  ], exports: [
    SelfieListComponent,
    SelfiesRoutingModule
  ],
})
export class SelfieModule { }
