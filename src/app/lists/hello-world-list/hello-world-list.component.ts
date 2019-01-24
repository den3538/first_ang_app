import { Component, OnInit } from '@angular/core';
import {Phrase} from './phrase';

const PHRASES: Phrase[] = [
  { value: 'Hello World', language: 'English' },
  { value: 'Привет Мир', language: 'Russian' },
  { value: 'Привіт Світ', language: 'Ukrainian' },
  { value: 'Hola Mundo', language: 'Spanish' },
  { value: 'Bonjour le monde', language: 'French' },
  { value: 'Hallo Welt', language: 'German' },
  { value: 'Ciao mondo', language: 'Italian' },
  { value: 'Witaj świecie', language: 'Polish' },
  { value: 'Hej världen', language: 'Swdish' },
  { value: 'Pozdravljen, svet', language: 'Slovenian' },
  { value: 'Прывітанне Сусвет', language: 'Belarusian' }
];

@Component({
  selector: 'app-hello-world-list',
  templateUrl: './hello-world-list.component.html',
  styleUrls: ['./hello-world-list.component.scss']
})

export class HelloWorldListComponent implements OnInit {
  phraseList: Phrase[] = PHRASES;
  selectedLanguage: string;

  selectElm(selected: Phrase) {
    this.selectedLanguage = selected.language;
  }

  removeCurrentVal(): void {
    this.selectedLanguage = null;
  }

  ngOnInit(): void {
  }

}
