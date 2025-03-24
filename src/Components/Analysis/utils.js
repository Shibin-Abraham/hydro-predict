import moment from "moment";
import { damAlertColor } from "../DashBoard/utils";

export const getColor = ({theme})=>{

    switch(theme) {
        case 'blue':
          return "#8575ff79"
        case 'green':
          return "#00b30079"
        case 'red':
          return "#f0757579"
        case 'purple':
          return "#8040bf79"
        case 'gray':
          return "#59595979"
        default:
          // code block
      }
}

export const data = [
  { day: '2023-01-01', value: 10 },
  { day: '2023-01-02', value: 30 },
  { day: '2023-01-03', value: 20 },
  // Add more data here
];
export const donutStyles=({data})=>{
  const waterLevel = parseFloat(data?.dam_data?.[0]?.water_level)
  const inflow = parseFloat(data?.dam_data?.[0]?.inflow)
  const powerHouseDischarge = parseFloat(data?.dam_data?.[0]?.power_house_discharge)
  const spillwayRelease = parseFloat(data?.dam_data?.[0]?.spillway_release)
  const totalOutflow = powerHouseDischarge+spillwayRelease
  
  return{      
    series: [waterLevel, inflow, powerHouseDischarge, spillwayRelease, totalOutflow],
    options: {
      chart: {
        width: 600,
        height:600,
        type: 'donut',
      },
      colors: ['#ff0d3e', '#23d823', '#715ff8', '#F4C724', '#B833FF'],
      labels: ['Water Level', 'Inflow', 'Power Discharge', 'Spillway release', 'Total Outflow'],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        position: 'right',  // Place legend to the right
        floating: false,    
        offsetY: -15,         // Center vertically
        offsetX: -5, 
        fontSize:'10px', 
        formatter: function(val, opts) {
          return " &nbsp;&nbsp;"+val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'center'
          }
        }
      }]
    },
} 
}

export const inflowStyles ={
          
    series: [{
      name:'inflow',
      data: [31.1, 40, 28, 151, 42, 109, 100]
    }, {
      name:'rainfall',
      data: [11, 32, 45, 0, 34, 52, 41]
    },],
    options: {
      chart: {
        width:'100%',
        height: '100%',
        type: 'area',
        toolbar: {
          show: false 
      },
      offsetX:0,  
      offsetY: -20
      },
      grid: {
        show: true,  
        borderColor: '#7d8da121', 
        strokeDashArray: 3,   
        yaxis: {
          lines: {
            show: true 
          }
        },
        xaxis: {
          lines: {
            show: true 
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z',
          ],
          labels: {
            style: {
              fontSize: '10px',
            },
          },
        
      },
      
      yaxis: {
        show: false  // Hides the left-side Y-axis numbers
    },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      legend: {
        show: false  // Hides the legend buttons
    },
    colors:['#715ff8','#23d823']
    },
}

export const getWaterLevelStyles = ({mode,color,data})=>{
  const redLevel = data?.dam_data?.[0]?.red_level || "0"
  // const orangeLevel = data?.dam_data?.[0].orange_level
  // const blueLevel = data?.dam_data?.[0].blue_level
  const seriesData = (data?.dam_data?.map(item => item.water_level) || [0,0,0,0,0,0]).reverse();
const categories = (data?.dam_data?.map(item => item.date) || ['null','null','null','null','null','null']).reverse();
  return {
    series: [{
      name: 'water level',
      data: seriesData, //[40.3, 42.1, 55.0, 60.1, 55.0, 53.6, 53.2, 52.3, 59.4, 60.8, 65.5, 70.2]
    }],
  
    options: {
      chart: {
        height: '100%',
        type: 'bar',
      },
      tooltip: {
        theme: mode
      },
      plotOptions: {
        bar: {
          borderRadius: 2,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + " m";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#595959"]
        }
      },
      colors:[color],
      xaxis: {
        categories: categories, //["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: color,
              colorTo: "#ffffff",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + " m";
          }
        }
      },
      grid: {
        borderColor: '#7d8da121', 
        strokeDashArray: 3,    
    },
    annotations: {
      yaxis: [
        {
          y: redLevel,  
          borderColor: '#FF0000',  // Line color
          strokeDashArray: 3,  // Makes it a dashed line
          label: {
            borderColor: '#FF0000',
            style: {
              color: '#fff',
              background: '#FF0000',
              fontSize: '10px'
            },
            text: 'red level',
          },
        },
        // {
        //   y: orangeLevel,  
        //   borderColor: 'orange',  // Line color
        //   strokeDashArray: 1,  // Makes it a dashed line
        //   label: {
        //     borderColor: 'orange',
        //     style: {
        //       color: '#fff',
        //       background: 'orange',
        //       fontSize: '10px'
        //     },
        //     text: 'orange level',
        //     offsetX: -540,
        //   },
        // },
        // {
        //   y: blueLevel,  
        //   borderColor: 'blue',  // Line color
        //   strokeDashArray: 3,  // Makes it a dashed line
        //   label: {
        //     borderColor: 'blue',
        //     style: {
        //       color: '#fff',
        //       background: 'blue',
        //       fontSize: '10px'
        //     },
        //     text: 'blue level',
        //     offsetX: -100,
        //   },
        // },
      ],
    },
    },
  }
}

export const getCardData = ({item})=>{
  const liveStorage = parseFloat(item?.dam_data?.[0]?.live_storage) || 0;
    const liveStorageAtFRL = parseFloat(item?.live_storage_at_FRL) || 0;

    // Calculate percentage, default to 0 if liveStorageAtFRL is 0, and cap at 100
    const percentage = liveStorageAtFRL > 0 ? Math.min((liveStorage / liveStorageAtFRL) * 100, 100) : 0;
  const formattedTime = moment(item?.dam_data?.[0]?.time??0, 'HH:mm').format('hh:mm A');

  const alertColor = damAlertColor({
      prefix:'text',
      value:item?.dam_data?.[0]?.water_level,
      blueLevel:item?.dam_data?.[0]?.blue_level,
      orangeLevel:item?.dam_data?.[0]?.orange_level,
      redLevel:item?.dam_data?.[0]?.red_level,
      defaultLightColor:'#595959',
      defaultDarkColor:'#7d8da196',
  })

  const date = item?.dam_data?.[0]?.date
  const name = item?.name

  return {
    liveStorage,
    liveStorageAtFRL,
    percentage,
    formattedTime,
    alertColor,
    date,
    name
  }               
}

export const getPreviousYearDate=(inputDate)=>{
  // Split input into day, month, year (format: DD-MM-YYYY)
  const [day, month, year] = inputDate.split('-').map(Number);

  // Calculate the previous year
  const previousYear = year - 1;
  
  // Create a tentative date for the same day/month in the previous year
  const tentativeDate = new Date(previousYear, month - 1, day);
  
  // Check if the month rolled over (e.g., Feb 29 → March 1 in non-leap years)
  if (tentativeDate.getMonth() !== month - 1) {
      // If invalid, adjust to the last day of the target month in the previous year
      tentativeDate.setDate(0); // 0th day of the next month = last day of target month
  }
  
  // Format the result back to DD-MM-YYYY
  const formattedDay = String(tentativeDate.getDate()).padStart(2, '0');
  const formattedMonth = String(tentativeDate.getMonth() + 1).padStart(2, '0');
  const formattedYear = tentativeDate.getFullYear();
  
  return `${formattedDay}-${formattedMonth}-${formattedYear}`;
}