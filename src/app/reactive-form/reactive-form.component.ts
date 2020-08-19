import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  frmGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.frmGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email, gmailValidator]],
      password: '',
      subjects: this.fb.group({
        nodejs: false,
        angular: false,
        reactjs: false
      })
    });
  }

  onSubmit() {
    console.log(this.frmGroup.value);
  }
}

function gmailValidator(formControl: FormControl){
  if(formControl.value.includes('gmail.com')){
    return null;
  }
  return {gmail: true};
}
