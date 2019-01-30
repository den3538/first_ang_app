import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HelloWorldListComponent, List2ComponentComponent, CounterHostComponent, CounterListComponent, OutputComponent, OutputHostComponent} from './index';

@NgModule({
    imports: [CommonModule],
    declarations: [HelloWorldListComponent, List2ComponentComponent, CounterListComponent, CounterHostComponent, OutputComponent, OutputHostComponent],
    exports: [HelloWorldListComponent, List2ComponentComponent, CounterListComponent, CounterHostComponent, OutputHostComponent, OutputComponent]
})
export class ListsModule { }
