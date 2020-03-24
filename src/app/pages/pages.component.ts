import { Component, OnInit } from '@angular/core';

// asi llamo cualqueir script quie este fuera de angular desde un archivo de js
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
