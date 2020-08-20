import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
    {id: "1", name: "Nguyen Van A", phone: "1234567890"},
    {id: "2", name: "Nguyen Van B", phone: "2234567890"},
    {id: "3", name: "Nguyen Van C", phone: "3234567890"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
