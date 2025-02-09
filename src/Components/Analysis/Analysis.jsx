/* eslint-disable react/prop-types */

import ReactApexChart from 'react-apexcharts'
import FlagIcon from '../../Assets/icons/FlagIcon'
import MapPointerIcon from '../../Assets/icons/MapPointerIcon'
import Select from '../AtomicDesign/Atom/Input/Select'
import Typography from '../AtomicDesign/Atom/Typography/Typography'
import Wrapper from '../AtomicDesign/Atom/Wrapper/Wrapper'
import Pichart from '../AtomicDesign/Molecule/Pichart/Pichart'
import {  useState } from 'react'
import { getColor,data } from './utils'
import Button from '../AtomicDesign/Atom/Button/Button'
import AddSolidIcon from '../../Assets/icons/AddSolidIcon'
import Media from '../AtomicDesign/Atom/Media/Media'
import drop from "../../Assets/drop.png"
import Input from '../AtomicDesign/Atom/Input/Input'
import { Form } from 'react-router-dom'
import CloseIcon from '../../Assets/icons/CloseIcon'
import InputPopUp from '../AtomicDesign/Molecule/PopUp/InputPopUp'
const Analysis = ({theme,setAddDamData}) => {
  const color = getColor({theme})

  

  const [donutState, setDonutState] = useState({
          
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        width: 400,
        height:400,
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
});

  const [stateInflow, setStateInflow] = useState({
          
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
        borderColor: '#7d8da196', 
        strokeDashArray: 3,   
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
            strokeDashArray: 3,    
        },
        annotations: {
          yaxis: [
            {
              y: 67,  
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
            {
              y: 50,  
              borderColor: 'orange',  // Line color
              strokeDashArray: 3,  // Makes it a dashed line
              label: {
                borderColor: 'orange',
                style: {
                  color: '#fff',
                  background: 'orange',
                  fontSize: '10px'
                },
                text: 'orange level',
                offsetX: -540,
              },
            },
            {
              y: 47,  
              borderColor: 'blue',  // Line color
              strokeDashArray: 3,  // Makes it a dashed line
              label: {
                borderColor: 'blue',
                style: {
                  color: '#fff',
                  background: 'blue',
                  fontSize: '10px'
                },
                text: 'blue level',
              },
            },
          ],
        },
        },
    });


  return (
    <Wrapper className="w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex overflow-hidden">
         <Wrapper className='w-[50%] h-full'>
            <Wrapper className='w-full ml-8 mt-4 flex items-center gap-4' >
                <Select options={['idukki','madupetty','periyar','anayirankal']} 
                className='w-28 h-6 bg-inherit rounded-md text-[#595959] dark:text-[#7d8da196] text-sm border border-color-border dark:border-[#161d29f5] outline-none' 
                firstOptionClassName="dark:bg-[#121721f5]"
                childClassName="dark:bg-[#121721f5]"
                placeholder="Select Dam" />
                <AddSolidIcon className='size-7 cursor-pointer text-[#595959] dark:text-[#7d8da196] hover:text-[#7d8da1f6]' onClick={()=>setAddDamData(true)} />
                
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
         <Wrapper className='w-[50%] h-full flex'>
          <Wrapper className='w-[60%] h-full'>
              <Typography tag="h4" className="text-lg font-bold mt-2 ml-8" text="Readings" />
              <Wrapper className='pt-4 w-[350px] h-44 flex justify-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 ml-8'>
                <ReactApexChart options={donutState.options} series={donutState.series} type="donut" width={300} height={300} />
              </Wrapper>
              <Typography tag="h4" className="text-lg font-bold mt-6 ml-8" text="Dam Constant Metrics" />
              <Wrapper className='h-full ml-4 mt-1 flex flex-col gap-3'>
                 <Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                      <Typography tag="p" className="text-xs font-medium" >
                            Maximum Water Level(MWL): <Typography tag='span' className="text-primary" text='734.1108 ' /> (meter)
                      </Typography>
                 </Wrapper>
                 <Wrapper className='w-[90%] p-6 h-12 rounded-xl gap-4 flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                      <Typography tag="p" className="text-xs font-medium mt-1" >
                            Full Reservoir Level(FRL): <Typography tag='span' className="text-primary" text='732.4344 ' /> (meter)
                      </Typography>
                 </Wrapper>
                 <Wrapper className='w-[90%] p-6 h-12 rounded-xl gap-4 flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                      <Typography tag="p" className="text-xs font-medium mt-1" >
                            Spillway Crest Level: <Typography tag='span' className="text-primary" text='723.2904 ' /> (meter)
                      </Typography>
                 </Wrapper>
                 <Wrapper className='w-[90%] p-6 h-12 rounded-xl gap-4 flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                      <Typography tag="p" className="text-xs font-medium mt-1" >
                            Live Storage at FRL: <Typography tag='span' className="text-primary" text='1459.49 ' /> (Million Cubic Meters)
                        </Typography>
                 </Wrapper>
                 <Wrapper className='w-[90%] p-6 h-12 rounded-xl gap-4 flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                        <Typography tag="p" className="text-xs font-medium mt-1" >
                            Rule Level: <Typography tag='span' className="text-primary" text='732.4344 ' /> (meter)
                        </Typography>
                 </Wrapper>  
                 <Wrapper className='w-[90%] h-12 flex items-center'>
                        <Wrapper className='size-3 bg-color-blue rounded-full'/>
                        <Typography tag='span' className="text-xs font-medium pl-2" text='732.4344 ' />
                        <Wrapper className='size-3 bg-color-orange rounded-full ml-4'/>
                        <Typography tag='span' className="text-xs font-medium pl-2" text='732.4344 ' />
                        <Wrapper className='size-3 bg-color-red rounded-full ml-4'/>
                        <Typography tag='span' className="text-xs font-medium pl-2" text='732.4344 ' />
                        
                 </Wrapper>             
              </Wrapper>
          </Wrapper>
          <Wrapper className='w-[40%] h-full '>
          <Typography tag="h4" className="text-lg font-bold mt-2 " text="Rainfall" />
          <Wrapper className='w-full h-[80vh] flex flex-col gap-3 overflow-y-scroll no-scrollbar mt-2 '>
          <Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-red' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper>
          <Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-red' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper>
          <Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-red' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-red' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-orange' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-orange' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-orange' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-blue' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-blue' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-blue' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-blue' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-blue' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-blue' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-blue' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-blue' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-blue' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper><Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                  <Media mediaType="image" mediaSrc={drop} className="w-6 h-6 rounded-md" imgClass="rounded-none" />   
                  <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                  Rainfall- 
                    <Typography tag='span' className='text-color-blue' text={'12.11'} />
                    mm
                    </Typography>
                    <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={'12/10/2024'}></Typography>
          </Wrapper>
          
          
          </Wrapper>
          </Wrapper>
          
         </Wrapper>
    </Wrapper>
  )
}

export default Analysis
