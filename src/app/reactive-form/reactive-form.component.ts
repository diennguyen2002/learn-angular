import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms"

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  frmGroup: FormGroup;
  constructor() { 
    this.frmGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log(this.frmGroup.value);
    // this.frmGroup.setValue({
    //   email: 'Nancy@yahoo.com',
    //   password: '123'
    // });
  }

}
