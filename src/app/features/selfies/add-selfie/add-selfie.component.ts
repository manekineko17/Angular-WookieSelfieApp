import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-add-selfie',
  templateUrl: './add-selfie.component.html',
  styleUrls: ['./add-selfie.component.css']
})
export class AddSelfieComponent implements OnInit {

  @Output()
  public cancelAdd: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  selfieToInform !: Selfie;

  constructor() { }

  ngOnInit(): void {
  }

  clickOnAdd(): void { }

  //informer le composant parent qu'il y a eu un click
  clickOnCancellingInput(): void {
    this.cancelAdd.emit({}); //si c'est nul, ça ne génère aucun événement. {} -> objet singleton
  }

}
