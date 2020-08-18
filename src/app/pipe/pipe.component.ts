import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  ngay = new Date(2020, 8, 18);
  constructor() { }

  ngOnInit(): void {
  }

}
