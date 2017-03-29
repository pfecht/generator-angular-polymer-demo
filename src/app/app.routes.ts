import { PaperElementsComponent } from './paper-elements/paper-elements.component';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';
import {Routes} from "@angular/router";

export const appRoutes: Routes = [
  { path: 'dynamic-chart', component: DynamicChartComponent },
  //{ path: 'dynamic-input',      component: DynamicInputComponent },
  { path: 'paper-elements',      component: PaperElementsComponent },
  { path: '**', component: DynamicChartComponent }
];