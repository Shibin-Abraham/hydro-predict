import { useCallback, useContext, useEffect, useState } from "react"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"

import { usePopUp } from "../Contexts/PopUpContext"
import Select from "../AtomicDesign/Atom/Input/Select"
import Typography from "../AtomicDesign/Atom/Typography/Typography"
import Input from "../AtomicDesign/Atom/Input/Input"
import Form from "../AtomicDesign/Atom/Form/Form"
import Button from "../AtomicDesign/Atom/Button/Button"
import ReactApexChart from "react-apexcharts"
import Pichart from "../AtomicDesign/Molecule/Pichart/Pichart"
import SettingsContext from "../Contexts/SettingsContext/SettingsContext"
import { set, useForm } from "react-hook-form"
import { decimalNumberPattern } from "../Analysis/Popup/utils"
import axios from "axios"
import { getPredictionData } from "../../API/Handler/getDataHandler"
import DamDataContext from "../Contexts/DamDataContext/DamDataContext"

// eslint-disable-next-line react/prop-types
const Prediction = ({mode}) => {
  const {expand} = useContext(SettingsContext)
  console.log('expand',generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
    min: 10,
    max: 60
  }))

const [isLoading,setIsLoading] = useState(false) 
const [loading,setLoading] = useState(false)
const [predictedData,setPredictedData] = useState({inflow_t1:0,inflow_t2:0,}) 
const [allPredictedData,setAllPredictedData] = useState([])
 const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
        const features = {
          "inflow_t": data.latest_inflow,
          "inflow_t-1": data.yesterday_inflow,
          "inflow_t-2": data.before_yesterday_inflow,
          "totalRainfall_t": data.latest_total_rainfall,
          "totalRainfall_t-1": data.yesterday_total_rainfall,
          "totalRainfall_t-2": data.before_yesterday_total_rainfall,
          "inflow_3day_avg": data._3_day_avg_inflow,
          "inflow_7day_avg": data._7_day_avg_inflow,
          "rainfall_3day_avg": data._3_day_avg_rainfall,
          "rainfall_7day_avg": data._7_day_avg_rainfall,
          "month": data.current_month
      }
      console.log(features)
      try {
        // Using direct axios
        setIsLoading(true)
        const {data} = await axios.post('http://127.0.0.1:8001/api/dam/predict/1/', features);
        // OR using the api instance: const response = await api.post('/predict/1/', data);
        console.log(data);
        setPredictedData({
          inflow_t1: data.predicted_inflow_tomorrow ?? 0,
          inflow_t2: data.predicted_inflow_day_after ?? 0,
        })
      } catch (error) {
        console.log(error)
      }finally{
        setIsLoading(false)
      }
      }

  const {showInfo,showError} = usePopUp()
  const {damData} = useContext(DamDataContext)

  const filterIdkData = damData?.filter((item) => item.name === 'idukki')
  console.log('filterIdkData',filterIdkData)
  console.log('allPredictedData',allPredictedData)

  const [state, setState] = useState({
          
    series: [
      {
        name: 'Actual',
        data: filterIdkData?.[0]?.dam_data?.map((item) => {
          return {
            x: item.date,
            y: parseFloat(item.inflow),
          }
        }
        )
      },
      {
        name: 'Today',
        data: allPredictedData?.map((item) => {
          return {
            x: item.date,
            y: parseFloat(item.inflow_t1),
          }
        }
        )
      },
      // {
      //   name: 'Tomarrow',
      //   data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
      //     min: 10,
      //     max: 15
      //   })
      // }
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

const MWL = parseFloat(filterIdkData?.[0]?.MWL);
const waterLevel = parseFloat(filterIdkData?.[0]?.dam_data?.[0]?.water_level);
const percentage = ((waterLevel / MWL) * 100).toFixed(2);
const inflowValue = Number(predictedData.inflow_t1);
const finalValue = waterLevel + 0.00158 * inflowValue;
const roundedFinalValue = finalValue.toFixed(2);

const inflowValue_t2 = Number(predictedData.inflow_t2);
const finalValue_t2 = waterLevel + 0.00158 * inflowValue_t2;
const roundedFinalValue_t2 = finalValue_t2.toFixed(2);
const percentage_t2 = ((roundedFinalValue_t2 / MWL) * 100).toFixed(2);

  const fetchAllPredictionData = useCallback(async (params = {})=>{
    setLoading(true)
          try {
              const {data} = await getPredictionData(params)
              setAllPredictedData(data)
              setPredictedData(prev => ({
                ...prev,
                inflow_t1: data?.[0]?.predicted_inflow_t1 ?? 0,
                inflow_t2: data?.[0]?.predicted_inflow_t2 ?? 0,
              }))
              
          } catch (error) {
              console.error("Error fetching fetchPredictionData:", error)
              const errorMsg = error.response?.data?.error || error.response?.data?.message || 'An error occurred while fetching Prediction Data.';
              showError(errorMsg)
          }finally{
            setLoading(false)
          }
      },[showError])

  useEffect(() => {
    showInfo('Predictions are estimates only. They are based on historical data.')
    fetchAllPredictionData()
  }, [])
             
  return (
    <Wrapper className={`w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg overflow-hidden ${expand?'pl-8':'pl-16'}`}>
      <Wrapper className={`w-full pt-3 flex items-center gap-4`}>
          <Select options={[{id:1,name:'idukki',}]} 
          className='w-28 h-6 bg-inherit rounded-md text-[#595959] dark:text-[#7d8da196] text-sm border border-color-border dark:border-[#161d29f5] outline-none' 
          firstOptionClassName="dark:bg-[#121721f5]"
          childClassName="dark:bg-[#121721f5]"
          placeholder="Select Dam" />
          <Select options={[{id:2,name:'XGBRegressor'},{id:3,name:'Lasso'}]} 
          className='w-28 h-6 bg-inherit rounded-md text-[#595959] dark:text-[#7d8da196] text-sm border border-color-border dark:border-[#161d29f5] outline-none' 
          firstOptionClassName="dark:bg-[#121721f5]"
          childClassName="dark:bg-[#121721f5]"
          placeholder="Select Model" />
      </Wrapper>
      <Wrapper className='w-full h-[80vh] flex gap-4'>
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
                      percentage={percentage}
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
                  <Typography tag="p" className="text-lg font-bold text-center text-primary" text={`${roundedFinalValue} m`} />
                  </Wrapper>
                  
                  <Typography tag="p" className="text-[10px] font-normal text-center pt-1" text="Inflow Value" />
                  <Typography tag="p" className="text-xs font-semibold text-center" text={`${predictedData?.inflow_t1 ? Number(predictedData.inflow_t1).toFixed(4) : ''} cumecs`} />
                  
                  </Wrapper>
                </Wrapper>
                <Wrapper className='w-full h-[1px] bg-[#595959] dark:bg-[#7d8da196]' />
                <Typography tag="p" className="text-[10px] font-normal">
                    Current Waterl Level <Typography tag="span" className="text-[10px] font-normal text-primary" text={`${filterIdkData?.[0]?.dam_data?.[0]?.water_level} m`}/>
                    {/* , percentage <Typography tag="span" className="text-[10px] font-normal text-primary" text='82%'/> */}
                  </Typography>
              
              </Wrapper>
            </Wrapper>
            <Wrapper className="w-[20vw] h-full flex flex-col border-2 border-color-light-gray dark:border dark:border-color-dark-gray  dark:bg-[#121721f5] rounded-lg overflow-hidden">
              <Wrapper className='w-full h-6 flex justify-between'>
                  <Typography tag="p" className="text-xs font-normal text-center pl-3 pt-1" text="Tomorrow" />
                  <Wrapper className='w-20 h-full bg-color-light-gray dark:bg-color-dark-gray rounded-bl-lg grid place-items-center'>
                  <Typography tag="h4" className="text-[10px] font-normal text-center text-white" text="AI Generated" />
                  </Wrapper>
              </Wrapper>
              <Wrapper className='w-full h-full px-3'>
                <Wrapper className='h-[16vh] w-full flex justify-between'>
                  <Wrapper className='flex flex-col items-center'>
                     <Pichart
                     variant='gray'
                      percentage={percentage_t2}
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
                  <Typography tag="p" className="text-lg font-bold text-center text-color-light-gray dark:text-color-dark-gray" text={`${roundedFinalValue_t2} m`} />
                  </Wrapper>
                  
                  <Typography tag="p" className="text-[10px] font-normal text-center pt-1" text="Inflow Value" />
                  <Typography tag="p" className="text-xs font-semibold text-center" text={`${predictedData?.inflow_t2 ? Number(predictedData.inflow_t2).toFixed(4) : ''} cumecs`} />
                  
                  </Wrapper>
                </Wrapper>
                <Wrapper className='block w-full h-[1px] bg-[#595959] dark:bg-[#7d8da196]' />
                <Typography tag="p" className="text-[10px] font-normal">
                    This Model has 64% of accuray, It can make mistakes
                  </Typography>
              
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Typography tag="h4" className="text-lg font-bold" text="Inflow Trends" />
          <Wrapper className="w-full h-[45vh] border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg pr-2">
            <ReactApexChart options={state.options} series={state.series} type="area" height={320} />
          </Wrapper>
        </Wrapper>
        <Wrapper className='w-[40vw] h-full pt-3 pl-8 overflow-y-scroll no-scrollbar'>
            <Form
            onSubmit={handleSubmit(onSubmit)}
              className='w-full text-black dark:text-[#7d8da1] flex flex-col gap-2 justify-between'>
                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          {...register("latest_inflow", {
                                    required: "required",
                                    pattern: decimalNumberPattern,
                                  })}
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                      {errors.latest_inflow && (
                        <Typography tag="p" className="text-color-red text-[11px]">
                          {errors.latest_inflow.message}
                        </Typography>
                      )}
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Yesterday's inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder="Enter yesterday's inflow"
                          autoComplete='off'
                          {...register("yesterday_inflow", {
                            required: "required",
                            pattern: decimalNumberPattern,
                          })}
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                      {errors.yesterday_inflow && (
                        <Typography tag="p" className="text-color-red text-[11px]">
                          {errors.yesterday_inflow.message}
                        </Typography>
                      )}
                    </Wrapper>
                </Wrapper>
              
                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Day before yesterday's inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder="Enter day before yesterday's inflow"
                          autoComplete='off'
                          {...register("before_yesterday_inflow", {
                            required: "required",
                            pattern: decimalNumberPattern,
                          })}
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                      {errors.before_yesterday_inflow && (
                        <Typography tag="p" className="text-color-red text-[11px]">
                          {errors.before_yesterday_inflow.message}
                        </Typography>
                      )}
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest total rainfall" className=" text-sm" />
                      <Input type='text'
                          placeholder="Enter latest total rainfall"
                          autoComplete='off'
                          {...register("latest_total_rainfall", {
                            required: "required",
                            pattern: decimalNumberPattern,
                          })}
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                      {errors.latest_total_rainfall && (
                        <Typography tag="p" className="text-color-red text-[11px]">
                          {errors.latest_total_rainfall.message}
                        </Typography>
                      )}
                    </Wrapper>
                </Wrapper>
                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Yesterday's rainfall" className=" text-sm" />
                      <Input type='text'
                          placeholder="Enter yesterday's rainfall"
                          autoComplete='off'
                          {...register("yesterday_total_rainfall", {
                            required: "required",
                            pattern: decimalNumberPattern,
                          })}
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                      {errors.yesterday_total_rainfall && (
                        <Typography tag="p" className="text-color-red text-[11px]">
                          {errors.yesterday_total_rainfall.message}
                        </Typography>
                      )}
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Day before yesterday's rainfall" className=" text-sm" />
                      <Input type='text'
                          placeholder="Enter day before yesterday's rainfall"
                          autoComplete='off'
                          {...register("before_yesterday_total_rainfall", {
                            required: "required",
                            pattern: decimalNumberPattern,
                          })}
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                      {errors.before_yesterday_total_rainfall && (
                        <Typography tag="p" className="text-color-red text-[11px]">
                          {errors.before_yesterday_total_rainfall.message}
                        </Typography>
                      )}
                    </Wrapper>
                </Wrapper>

                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="3-day average inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder="Enter 3-day average inflow"
                          autoComplete='off'
                          {...register("_3_day_avg_inflow", {
                            required: "required",
                            pattern: decimalNumberPattern,
                          })}
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                      {errors._3_day_avg_inflow && (
                        <Typography tag="p" className="text-color-red text-[11px]">
                          {errors._3_day_avg_inflow.message}
                        </Typography>
                      )}
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Enter 7-day average inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder="Enter 7-day average inflow"
                          autoComplete='off'
                          {...register("_7_day_avg_inflow", {
                            required: "required",
                            pattern: decimalNumberPattern,
                          })}
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                      {errors._7_day_avg_inflow && (
                        <Typography tag="p" className="text-color-red text-[11px]">
                          {errors._7_day_avg_inflow.message}
                        </Typography>
                      )}
                    </Wrapper>
                </Wrapper>
                <Wrapper className='w-full'>
                      <Typography tag="p" text="3-day average rainfall" className=" text-sm" />
                      <Input type='text'
                          placeholder="Enter 3-day average rainfall"
                          autoComplete='off'
                          {...register("_3_day_avg_rainfall", {
                            required: "required",
                            pattern: decimalNumberPattern,
                          })}
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                      {errors._3_day_avg_rainfall && (
                        <Typography tag="p" className="text-color-red text-[11px]">
                          {errors._3_day_avg_rainfall.message}
                        </Typography>
                      )}
                    </Wrapper>

                    <Wrapper className='w-full'>
                      <Typography tag="p" text="7-day average rainfall" className=" text-sm" />
                      <Input type='text'
                          placeholder="Enter 7-day average rainfall"
                          autoComplete='off'
                          {...register("_7_day_avg_rainfall", {
                            required: "required",
                            pattern: decimalNumberPattern,
                          })}
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                      {errors._7_day_avg_rainfall && (
                        <Typography tag="p" className="text-color-red text-[11px]">
                          {errors._7_day_avg_rainfall.message}
                        </Typography>
                      )}
                    </Wrapper>

                    <Wrapper className='w-full'>
                      <Typography tag="p" text="Current month (1-12)" className=" text-sm" />
                      <Input type='text'
                          placeholder="Enter current month (1-12)"
                          autoComplete='off'
                          {...register("current_month", {
                            required: "required",
                            pattern: decimalNumberPattern,
                          })}
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                      {errors.current_month && (
                        <Typography tag="p" className="text-color-red text-[11px]">
                          {errors.current_month.message}
                        </Typography>
                      )}
                    </Wrapper>

                    <Button
                            type="submit"
                            className="w-full mt-5 h-11 bg-primary dark:bg-primary-variant text-white hover:bg-primary-hover"
                            containerClass="text-sm flex items-center justify-center gap-3"
                           isLoading={isLoading}
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