
import {HelloWorldListComponent, List2ComponentComponent, CounterHostComponent, OutputHostComponent} from './index';
import {InterpolationComponent} from '../interpolation/interpolation.component';
import {AttributeBindingsComponent} from '../attribute-bindings/attribute-bindings.component';


export const routs = [
  {path: 'hello2', component: HelloWorldListComponent},
  {path: 'list2', component: List2ComponentComponent},
  {path: 'list3', component: CounterHostComponent},
  {path: 'list4', component: OutputHostComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'attrBind', component: AttributeBindingsComponent},
  {path: '', redirectTo: 'hello2', pathMatch: 'full'}
]
;
