import { Component } from '@angular/core';

@Component({
  selector: 'app-bidirectional',
  templateUrl: './bidirectional.component.html',
  styleUrls: ['./bidirectional.component.scss']
})
export class BidirectionalComponent {

  xValue = 0;
  yValue = 0;
  resultVal: number;

  disabledResult = true;


  public changeValues() {
    this.resultVal = this.xValue + this.yValue;
  }



  resetCalc() {
    this.xValue = 0;
    this.yValue = 0;
    this.changeValues();
  }

  constructor() { }


}
