
import {HelloWorldListComponent, List2ComponentComponent} from './index';


export const routs = [
  {path: 'hello2', component: HelloWorldListComponent},
  {path: 'list2', component: List2ComponentComponent},
  {path: '', redirectTo: 'hello2', pathMatch: 'full'}
]
;
