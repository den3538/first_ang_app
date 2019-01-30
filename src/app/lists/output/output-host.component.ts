import {Component} from '@angular/core';

@Component({
  selector: 'app-output-host',
  templateUrl: './output-host.component.html',
})
export class OutputHostComponent {

  tickHandler1(value): void {
    console.log('Handler 1 - ' + value);
  }

  tickHandler2(value): void {
    console.log('Handler 2 - ' + value);
  }
}
