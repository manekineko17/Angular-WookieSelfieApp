import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Selfie } from 'src/app/models/selfie';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';
import { SelfieService } from 'src/app/shared/services/selfies/selfie.service';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit, OnDestroy {

  public selfieToAdd!: Selfie; //null, donc pas d'affichage. Mais au click le bouton d'affichera

  theSubscriptions: Subscription[] = [];

  /*instancing a new wookie: the line under comes from JS syntax:
* we wait for the same attributes for each wookie : */
  selfies: Selfie[] = [
    { image: 'https://cdn.pixabay.com/photo/2019/09/14/00/23/chewbacca-4475120_1280.jpg', title: "selfie title", wookie: { name: 'Chewie 1', selfies: [] } },
    { image: 'https://cdn.pixabay.com/photo/2019/09/14/00/23/chewbacca-4475120_1280.jpg', title: "selfie title", wookie: { name: 'Chewie 2', selfies: [] } },
    { image: 'https://cdn.pixabay.com/photo/2019/09/14/00/23/chewbacca-4475120_1280.jpg', title: "selfie title", wookie: { name: 'Chewie 3', selfies: [] } }
  ];

  //déclation d'une propriété input
  /*   @Input()
    filtre; */

  //le même input mais en version fonction exécutable:
  @Input()
  set filtre(value: string) {
    console.log('SelfieListComponennt', value);
  };

  constructor(private loggerService: LoggerService, private selfieService: SelfieService) { }

  ngOnDestroy(): void {
    this.theSubscriptions.forEach(item => item.unsubscribe());
  }

  ngOnInit(): void {
    //this.selfies = this.selfieService.getAll();
    const subscriptionsInProgress = this.selfieService.getAllAsObservable().subscribe(aTable => this.selfies = aTable);
    this.theSubscriptions.push(subscriptionsInProgress);
  }

  askBroadcastToAddSelfie(): void {
    this.selfieToAdd = new Selfie;
  }

  hideZoneInputSelfie(): void {
    this.selfieToAdd != null;
  }
}

