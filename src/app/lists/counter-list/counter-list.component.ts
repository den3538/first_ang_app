import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.scss']
})
export class CounterListComponent implements OnInit {

  @Input()
  name = 'Default value';

  @Input()
  value = 2;

  @Input()
  counterStep = 1;

  esIncrement() {
    this.value = this.value + this.counterStep;
  }
  constructor() { }

  ngOnInit() {
  }

}
