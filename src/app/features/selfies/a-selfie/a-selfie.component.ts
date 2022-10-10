import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Selfie } from 'src/app/models/selfie';
import { SelfieService } from 'src/app/shared/services/selfies/selfie.service';

@Component({
  selector: 'app-a-selfie',
  templateUrl: './a-selfie.component.html',
  styleUrls: ['./a-selfie.component.css']
})
export class ASelfieComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  private _theSelfie!: Selfie;

  constructor(private _route: ActivatedRoute, private _selfieService: SelfieService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  ngOnInit(): void {
    // const subscription = this._route.params.subscribe(params => {
    //   const selfieId = params['id'];
    //   this._selfieService.getOne(selfieId).subscribe(selfie => this._theSelfie = selfie)
    // });

    const subscription = this._route.params.pipe(
      switchMap(params => {
        const selfieId = params['id'];
        return this._selfieService.getOne(selfieId);
      })
    ).subscribe(item => this._theSelfie = item);

    this.subscriptions.push(subscription);
  }
}
