import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CHILD_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ChildComponent),
  multi: true
};

@Component({
  selector: 'app-child',
  template: `
  <input 
  type="text" 
  [(ngModel)]="value" 
  (ngModelChange)="updateModel()" 
  (blur)="onModelTouched()"
  >
  `,
  providers: [CHILD_VALUE_ACCESSOR]
})
export class ChildComponent implements ControlValueAccessor {

  value = '';

  public onModelChange = (fn: any) => {
    console.log("change : ", fn);
  };

  public onModelTouched = () => {
    console.log("on tounch");
  };

  writeValue(obj: string): void {
    this.value = obj;
    console.log("write value");
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
    console.log("registerOnchange");
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
    console.log("registerOnTouch");
  }

  updateModel() {
    this.onModelChange(this.value);
  }
}
