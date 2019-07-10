import { Component, Input, ViewChild, OnInit, ContentChild } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'hello',
  template: `<div id='border'>
    <h1>Base Component</h1>
    <p>ng-content could be used for projecting dynamic content within a component</p>
    {{this.testTestu}}
    <ng-content>
      <!-- Dynamic content goes here -->
    </ng-content>
  </div>`,
  styles: [`h1 { font-family: Lato; } #border { border: 2px solid black; padding: 5px;}`]
})
export class HelloComponent implements OnInit {
 @ContentChild(TestComponent) inputComponent: TestComponent
  public testTestu: string;
  @Input() name: string;

  ngOnInit(): void{
      this.testTestu = this.inputComponent.testProperty;
  }
}
