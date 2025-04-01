
import { useCallback, useContext, useEffect, useState } from 'react'
import AddSolidIcon from '../../Assets/icons/AddSolidIcon'
import CloudIcon from '../../Assets/icons/CloudIcon'
import Button from '../AtomicDesign/Atom/Button/Button'
import Typography from '../AtomicDesign/Atom/Typography/Typography'
import Wrapper from '../AtomicDesign/Atom/Wrapper/Wrapper'
import Gauge from '../AtomicDesign/Molecule/Gauge/Gauge'
import { alertColor, rainAlert } from '../AtomicDesign/Molecule/Gauge/utils'
import LeafletMap from './LeafletMap'
import ReactApexChart from 'react-apexcharts'
import MapIcon from '../../Assets/icons/MapIcon'
import SettingsContext from '../Contexts/SettingsContext/SettingsContext'
import { getRaingaugeData } from '../../API/Handler/getDataHandler'
import { usePopUp } from '../Contexts/PopUpContext'

// eslint-disable-next-line react/prop-types
const RainGauge = ({setOpenMap}) => {
  const {expand} = useContext(SettingsContext)
  const {showError } = usePopUp()

  const [raingaugeData, setRaingaugeData] = useState([])

  const [state, setState] = useState({
    series: [{
      name: 'Rainfall',
      data: [62, 55, 41, 67, 22, 43, 111, 123, 145, 131, 87, 165, 135]
    }],
    options: {
      annotations: {
        points: [{
          x: 'today',
          seriesIndex: 0,
          label: {
            borderColor: '#775DD0',
            offsetY: 0,
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'High',
          }
        }]
      },
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '50%',
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0
      },
      
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
          'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'today'
        ],
        tickPlacement: 'on'
      },
      yaxis: {
        title: {
          text: 'Rainfall',
        },
      },
      grid: {
        borderColor: '#7d8da196', 
        strokeDashArray: 3,    
    },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 250]
        },
      }
    },
});
  
  const data =[215.00,192.11,175.23,68,60.00,0]

  const fetchAllRaingaugeData = useCallback(async (params = {})=>{
          try {
              const {data} = await getRaingaugeData(params)
              console.log('Raingauge Data',data)
              setRaingaugeData(data)
          } catch (error) {
              console.error("Error fetching Raingauge data:", error)
              const errorMsg = error.response?.data?.error || error.response?.data?.message || 'An error occurred while fetching Raingauge data.';
              showError(errorMsg)
          }
      },[showError])
  
      useEffect(() => {
        fetchAllRaingaugeData({offset:0}) //pass parameters- fetchAllDamData({test:'Test: An error occurred while fetching dam data.'});
        }, [fetchAllRaingaugeData])
  
  return (
    <Wrapper className="w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex gap-8 overflow-hidden">
        
         <Wrapper className={`w-[600px] h-full pb-4 pt-4 ${expand?'pl-8':'pl-10'}`}>
            <Wrapper className='w-full pt-4 flex items-center gap-4' >
                <Button variant='primary' variantType='outline' className='text-xs'> Add New Gauge</Button>
                <AddSolidIcon className='size-7 cursor-pointer text-[#595959] dark:text-[#7d8da196] hover:text-[#7d8da1f6]'  />
                <MapIcon onClick={()=>setOpenMap(true)} className='size-7 cursor-pointer text-[#595959] dark:text-[#7d8da196] hover:text-[#7d8da1f6]'  />
            </Wrapper>
            <Wrapper className='w-full pt-4 pb-4 h-[75vh] overflow-y-scroll flex justify-between gap-6 flex-wrap no-scrollbar'>
              {
                raingaugeData?.map((data,index)=>{
                  const value = parseFloat(data?.raingauge_data?.[0]?.value)||0
                  const redLevel = parseFloat(data?.red_level)
                  const orangeLevel = parseFloat(data?.orange_level)
                  const yellowLevel = parseFloat(data?.yellow_level)
                  const color = alertColor(value,'text',redLevel,orangeLevel,yellowLevel)

                  const latestReading = data?.raingauge_data?.[0];
                  const readingDateTime = new Date(`${latestReading?.date}T${latestReading?.time}`);
                  const now = new Date();
                  const hoursAgo = Math.floor((now - readingDateTime) / (1000 * 60 * 60));
                  let updateText='';
                  if (hoursAgo < 24) {
                    updateText = `Data updated ${hoursAgo} hours ago`;
                  } else {
                    updateText = `Data updated on ${latestReading?.date} at ${latestReading?.time}`;
                  }
                  
                  return(
                    <Wrapper key={index} className="w-[265px] h-60 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 ">
                      <Wrapper className='w-full h-14 flex items-center justify-between'>
                            <Wrapper className='h-full flex items-center'>
                                <CloudIcon className='size-4 text-[#595959] dark:text-[#7d8da196] ml-6' />
                                <Typography tag="p" text={data?.station_name} className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                            </Wrapper>
                            <Typography tag="p" text={'Today'} className='text-[#595959] dark:text-[#7d8da196] text-xs pr-6' />
                        </Wrapper>
                        <Wrapper className="w-full flex items-start justify-between pt-3">
                            <Wrapper className='h-full ml-6'>
                                <Typography tag="p" className="text-lg font-bold mt-2 text-[#1f2328] dark:text-[#7d8da1]" text="RainFall" />
                              <Typography tag="p" text={`${value} mm`} className="text-sm font-medium  mt-1" />
                                <Typography tag="p" text={`${rainAlert(value,redLevel,orangeLevel,yellowLevel).level} rainfall`} className="text-xs mt-1" />
                                <Typography tag="p" text={`${rainAlert(value,redLevel,orangeLevel,yellowLevel).alert}`} className={`text-xs mt-1 ${color}`} />
                                <Typography tag="p" text={updateText} className="text-[10px] leading-3 mt-3" />
                            </Wrapper>
                            <Gauge 
                              rainFall={value}
                              redLevel={redLevel}
                              orangeLevel={orangeLevel}
                              yellowLevel={yellowLevel}
                             />
                        </Wrapper>
                    </Wrapper>
                  )
                })
              }
                
            </Wrapper>
         </Wrapper>

         <Wrapper className='w-[50%] h-full pb-4 flex flex-col gap-4'>
         <Typography tag="h4" className="text-lg font-bold mt-4" text="Idukki District RainFall" />
            <Wrapper className="w-full h-80 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 overflow-hidden pt-4">
                {/*<LeafletMap />*/}
                <ReactApexChart options={state.options} series={state.series} type="bar" height={300} />
            </Wrapper>
            <Wrapper className="w-full h-[30vh] flex gap-6">

              <Wrapper className='w-[48%] h-full overflow-y-scroll no-scrollbar'>
                  <Typography tag="h4" text='Total Raingauges 44' className="text-sm font-medium" />
                  <Wrapper className='w-full h-10 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 overflow-hidden flex items-center px-3'>
                    <Typography tag="p" className="text-xs ">
                        IDUKKI Dam Catchment – <Typography tag="span" text={'23'} className="text-xs text-primary"/> Rain Gauges
                    </Typography>
                  </Wrapper>
                  <Wrapper className='w-full h-10 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 overflow-hidden flex items-center px-3'>
                    <Typography tag="p" className="text-xs ">
                        LOWER PERIYAR Dam Catchment – <Typography tag="span" text={'23'} className="text-xs text-primary"/> Rain Gauges
                    </Typography>
                  </Wrapper>
                  <Wrapper className='w-full h-10 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 overflow-hidden flex items-center px-3'>
                    <Typography tag="p" className="text-xs ">
                        LOWER PERIYAR Dam Catchment – <Typography tag="span" text={'23'} className="text-xs text-primary"/> Rain Gauges
                    </Typography>
                  </Wrapper>
                  <Wrapper className='w-full h-10 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 overflow-hidden flex items-center px-3'>
                    <Typography tag="p" className="text-xs ">
                        LOWER PERIYAR Dam Catchment – <Typography tag="span" text={'23'} className="text-xs text-primary"/> Rain Gauges
                    </Typography>
                  </Wrapper>
                  <Wrapper className='w-full h-10 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 overflow-hidden flex items-center px-3'>
                    <Typography tag="p" className="text-xs ">
                        LOWER PERIYAR Dam Catchment – <Typography tag="span" text={'23'} className="text-xs text-primary"/> Rain Gauges
                    </Typography>
                  </Wrapper>
                  <Wrapper className='w-full h-10 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 overflow-hidden flex items-center px-3'>
                    <Typography tag="p" className="text-xs ">
                        LOWER PERIYAR Dam Catchment – <Typography tag="span" text={'23'} className="text-xs text-primary"/> Rain Gauges
                    </Typography>
                  </Wrapper>
              </Wrapper>
              <Wrapper className='w-[48%] h-full border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg overflow-hidden'>
              
              </Wrapper>
            </Wrapper>
            
         </Wrapper>
    </Wrapper>
  )
}

export default RainGauge
