import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, of } from 'rxjs';
import { Selfie } from 'src/app/models/selfie';
import { Wookie } from 'src/app/models/wookie';
import { environment } from 'src/environments/environment';
import { LoggerService } from '../logger/logger.service';

/**
* service gérant les seflies (CRUD)
*/
@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor(private loggerService: LoggerService, private httpClient: HttpClient) { }

  /**
   * retourne la liste complète des selfies (ici avec 2 éléments en dur)
   */
  getAll(): Selfie[] {

    const table: Selfie[] = []; //tableau qu'on instancie

    let selfie = new Selfie(); // let selfie reçoit new selfie, à qui on ajoute image, title...
    selfie.image = "";
    selfie.title = "My selfie";
    selfie.wookie = new Wookie();
    selfie.wookie.name = "Chewie";

    table.push(selfie); //ajout

    //ci-dessous correspond aux lignes du dessus
    table.push({
      image: "https://cdn.pixabay.com/photo/2019/09/14/00/23/chewbacca-4475120_1280.jpg",
      title: "my selfie",
      wookie: {
        name: "Chewie",
        selfies: []
      }
    });

    return table;
  }

  /** 
   * Retourne une observable pour s'inscrire à la réception des tableaux de wookies
   */
  getAllAsObservable(): Observable<Selfie[]> {
    /*    const myTable = this.getAll();
   
       //return of(myTable);
       return interval(1000).pipe(
         map(entier => [
           {
             image: "https://cdn.pixabay.com/photo/2019/09/14/00/23/chewbacca-4475120_1280.jpg",
             title: "my selfie" + entier,
             wookie: {
               name: "Chewie",
               selfies: []
             }
           }
         ])
       ); */

    /** httpClient permet d'avoir accès aux requêtes get, put ...
    * dans < > on indique ce qu'on renvoie -> un Observable d'un tableau de selfie
    * environnement est l'url */
    return this.httpClient.get<Selfie[]>(environment.apis.selfies.url);
  }
} 
