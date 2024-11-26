import { Component, OnInit } from '@angular/core';
import { getCSSVariableValue } from 'src/app/_metronic/kt/_utils';
@Component({
  selector: 'app-charts-widget13',
  templateUrl: './charts-widget13.component.html',
})
export class ChartsWidget13Component implements OnInit{
  chartOptions: any = {};

  constructor() {}
  ngOnInit(): void {
    this.chartOptions = getChartOptions(100)
  }

}

function getChartOptions(height: number) {
           
        const labelColor = getCSSVariableValue('--bs-' + 'gray-800');
        const strokeColor = getCSSVariableValue('--bs-' + 'gray-300');

        return {
            series: [{
                name: 'Net Profit',
                data: [15, 25, 15, 40, 20, 50]
            }],
            grid: {
                show: false,
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }
            },
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
                gradient: {                        
                    opacityFrom: 0.4,
                    opacityTo: 0,
                    stops: [20, 120, 120, 120]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: ['#FFFFFF']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: strokeColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 60,
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val: number) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: ['#ffffff'],
            markers: {
                colors: [labelColor],
                strokeColor: [strokeColor],
                strokeWidth: 3
            }
        }
      }