import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {

  private intervalObj: any = false;

  @Input()
  name = 'Timer 1';

  @Input()
  time = 0;

  @Input()
  interval = 1000;

  @Output()
    tick: EventEmitter <number> = new EventEmitter();

  start() {
    if (this.intervalObj) { return; }
    this.intervalObj = setInterval(() => { this.callback(); }, this.interval);
  }

  stop() {
    console.log('this.intervalObj', this.intervalObj);
    if (!this.intervalObj) { return; }
    clearInterval(this.intervalObj);
    this.intervalObj = false;
  }

  private callback () {
    this.time++;
    this.tick.emit(this.time);
  }

  ngOnInit() {
    console.log('inited output component');
  }

}
