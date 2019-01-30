import { Component, OnInit } from '@angular/core';

import {Task} from './tasks';

const TASKS: Task[] = [
  {name: 'You',  value: 'Must to murder Andryha', position: 1, done: false},
  {name: 'He',  value: 'Must to murder Valera', position: 2, done: false},
  {name: 'She',  value: 'Must to murder Nikita', position: 3, done: false},
  {name: 'They',  value: 'Must to murder Leha', position: 4, done: false}
];


@Component({
  selector: 'app-list2-component',
  templateUrl: './list2-component.component.html',
  styleUrls: ['./list2-component.component.scss']
})


export class List2ComponentComponent implements OnInit {

  position: number = TASKS.length;
  singleTask: Task = {name: 'You',  value: 'Must to murder Andryha', position: this.position, done: false};
  taskList: Task[] = TASKS;

  addNewTask() {
    this.position++;
    this.setPosition();
    console.log('this.position', this.position);
    this.taskList.push(this.simpleClone(this.singleTask));
  }

  setPosition() {
    this.singleTask.position = this.position;
    console.log('this.singleTask.position', this.singleTask.position );
  }

  removeCurrentTask(task: Task) {
    this.position--;
    this.setPosition();
    console.log(this.taskList, this.position, this.singleTask, this.taskList.indexOf(task));
    this.taskList.splice(this.taskList.indexOf(task), 1);
  }

  toggleTask(task: Task) {
    // console.log('this.taskList[task]', this.taskList.filter(item => { (item === task) ? return this.taskList.indexOf(item) : '0');
    const elmIndex = (this.taskList.indexOf(task));
    console.log('elmIndex', elmIndex, this.taskList);
    this.taskList[elmIndex].done = !this.taskList[elmIndex].done;
  }

  simpleClone(obj: any) {
    return Object.assign({}, obj);
  }

  ngOnInit() {
  }

}
