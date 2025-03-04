import { useEffect, useState } from "react"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"

import { usePopUp } from "../Contexts/PopUpContext"
import Select from "../AtomicDesign/Atom/Input/Select"
import Typography from "../AtomicDesign/Atom/Typography/Typography"
import Input from "../AtomicDesign/Atom/Input/Input"
import Form from "../AtomicDesign/Atom/Form/Form"
import Button from "../AtomicDesign/Atom/Button/Button"
import ReactApexChart from "react-apexcharts"
import Pichart from "../AtomicDesign/Molecule/Pichart/Pichart"



// eslint-disable-next-line react/prop-types
const Prediction = ({mode}) => {
  const [state, setState] = useState({
          
    series: [
      {
        name: 'Actual',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Today',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 20
        })
      },
      {
        name: 'Tomarrow',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 15
        })
      }
    ],
    options: {
      chart: {
        type: 'area',
        height: 320,
        stacked: true,
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min))
          }
        },
        toolbar: {
          show: false // Disable toolbar controls
        },
      },
      tooltip: {
        theme: mode
      },
      colors: ['#1c51ff', '#1cff64', '#7d8da1'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width:2,
        curve: 'monotoneCubic'
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.1,
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        markers: {    
          strokeWidth: 0,
          
        },
        fontSize: '10px',
        fontFamily: 'inherit',
        fontWeight: 400,
        labels: {
          colors: mode === 'dark' ? '#7d8da1' : '#595959',
        },  
      },
      grid: {
        show: true,
        borderColor: mode==='dark'?'#7d8da111':'#59595911', // grid line color for both horizontal and vertical lines
        strokeDashArray: 1,     // 0 for solid lines, any other number will create a dashed effect
        position: 'back',       // puts grid behind chart elements
        xaxis: {
          lines: {
            show: true 
          }
        },
        yaxis: {
          lines: {
            show: true // Show horizontal grid lines
          }
        }
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: true,
          color: mode==='dark'?'#7d8da1':'#595959',
        },
        axisTicks: {
          show: true,
          color: mode==='dark'?'#7d8da1':'#595959',
        },
        labels: {
          style: {
            colors: mode==='dark'?'#7d8da1':'#595959', // Change x-axis label text color
            fontSize: '10px'
          }
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
          color: mode==='dark'?'#7d8da1':'#595959',
        },
        axisTicks: {
          show: true,
          color: mode==='dark'?'#7d8da1':'#595959',
        },
        labels: {
          style: {
            colors: mode==='dark'?'#7d8da1':'#595959', // Change x-axis label text color
            fontSize: '10px'
          }
        }
      },
    },
  
  
});

  const {showInfo} = usePopUp()
  useEffect(() => {
    showInfo('Predictions are estimates only. They are based on historical data.')
  }, [showInfo])
             
            
  return (
    <Wrapper className='w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg overflow-hidden '>
      <Wrapper className='w-full pl-8 pt-3 flex items-center gap-4 ' >
          <Select options={['idukki']} 
          className='w-28 h-6 bg-inherit rounded-md text-[#595959] dark:text-[#7d8da196] text-sm border border-color-border dark:border-[#161d29f5] outline-none' 
          firstOptionClassName="dark:bg-[#121721f5]"
          childClassName="dark:bg-[#121721f5]"
          placeholder="Select Dam" />
          <Select options={['XGBRegressor','Lasso']} 
          className='w-28 h-6 bg-inherit rounded-md text-[#595959] dark:text-[#7d8da196] text-sm border border-color-border dark:border-[#161d29f5] outline-none' 
          firstOptionClassName="dark:bg-[#121721f5]"
          childClassName="dark:bg-[#121721f5]"
          placeholder="Select Model" />
      </Wrapper>
      <Wrapper className='w-full h-[80vh] flex gap-4 pl-8'>
      <Wrapper className='w-[42vw] h-full pt-2 flex flex-col gap-3'>
          <Wrapper className="w-full h-[25vh] flex items-center justify-between">
            <Wrapper className="w-[20vw] h-full flex flex-col border-2 dark:border border-primary  dark:bg-[#121721f5] rounded-lg overflow-hidden">
              <Wrapper className='w-full h-6 flex justify-between'>
              <Typography tag="p" className="text-xs font-normal text-center pl-3 pt-1 text-primary" text="Today" />
                  <Wrapper className='w-20 h-full bg-primary rounded-bl-lg grid place-items-center'>
                  <Typography tag="h4" className="text-[10px] font-normal text-center text-white" text="AI Generated" />
                  </Wrapper>
              </Wrapper>
              <Wrapper className='w-full h-full px-3'>
                <Wrapper className='h-[16vh] w-full flex justify-between'>
                  <Wrapper className='flex flex-col items-center'>
                     <Pichart
                      percentage={75}
                      className="w-20 h-20 grid place-items-center"
                      subClassName="relative w-16 h-16 rounded-full grid place-items-center before:content-[''] before:absolute before:h-[84%]
                          before:w-[84%] before:bg-[#ffffff] before:dark:bg-[#121720] before:rounded-full"
                      innerClassName="text-primary relative text-xs"
                      speed={20}
                    /> 
                    <Typography tag="p" className="text-xs font-normal text-center" text="Predicted Water Level" />
                  </Wrapper>    
                  <Wrapper className='w-[60%] h-full flex flex-col items-end justify-center'>
                  <Typography tag="p" className="text-xs font-normal text-center" text="Predicted Water Level" />
                  <Wrapper>
                  <Typography tag="p" className="text-lg font-bold text-center text-primary" text="720.22 m" />
                  </Wrapper>
                  
                  <Typography tag="p" className="text-[10px] font-normal text-center pt-1" text="Inflow Value" />
                  <Typography tag="p" className="text-xs font-semibold text-center" text="110.22 MCM" />
                  
                  </Wrapper>
                </Wrapper>
                <Wrapper className='w-full h-[1px] bg-[#595959] dark:bg-[#7d8da196]' />
                <Typography tag="p" className="text-[10px] font-normal">
                    Current Waterl Level <Typography tag="span" className="text-[10px] font-normal text-primary" text='710.90 m'/>
                    , percentage <Typography tag="span" className="text-[10px] font-normal text-primary" text='82%'/>
                  </Typography>
              
              </Wrapper>
            </Wrapper>
            <Wrapper className="w-[20vw] h-full flex flex-col border-2 border-color-light-gray dark:border dark:border-color-dark-gray  dark:bg-[#121721f5] rounded-lg overflow-hidden">
              <Wrapper className='w-full h-6 flex justify-between'>
                  <Typography tag="p" className="text-xs font-normal text-center pl-3 pt-1" text="Tomarrow" />
                  <Wrapper className='w-20 h-full bg-color-light-gray dark:bg-color-dark-gray rounded-bl-lg grid place-items-center'>
                  <Typography tag="h4" className="text-[10px] font-normal text-center text-white" text="AI Generated" />
                  </Wrapper>
              </Wrapper>
              <Wrapper className='w-full h-full px-3'>
                <Wrapper className='h-[16vh] w-full flex justify-between'>
                  <Wrapper className='flex flex-col items-center'>
                     <Pichart
                     variant='gray'
                      percentage={75}
                      className="w-20 h-20 grid place-items-center"
                      subClassName="relative w-16 h-16 rounded-full grid place-items-center before:content-[''] before:absolute before:h-[84%]
                          before:w-[84%] before:bg-[#ffffff] before:dark:bg-[#121720] before:rounded-full"
                      innerClassName="text-color-dark-gray relative text-xs"
                      speed={20}
                    /> 
                    <Typography tag="p" className="text-xs font-normal text-center" text="Predicted Water Level" />
                  </Wrapper>    
                  <Wrapper className='w-[60%] h-full flex flex-col items-end justify-center'>
                  <Typography tag="p" className="text-xs font-normal text-center" text="Predicted Water Level" />
                  <Wrapper>
                  <Typography tag="p" className="text-lg font-bold text-center text-color-light-gray dark:text-color-dark-gray" text="720.22 m" />
                  </Wrapper>
                  
                  <Typography tag="p" className="text-[10px] font-normal text-center pt-1" text="Inflow Value" />
                  <Typography tag="p" className="text-xs font-semibold text-center" text="110.22 MCM" />
                  
                  </Wrapper>
                </Wrapper>
                <Wrapper className='block w-full h-[1px] bg-[#595959] dark:bg-[#7d8da196]' />
                <Typography tag="p" className="text-[10px] font-normal">
                    This Model has 84% of accuray, It can make mistakes
                  </Typography>
              
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Typography tag="h4" className="text-lg font-bold" text="Inflow Trends" />
          <Wrapper className="w-full h-[45vh] border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg pr-2">
            <ReactApexChart options={state.options} series={state.series} type="area" height={320} />
          </Wrapper>
        </Wrapper>
        <Wrapper className='w-[40vw] h-full pt-3 pl-8 '>
            <Form
              className='w-full text-black dark:text-[#7d8da1] flex flex-col gap-2 justify-between'>
                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                </Wrapper>
              
                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                </Wrapper>
                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                </Wrapper>

                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                </Wrapper>
                <Wrapper className='w-full'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>

                    <Wrapper className='w-full'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>

                
                    <Wrapper className='w-full'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>

                    <Button
                            type="submit"
                            className="w-full mt-5 h-11 bg-primary dark:bg-primary-variant text-white hover:bg-primary-hover"
                            containerClass="text-sm flex items-center justify-center gap-3"
                           
                        >
                            submit
                        </Button>

          </Form>
        </Wrapper>
        
      </Wrapper>

        
    </Wrapper>
  )
}

export default Prediction


const generateDayWiseTimeSeries = (baseTimestamp, count, yrange) => {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = baseTimestamp;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([x, y]);
    baseTimestamp += 86400000; // Increment by one day (in milliseconds)
    i++;
  }
  return series;
};