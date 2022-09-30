import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { ASelfieComponent } from './a-selfie/a-selfie.component';
import { AddSelfieComponent } from './add-selfie/add-selfie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelfieListComponent,
    ASelfieComponent,
    AddSelfieComponent],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    SelfieListComponent
  ],
})
export class SelfieModule { }
