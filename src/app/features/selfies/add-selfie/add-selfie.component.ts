import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-selfie',
  templateUrl: './add-selfie.component.html',
  styleUrls: ['./add-selfie.component.css']
})
export class AddSelfieComponent implements OnInit {

  @Output()
  public cancelAdd: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  //informer le composant parent qu'il y a eu un click
  clickOnCancellingInput(): void {
    this.cancelAdd.emit({}); //si c'est nulle, ça ne génère aucun événement
  }

}
