
import {HelloWorldListComponent, List2ComponentComponent, CounterHostComponent} from './index';


export const routs = [
  {path: 'hello2', component: HelloWorldListComponent},
  {path: 'list2', component: List2ComponentComponent},
  {path: 'list3', component: CounterHostComponent},
  {path: '', redirectTo: 'hello2', pathMatch: 'full'}
]
;
