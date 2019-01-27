import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.scss']
})
export class CounterListComponent {

  @Input()
    name = 'Default value';
  @Input()
    currentValue =  2;
  @Input()
    counterStep =  1;


  esIncrement() {
    this.currentValue = this.currentValue + this.counterStep;
  }

}
