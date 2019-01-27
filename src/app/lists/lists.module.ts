import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HelloWorldListComponent, List2ComponentComponent, CounterHostComponent, CounterListComponent} from './index';

@NgModule({
    imports: [CommonModule],
    declarations: [HelloWorldListComponent, List2ComponentComponent, CounterListComponent, CounterHostComponent],
    exports: [HelloWorldListComponent, List2ComponentComponent, CounterListComponent, CounterHostComponent]
})
export class ListsModule { }
