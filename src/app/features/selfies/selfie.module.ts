import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { ASelfieComponent } from './a-selfie/a-selfie.component';
import { AddSelfieComponent } from './add-selfie/add-selfie.component';

@NgModule({
  declarations: [SelfieListComponent,
    ASelfieComponent,
    AddSelfieComponent],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    SelfieListComponent
  ],
})
export class SelfieModule { }
