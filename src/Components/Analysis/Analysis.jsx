/* eslint-disable react/prop-types */

import ReactApexChart from 'react-apexcharts'
import FlagIcon from '../../Assets/icons/FlagIcon'
import MapPointerIcon from '../../Assets/icons/MapPointerIcon'
import Select from '../AtomicDesign/Atom/Input/Select'
import Typography from '../AtomicDesign/Atom/Typography/Typography'
import Wrapper from '../AtomicDesign/Atom/Wrapper/Wrapper'
import Pichart from '../AtomicDesign/Molecule/Pichart/Pichart'
import {  useState } from 'react'
import { getColor } from './utils'

const Analysis = ({theme}) => {
  const color = getColor({theme})

  const [stateInflow, setStateInflow] = useState({
          
    series: [{
      name:'inflow',
      data: [31.1, 40, 28, 151, 42, 109, 100]
    }, {
      name:'rainfall',
      data: [11, 32, 45, 0, 34, 52, 41]
    }],
    options: {
      chart: {
        width:'100%',
        height: '100%',
        type: 'area',
        toolbar: {
          show: false 
      },
      offsetX:0,  
      offsetY: -10
      },
      grid: {
        show: true,  
        borderColor: '#7d8da196', 
        strokeDashArray: 1,   
        yaxis: {
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
        show: false,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
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
    }
    },
  
  
});
    const [state, setState] = useState({
        series: [{
          name: 'water level',
          data: [40.3, 42.1, 55.0, 60.1, 55.0, 53.6, 53.2, 52.3, 59.4, 60.8, 65.5, 70.2]
        }],

        options: {
          chart: {
            height: '100%',
            type: 'bar',
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
              return val + "%";
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#595959"]
            }
          },
          colors:[color],
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
                return val + "%";
              }
            }
          },
          grid: {
            borderColor: '#7d8da196', 
            strokeDashArray: 4,    
        }
        },
    });


  return (
    <Wrapper className="w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex">
         <Wrapper className='w-[50%] h-full'>
            <Wrapper className='w-full ml-8 mt-4' >
                <Select options={['idukki','madupetty','periyar','anayirankal']} 
                className='w-28 h-6 bg-inherit rounded-md text-[#595959] dark:text-[#7d8da196] text-sm border border-color-border dark:border-[#161d29f5] outline-none' 
                firstOptionClassName="dark:bg-[#121721f5]"
                childClassName="dark:bg-[#121721f5]"
                placeholder="Select Dam" />
            </Wrapper>

            <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                <Wrapper className="w-80 h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 ml-8">
                    <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                        <Wrapper className='h-full flex items-center'>
                            <MapPointerIcon className='size-4 text-[#595959] dark:text-[#7d8da196] ml-6' />
                            <Typography tag="p" text='Idukki' className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                        </Wrapper>
                        <FlagIcon className='size-4 text-[#595959] dark:text-[#7d8da196] mr-6' />
                    </Wrapper>
                    <Wrapper className="w-full h-[70%] flex items-start justify-between">
                        <Wrapper className='h-full ml-6 mt-1'>
                            <Typography tag="p" className="text-lg font-bold mt-2 text-[#1f2328] dark:text-[#7d8da1]" text="Live Storage" />
                            <Typography tag="p" text=" 317.54 / 444.85" className="text-sm font-medium  mt-1" />
                            <Typography tag="p" text="Today 7:00 AM" className="text-xs mt-1" />
                        </Wrapper>
                        <Pichart
                            percentage={60}
                            className="w-24 h-24 grid place-items-center mr-4"
                            subClassName="relative w-20 h-20 rounded-full grid place-items-center before:content-[''] before:absolute before:h-[84%]
                                before:w-[84%] before:bg-[#ffffff] before:dark:bg-[#121720] before:rounded-full"
                            innerClassName="text-primary relative text-xs"
                            speed={20}
                        />
                    </Wrapper>
                </Wrapper>

                <Wrapper className="w-72 h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 ml-8">
                    
                    <Wrapper className="w-full h-full flex flex-col items-center justify-center">
                    <Typography tag="p" className="text-[#595959] dark:text-[#7d8da196] text-xs mt-6" text="Inflow 7 days" />
                    <ReactApexChart options={stateInflow.options} series={stateInflow.series} type="area" width='100%' height='100%' />
                       
                        {/* <Wrapper className='h-full ml-4 mt-1'>
                            <Typography tag="p" className="text-lg font-medium mt-2 text-[#1f2328] dark:text-[#7d8da1]" text="Idukki Dam Constant Metrics" />
                            <Typography tag="p" className="text-xs font-medium  mt-2" >
                            Maximum Water Level(MWL): <Typography tag='span' className="text-primary" text='734.1108 ' /> (meter)
                            </Typography>
                            <Typography tag="p" className="text-xs font-medium mt-1" >
                            Full Reservoir Level(FRL): <Typography tag='span' className="text-primary" text='732.4344 ' /> (meter)
                            </Typography>
                            <Typography tag="p" className="text-xs font-medium mt-1" >
                            Spillway Crest Level: <Typography tag='span' className="text-primary" text='723.2904 ' /> (meter)
                            </Typography>
                            <Typography tag="p" className="text-xs font-medium mt-1" >
                            Live Storage at FRL: <Typography tag='span' className="text-primary" text='1459.49 ' /> (Million Cubic Meters)
                            </Typography>
                            <Typography tag="p" className="text-xs font-medium mt-1" >
                            Rule Level: <Typography tag='span' className="text-primary" text='732.4344 ' /> (meter)
                            </Typography>
                        </Wrapper> */}
                        
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Typography tag="h4" className="text-lg font-bold mt-2 ml-8" text="Water Level" />
            <Wrapper className="w-full h-[50%] flex justify-between" >
            <Wrapper className="w-[800px] h-full border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 ml-8">
            <ReactApexChart 
                    options={state.options}
                    series={state.series}  
                    type='bar'
                    height='95%'
                    width='100%'
                    className='px-2 pt-4'
                 />
            </Wrapper>
                
            </Wrapper>
         </Wrapper>
    </Wrapper>
  )
}

export default Analysis
