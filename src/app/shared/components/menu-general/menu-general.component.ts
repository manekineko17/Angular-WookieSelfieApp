import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {

  @ViewChild('searchZone', { static: false })
  searchZone: ElementRef;

  @Output()  //element sortant de type event
  launchResearch: EventEmitter<string> = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void { }

  search(): void {
    //console.log(this.searchZone.nativeElement.value);
    const researchedValue = (this.searchZone.nativeElement.value);

    this.launchResearch.emit(researchedValue);
  }

}
