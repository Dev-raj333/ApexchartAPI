import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivedRoutingModule } from './received-routing.module';
import { ReceivedComponent } from './received.component';
import { CandelchartComponent } from './candelchart/candelchart.component';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AreachartComponent } from './areachart/areachart.component';
import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  declarations: [
    ReceivedComponent,
    CandelchartComponent,
    AreachartComponent,
    
  ],
  imports: [
    CommonModule,
    ReceivedRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    MaterialDesignModule
  ]
})
export class ReceivedModule { }
