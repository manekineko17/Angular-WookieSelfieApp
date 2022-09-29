import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { SelfieListComponent } from './features/selfies/selfie-list/selfie-list.component';
import { ASelfieComponent } from './features/selfies/a-selfie/a-selfie.component';
import { HttpClientModule } from '@angular/common/http';
import { AddSelfieComponent } from './features/selfies/add-selfie/add-selfie.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent,
    SelfieListComponent,
    ASelfieComponent,
    AddSelfieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
