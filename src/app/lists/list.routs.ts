
import {HelloWorldListComponent, List2ComponentComponent, CounterListComponent} from './index';


export const routs = [
  {path: 'hello2', component: HelloWorldListComponent},
  {path: 'list2', component: List2ComponentComponent},
  {path: 'list3', component: CounterListComponent},
  {path: '', redirectTo: 'hello2', pathMatch: 'full'}
]
;
