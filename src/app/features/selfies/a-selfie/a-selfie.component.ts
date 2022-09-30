import { Component, Input, OnInit } from '@angular/core';

import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-a-selfie',
  templateUrl: './a-selfie.component.html',
  styleUrls: ['./a-selfie.component.css']
})
export class ASelfieComponent implements OnInit {

  @Input()
  public aSelfie: Selfie;

  constructor() {
    this.aSelfie = new Selfie();
  }

  ngOnInit(): void {
  }

}
