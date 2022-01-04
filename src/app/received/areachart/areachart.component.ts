import { Component, OnInit } from '@angular/core';
import { 
  ApexAxisChartSeries,
  ApexChart, 
  ApexXAxis, 
  ApexDataLabels,
  ApexTooltip,
  ApexStroke } from 'ng-apexcharts';
import { Api2Service } from '../shared/api2.service';

export type ChartOptions ={
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  toottip: ApexTooltip;
  dataLabels: ApexDataLabels;
}
@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.scss']
})
export class AreachartComponent implements OnInit {
  public chartOptions: Partial<ChartOptions> | any;
  constructor(private api: Api2Service) { }
  name: any;
  result: any;
  data:any=[];
  data2:any=[];
  data3: any=[];
  ngOnInit(): void {
    this.areachart();
    this.api.getDailyData()
    .subscribe(res=>{
      this.result= res;
      this.data =this.result.map((result:any)=>result.data);
      this.data2 =this.result.map((result:any)=>result.data2);
      this.data3 =this.result.map((result:any)=>result.data3)
      this.data = this.data[0];
      this.data2=this.data2[0];
      this.data3=this.data3[0];
      //console.log(this.data2); 
      this.areachart();
    })
  }
  areachart(){
    this.chartOptions={
      series: [
        {
          name: "series1",
          data: this.data,
        },
        {
          name: "series2",
          data: this.data2,
        },
        {
          name: "series3",
          data: this.data3,
        }
      ],
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    }
  };
}
