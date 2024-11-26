import { Component, OnInit } from '@angular/core';
import { getCSSVariableValue } from 'src/app/_metronic/kt/_utils';
@Component({
  selector: 'app-charts-widget14',
  templateUrl: './charts-widget14.component.html',
})
export class ChartsWidget14Component implements OnInit{
  chartOptions: any = {};

  constructor() {}
  ngOnInit(): void {
    this.chartOptions = getChartOptions(100)
  }

}

function getChartOptions(height: number) {
           
        const labelColor = getCSSVariableValue('--bs-gray-800');

        return  {
            series: [{
                name: 'Inflation',
                data: [1, 2.1, 1, 2.1, 4.1, 6.1, 4.1, 4.1, 2.1, 4.1, 2.1, 3.1, 1, 1, 2.1]
            }],
            chart: {
                fontFamily: 'inherit',
                height: height,
                type: 'bar',
                toolbar: {
                    show: false
                }                             
            },
            grid: {
                show: false,
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }
            },                
            colors: ['#ffffff'],         
            plotOptions: {
                bar: {                    
                    borderRadius: 2.5,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                    columnWidth: '20%'                             
                }
            },            
            dataLabels: {
                enabled: false,
                formatter: function(val:number) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },          
            xaxis: {
                labels: {
                    show: false,
                },
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
                position: 'top',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    show: false
                },
                tooltip: {
                    enabled: false
                }
            },
            yaxis: {
                show: false,
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                    background: labelColor
                },
                labels: {
                    show: false,
                    formatter: function(val:number) {
                        return val + "%";
                    }
                }                
            }		
        }
      }