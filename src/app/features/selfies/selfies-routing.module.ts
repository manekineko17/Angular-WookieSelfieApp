import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelfieListComponent } from './selfie-list/selfie-list.component';

const routes: Routes = [
  {
    path: 'selfies', component: SelfieListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SelfiesRoutingModule { }
