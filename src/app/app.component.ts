import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { AfterContentInit, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  changeForm: FormGroup;
  blurForm: FormGroup;

  constructor(private fb: FormBuilder){ }

  ngOnInit() {
    this.changeForm = this.fb.group({
      changeInput: [],
      changeChildInput: [],
    }, 
    {validator: {updateOn: 'change'}});

    this.blurForm = this.fb.group({
      blurInput: [],
      blurChildInput: [],
    }, 
    {validator: {updateOn: 'blur'}});
  }
}
