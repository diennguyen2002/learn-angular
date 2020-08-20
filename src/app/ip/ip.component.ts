import { Component, OnInit } from '@angular/core';
import { IpService } from "../ip.service";

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css'],
  providers: [IpService]
})
export class IpComponent implements OnInit {
  ip: string = '';
  constructor(private ipService: IpService) { 
    // this.ipService.getIp()
    // .then(data => this.ip = data.ip);
  }

  ngOnInit(): void {
  }

}
