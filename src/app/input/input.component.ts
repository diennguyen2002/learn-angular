import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  name: string = '';
  isChange: boolean = true;
  currentStyle = {color: 'red', backgroundColor:'yellow'};
  currentClass = {circle: this.isChange, square: !this.isChange};
  arrSubjects:string[] = ['Angular', 'React', 'Nodejs'];
  constructor() { }

  ngOnInit(): void {
  }

}
