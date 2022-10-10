import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { ASelfieComponent } from './a-selfie/a-selfie.component';

const routes: Routes = [
  {
    path: 'selfies', component: SelfieListComponent
  },
  {
    path: 'selfies/see/:id', component: ASelfieComponent
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
