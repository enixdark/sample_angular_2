import {Component} from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: `
    <div>
      {{ text }}
    </div>
  `
})
export default class HelloAngular {
  public text: string;
  constructor() {
    this.text = 'Hello Angular 2';
  }
}