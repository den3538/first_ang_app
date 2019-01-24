import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloWorldListComponent, List2ComponentComponent } from './index';

@NgModule({
    imports: [CommonModule],
    declarations: [HelloWorldListComponent, List2ComponentComponent],
    exports: [HelloWorldListComponent, List2ComponentComponent]
})
export class ListsModule { }
