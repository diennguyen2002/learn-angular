import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  listPersons:any = [
    {name: 'Nguyen van a', age: 8},
    {name: 'Nguyen van b', age: 9},
    {name: 'Nguyen van c', age: 10},
    {name: 'Nguyen van d', age: 11},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
