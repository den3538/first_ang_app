import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloWorldListComponent, List2ComponentComponent, CounterListComponent } from './index';
import { CounterListComponent } from './counter-list/counter-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HelloWorldListComponent, List2ComponentComponent, CounterListComponent],
    exports: [HelloWorldListComponent, List2ComponentComponent, CounterListComponent]
})
export class ListsModule { }
