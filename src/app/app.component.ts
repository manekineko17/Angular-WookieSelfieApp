import { Component } from '@angular/core';
import { LoggerService } from './shared/services/logger/logger.service';

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
  valueToResearch = "";

  /* la syntaxe TS d'un contructeur remplace cette syntaxe là:
  * private loggerService: LoggerService = null; -> déclaration comme attribut de classe
  * constructor(loggerService: LoggerService) {
  *    this.loggerService = loggerService;
  * }
  */
  constructor(private loggerService: LoggerService) {
  }

  researchSelfies(value: string) {
    this.loggerService.log('AppComponent', value);
    this.valueToResearch = value; //affectation de la valeur pour la sauvegarder 
  }
}
