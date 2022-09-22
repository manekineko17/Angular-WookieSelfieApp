import { Component } from '@angular/core';

//class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wookie selfie';
  subTitle = 'Le wookie dans toute sa splandeur';
  logoAffiche = true;
}
