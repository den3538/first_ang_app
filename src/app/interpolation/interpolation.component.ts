import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  public firstName: string;
  public secondName: string;
  public age: number;

  constructor() {
    this.firstName = 'Denya';
    this.secondName = 'Krasavchik';
    this.age = 12;
  }

  getFullName(): string {
    return ` ${this.firstName} ${this.secondName} всего то 22 годика`;
  }

  ngOnInit() {
  }

}
