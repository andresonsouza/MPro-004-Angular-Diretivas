import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = ['Acsa', 'Adriele', 'Loide', 'Vagdon', 'Andreson', 'Naguiza', 'Ismael'];
  cities = [
    { name: 'Paudalho', state: 'PE'},
    { name: 'Carpina', state: 'PE' },
    { name: 'Limoeiro', state: 'PE' },
    { name: 'Recife', state: 'PE' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
