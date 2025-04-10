import {  useContext, useEffect, useState } from 'react';
import CloudIcon from '../../Assets/icons/CloudIcon';
import Button from '../AtomicDesign/Atom/Button/Button';
import Typography from '../AtomicDesign/Atom/Typography/Typography';
import Wrapper from '../AtomicDesign/Atom/Wrapper/Wrapper';
import Gauge from '../AtomicDesign/Molecule/Gauge/Gauge';
import { alertColor, rainAlert } from '../AtomicDesign/Molecule/Gauge/utils';
import ReactApexChart from 'react-apexcharts';
import SettingsContext from '../Contexts/SettingsContext/SettingsContext';
import GaugeCardSkeleton from './Loader/GaugeCardSkeleton';
import { processRainfallData } from './utils';
import { AuthContext } from '../Contexts/AuthContext';
import RaingaugeContext from '../Contexts/RaingaugeContext/RaingaugeContext';
import { BiCloudUpload } from 'react-icons/bi';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaMapLocationDot } from 'react-icons/fa6';
import DamDataContext from '../Contexts/DamDataContext/DamDataContext';

// eslint-disable-next-line react/prop-types
const RainGauge = ({ setOpenMap, mode, setAddRaingauge,setAddRaingaugeData,setAddRainBulkUpload }) => {
  const [state, setState] = useState(barChartStyles);

  const { expand } = useContext(SettingsContext);
  const { auth } = useContext(AuthContext);
  const { raingaugeData, fetchAllRaingaugeData, loading } = useContext(RaingaugeContext);
  const {damData} = useContext(DamDataContext)

  useEffect(() => {
    const { dates, averages } = processRainfallData(raingaugeData);

    setState((prevState) => ({
      ...prevState,
      series: [{
        name: 'Average Rainfall',
        data: averages,
      }],
      options: {
        ...prevState.options,
        xaxis: {
          ...prevState.options.xaxis,
          categories: dates,
        },
      },
    }));
  }, [raingaugeData]);

  return (
    <Wrapper className="w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex gap-8 overflow-hidden">
      <Wrapper className={`w-[600px] h-full pb-4 pt-4 ${expand ? 'pl-8' : 'pl-10'}`}>
        <Wrapper className="w-full pt-4 flex items-center gap-4">
          {auth?.user?.position.toUpperCase() === 'ADMIN' && (
            <Button
              onClick={() => setAddRaingauge({ state: true, fetchAllRaingaugeData })}
              variant="primary"
              variantType="outline"
              className="text-[11px] h-6"
            >
              Add New Gauge
            </Button>
          )}
          <IoIosAddCircleOutline title='add rainfalldata' onClick={()=>setAddRaingaugeData({state:true})} className="size-6 cursor-pointer text-[#595959] dark:text-[#7d8da196] hover:text-[#7d8da1f6]" />
          {
            auth?.user?.position.toUpperCase()==='ADMIN'
            &&
            <BiCloudUpload onClick={()=>setAddRainBulkUpload({state:true,fetchAllRaingaugeData:fetchAllRaingaugeData})} title='bulk upload' className='size-6 cursor-pointer text-[#595959] dark:text-[#7d8da196] hover:text-[#7d8da1f6]' />
          }
          <FaMapLocationDot
           title='view map'
            onClick={() => setOpenMap(true)}
            className="size-6 cursor-pointer text-[#595959] dark:text-[#7d8da196] hover:text-[#7d8da1f6]"
          />
        </Wrapper>
        <Wrapper className="w-full pt-4 pb-4 h-[75vh] overflow-y-scroll flex justify-between gap-6 flex-wrap no-scrollbar">
          {raingaugeData?.map((data, index) => {
            const value = parseFloat(data?.raingauge_data?.[0]?.value) || 0;
            const redLevel = parseFloat(data?.red_level);
            const orangeLevel = parseFloat(data?.orange_level);
            const yellowLevel = parseFloat(data?.yellow_level);
            const color = alertColor(value, 'text', redLevel, orangeLevel, yellowLevel);

            const latestReading = data?.raingauge_data?.[0];
            const readingDateTime = new Date(`${latestReading?.date}T${latestReading?.time}`);
            const now = new Date();
            const hoursAgo = Math.floor((now - readingDateTime) / (1000 * 60 * 60));
            let updateText = '';
            if (hoursAgo < 24) {
              updateText = `Data updated ${hoursAgo} hours ago`;
            } else {
              updateText = `Data updated on ${latestReading?.date} at ${latestReading?.time}`;
            }

            return (
              <Wrapper
                key={index}
                className="w-[265px] h-60 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2"
              >
                <Wrapper className="w-full h-14 flex items-center justify-between">
                  <Wrapper className="h-full flex items-center">
                    <CloudIcon className="size-4 text-[#595959] dark:text-[#7d8da196] ml-6" />
                    <Typography
                      tag="p"
                      text={data?.station_name}
                      className="text-[#595959] dark:text-[#7d8da196] text-sm ml-1"
                    />
                  </Wrapper>
                  <Typography
                    tag="p"
                    text="Today"
                    className="text-[#595959] dark:text-[#7d8da196] text-xs pr-6"
                  />
                </Wrapper>
                <Wrapper className="w-full flex items-start justify-between pt-3">
                  <Wrapper className="h-full ml-6">
                    <Typography
                      tag="p"
                      className="text-lg font-bold mt-2 text-[#1f2328] dark:text-[#7d8da1]"
                      text="RainFall"
                    />
                    <Typography tag="p" text={`${value} mm`} className="text-sm font-medium mt-1" />
                    <Typography
                      tag="p"
                      text={`${rainAlert(value, redLevel, orangeLevel, yellowLevel).level} rainfall`}
                      className="text-xs mt-1"
                    />
                    <Typography
                      tag="p"
                      text={`${rainAlert(value, redLevel, orangeLevel, yellowLevel).alert}`}
                      className={`text-xs mt-1 ${color}`}
                    />
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
            );
          })}
          {loading && (
            <>
              <GaugeCardSkeleton mode={mode} />
              <GaugeCardSkeleton mode={mode} />
              <GaugeCardSkeleton mode={mode} />
              <GaugeCardSkeleton mode={mode} />
            </>
          )}
        </Wrapper>
      </Wrapper>

      <Wrapper className="w-[50%] h-full pb-4 flex flex-col gap-4">
        <Typography tag="h4" className="text-lg font-bold mt-4" text="Idukki District RainFall" />
        <Wrapper className="w-full h-80 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 overflow-hidden pt-4">
          <ReactApexChart options={state.options} series={state.series} type="bar" height={300} />
        </Wrapper>
        <Wrapper className="w-full h-[30vh] flex gap-6">
          <Wrapper className="w-[48%] h-full overflow-y-scroll no-scrollbar">
            <Typography tag="h4" text={`Total Raingauges ${raingaugeData?.length||0}`} className="text-sm font-medium" />
            {
              damData?.map((dam, index) => {
                const raingauges = raingaugeData?.filter((raingauge) => parseInt(raingauge?.catchment_dam_id) === parseInt(dam?.id));
                return (
                  <Wrapper key={index} className="w-full h-10 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 overflow-hidden flex items-center px-3">
                    <Typography tag="p" className="text-xs uppercase">
                      {dam?.name} – <Typography tag="span" text={raingauges?.length} className="text-xs text-primary" /> Rain Gauges
                    </Typography>
                  </Wrapper>
                )
              })
            }
            
            {/* Repeat similar blocks as needed */}
          </Wrapper>
          <Wrapper className="w-[48%] h-full border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg overflow-hidden"></Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default RainGauge;

// barChartStyles remains unchanged
const barChartStyles = {
  series: [{
    name: 'Rainfall',
    data: [],
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
        },
      }],
    },
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: [],
      tickPlacement: 'on',
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
        type: 'horizontal',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 250],
      },
    },
  },
};