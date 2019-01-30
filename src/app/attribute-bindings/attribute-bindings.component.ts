import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-bindings',
  templateUrl: './attribute-bindings.component.html',
  styleUrls: ['./attribute-bindings.component.scss']
})
export class AttributeBindingsComponent implements OnInit {

  private readonly _fileSrc: string;
  private readonly _fileTitle: string;

  flag = true;
  constructor() {
    this._fileSrc = 'https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg';
    this._fileTitle = 'Чи, да?';
  }

   get FileSrc() {
    return this._fileSrc;
  }

  get fileTitle() {
    return this._fileTitle;
  }

  ngOnInit() {
  }

}
