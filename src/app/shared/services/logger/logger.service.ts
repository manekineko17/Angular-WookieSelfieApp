import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'  //racine du projet
})
export class LoggerService {

  constructor() {
  }

  //?: signifie que l'on peut ne rien mettre
  // à appliquer si on est prod
  log(message: string, obj?: unknown) {
    if (!environment.production) {
      console.log(message, obj);
    }
  }
}
