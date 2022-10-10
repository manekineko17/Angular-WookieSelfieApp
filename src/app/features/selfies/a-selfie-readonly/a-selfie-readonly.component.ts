import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-a-selfie-readonly',
  templateUrl: './a-selfie-readonly.component.html',
  styleUrls: ['./a-selfie-readonly.component.css']
})
export class ASelfieReadonlyComponent implements OnInit {

  @Input()
  public aSelfie: Selfie;

  constructor(private _router: Router) {
    this.aSelfie = new Selfie();
  }

  ngOnInit(): void {
  }

  clickForBattle() {
    this._router.navigate(['/battles/new']);
  }

  clickToSee() {
    this.aSelfie.id = 2;
    this._router.navigate(['/selfies/see', 2]);
  }

}
