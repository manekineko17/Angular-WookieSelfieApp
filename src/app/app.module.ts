import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { SelfieModule } from './features/selfies/selfie.module';
import { SelfieListComponent } from './features/selfies/selfie-list/selfie-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SelfieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
