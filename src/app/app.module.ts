import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ListsModule, routs} from './lists';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { AttributeBindingsComponent } from './attribute-bindings/attribute-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    AttributeBindingsComponent,
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
