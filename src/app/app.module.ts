import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloWorldListComponent, List2ComponentComponent} from './lists';
import {routs} from './lists';
import {ListsModule} from './lists';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldListComponent,
    List2ComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ListsModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
