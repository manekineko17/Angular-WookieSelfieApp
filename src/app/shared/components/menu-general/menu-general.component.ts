import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {

  @ViewChild('searchZone', { static: false })
  searchZone: ElementRef;

  constructor() {
    this.searchZone = new ElementRef(undefined);
  }

  ngOnInit(): void { }

  search(): void {
    console.log(this.searchZone.nativeElement.value);
  }

}
