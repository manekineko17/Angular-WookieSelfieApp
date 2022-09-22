import { Component, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit {
  /*instancing a new wookie: the line under comes from JS syntax:
* we wait for the same attributes for each wookie : */
  selfies: Selfie[] = [
    { image: 'https://images.unsplash.com/photo-1627962996373-f5bf00bc7a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80', title: "selfie title", wookie: { name: 'Chewie 1', selfies: [] } },
    { image: 'https://images.unsplash.com/photo-1627962996373-f5bf00bc7a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80', title: "selfie title", wookie: { name: 'Chewie 2', selfies: [] } },
    { image: 'https://images.unsplash.com/photo-1627962996373-f5bf00bc7a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80', title: "selfie title", wookie: { name: 'Chewie 3', selfies: [] } }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
