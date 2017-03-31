import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';
import { PaperElementsComponent } from './paper-elements/paper-elements.component';
import { POLYMER_ELEMENTS } from './shared/polymer-elements/index';

@NgModule({
  declarations: [
    AppComponent,
    PaperElementsComponent,
    DynamicChartComponent,
    POLYMER_ELEMENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
