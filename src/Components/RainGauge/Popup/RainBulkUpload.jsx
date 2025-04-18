/* eslint-disable react/prop-types */
import Wrapper from '../../AtomicDesign/Atom/Wrapper/Wrapper'
import CloseIcon from '../../../Assets/icons/CloseIcon'
import InputPopUp from '../../AtomicDesign/Molecule/PopUp/InputPopUp'
import Typography from '../../AtomicDesign/Atom/Typography/Typography'
import { FaFileExcel } from 'react-icons/fa6'
import { useContext, useState } from 'react'
import { ExcelRenderer } from "react-excel-renderer";
import { usePopUp } from '../../Contexts/PopUpContext'
import Input from '../../AtomicDesign/Atom/Input/Input'
import Button from '../../AtomicDesign/Atom/Button/Button'
import { excelSerialToDate, excelTimeToString } from '../../Analysis/Popup/utils'
import { addBulkRainFallData } from '../../../API/Handler/setDataHandler'
import RaingaugeContext from '../../Contexts/RaingaugeContext/RaingaugeContext'
import Select from '../../AtomicDesign/Atom/Input/Select'

const RainBulkUpload = ({setAddRainBulkUpload}) => {
    const [header, setHeader] = useState([]);
    const [data, setData] = useState([]);
    const [fileName, setFileName] = useState("");
    const [validationError, setValidationError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRainGaugeId, setSelectedRainGaugeId] = useState(2);
    const [serverError,setServerError] = useState([])

    const { showSuccess, showError } = usePopUp()
    const { raingaugeData } = useContext(RaingaugeContext);

    const handleFile = (e) => {
            const file = e.target.files[0];
            console.log(file);
            setFileName(file.name);
            ExcelRenderer(file, (err, resp) => {
                if (err) {
                    console.log(err);
                    showError(err?.message)
                } else {
                    const newHeader = resp.rows[0]
                    const headerLower = newHeader.map((h) => h.toLowerCase().trim())
                    const requiredFields = [
                        "value",
                        "date",
                        "time"
                    ];
                    const missingFields = requiredFields.filter(
                        (field) => !headerLower.includes(field)
                    );
                    if (missingFields.length > 0) {
                        setValidationError(`Missing required fields: ${missingFields.join(", ")}`)
                    } else {
                        setValidationError(null)
                    }
                    setHeader(newHeader)
                    setData(resp.rows.slice(1))
                    console.log(data)
                }
            })
        }
        const handleSubmit = async () => {
                setIsLoading(true);
                if (!selectedRainGaugeId) {
                    setValidationError("Please select a Rain Gauge");
                    setIsLoading(false);
                    return
                }
                if (validationError || data.length === 0) {
                    return showError(validationError || "No data to submit");
                }
            
                // Define required fields based on API validation rules
                const requiredFields = [
                    "value",
                    "date",
                    "time"
                ];
            
                const formattedData = data.map((row) => {
                    const rowData = {};
                    header.forEach((h, index) => {
                        let value = row[index];
                        const key = h.toLowerCase().trim();
            
                        // Format 'date' field
                        if (key === "date") {
                            if (typeof value === "number") {
                                value = excelSerialToDate(value);
                            } else if (typeof value === "string") {
                                // Assume it's already in 'YYYY-MM-DD' format; adjust if needed
                                value = value.trim();
                            }
                        }
                        // Format 'time' field
                        else if (key === "time") {
                            if (typeof value === "number") {
                                value = excelTimeToString(value);
                            } else if (typeof value === "string") {
                                // Assume it's already in 'HH:MM' format; adjust if needed
                                value = value.trim();
                            }
                        }
            
                        rowData[key] = value;
                    });
                    return rowData;
                });
            
                // Filter out rows missing any required fields
                const validData = formattedData.filter(row =>
                    requiredFields.every(field => 
                        row[field] !== undefined && 
                        row[field] !== null && 
                        row[field] !== ""
                    )
                );
            
                if (validData.length === 0) {
                    return showError("No valid data rows to submit after filtering");
                }
            
                try {
                    const validDataWithIds = validData.map(row => ({
                        ...row,
                        raingauge_id: selectedRainGaugeId,
                    }));
                    const { data } = await addBulkRainFallData({ data: validDataWithIds });
                    showSuccess(data?.message);
                    console.log(data);
                    setAddRainBulkUpload(prev=>prev.fetchAllRaingaugeData())
                    setAddRainBulkUpload(prev=>prev.state=false)
                } catch (error) {
                    console.log(error);
                    showError(error?.message || 'An error occurred while uploading data');
                    if(error?.response?.status === 422) {
                        const errorsObj = error?.response?.data?.errors;
                        // grab all the arrays of messages…
                        const allErrorArrays = Object.values(errorsObj)
                        // flatten them into one array of strings
                        const flattened = allErrorArrays.flat();
                        setServerError(flattened);
                    }
                }
                finally {
                    setIsLoading(false);
                }
        };

  return (
    <InputPopUp width="60%" className="w-full h-full bg-[#000000be] absolute flex items-center justify-center z-20">
            <CloseIcon
                onClick={() => setAddRainBulkUpload((prev) => ({ ...prev, state: false }))}
                className="absolute z-20 size-5 text-[#595959] dark:text-[#7d8da196] top-4 right-4 hover:cursor-pointer"
            />
            <Wrapper className="w-full flex flex-col items-center justify-start content-start px-4 py-4 overflow-y-scroll no-scrollbar text-[#595959] dark:text-[#7d8da1]">
                <Wrapper className="p-1 rounded-3xl bg-primary">
                    <Wrapper className="w-full h-full bg-white rounded-3xl px-8 py-[1px]">
                        <Typography
                            tag="h4"
                            className={`font-semibold text-xs select-none capitalize text-primary-hover`}
                            text={`Bulk Upload Rain Gauge Data`}
                        />
                    </Wrapper>
                </Wrapper>
                <Wrapper className="flex flex-col items-start justify-center w-full pt-4">
                    <Select
                        options={raingaugeData.map((item) => ({id:item.id, name:item.station_name}))} 
                        onChange={(e)=>setSelectedRainGaugeId(parseInt(e.target.value))}
                        className='w-32 mb-4 h-6 bg-inherit rounded-md text-sm border-2 border-color-border dark:border-[#161d29f5] outline-none cursor-pointer' 
                        firstOptionClassName="dark:bg-[#121721f5]"
                        childClassName="dark:bg-[#121721f5]"
                        placeholder="Select Dam" 
                        defaultValue={selectedRainGaugeId}
                    />
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <Wrapper className="flex flex-col items-center justify-center">
                            <FaFileExcel className="size-8" />
                            <Typography tag="p" className="text-sm text-gray-500 dark:text-gray-400">
                                <Typography tag="span" className="font-semibold">{`${fileName?fileName:"Click to upload"}`}</Typography>
                            </Typography>
                            <Typography tag="p" className="text-xs text-gray-500 dark:text-gray-400">File format xlsx </Typography>
                        </Wrapper>
                        <Input accept=".xlsx" onChange={handleFile} id="dropzone-file" type="file" className="hidden" />
                    </label>
                </Wrapper>
                {validationError && (
                    <Wrapper className="w-full mt-2 text-red-500 text-sm">{validationError}</Wrapper>
                )}
                {serverError && (
                    serverError.map((msg, idx) => (
                        <Wrapper key={idx} className="w-full text-red-500 text-sm">
                          {msg}
                        </Wrapper>
                      ))
                )}
                <Wrapper className="w-full pt-4 overflow-x-scroll no-scrollbar">
                    <table className="w-full">
                        <thead className="bg-primary-variant text-white">
                            <tr>
                                {header.map((item, index) => (
                                    <th key={index} className="border-r border-color-border px-2 py-1 text-sm">
                                        {item}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-[#161d29] dark:text-[#7d8da1] text-xs">
                            {data.map((item, rowIndex) => (
                                <tr key={rowIndex} className={`${rowIndex%2===0?'bg-[#3838382b]':''} border-b border-color-border`}>
                                    {item.map((cell, colIndex) => {
                                        let displayValue;
                                        const columnName = header[colIndex].toLowerCase();
                                        if (columnName === "date") {
                                            if (cell instanceof Date) {
                                                const year = cell.getFullYear();
                                                const month = (cell.getMonth() + 1).toString().padStart(2, "0");
                                                const day = cell.getDate().toString().padStart(2, "0");
                                                displayValue = `${year}-${month}-${day}`;
                                            } else if (typeof cell === "number") {
                                                const date = new Date((cell - 25569) * 86400 * 1000);
                                                const year = date.getFullYear();
                                                const month = (date.getMonth() + 1).toString().padStart(2, "0");
                                                const day = date.getDate().toString().padStart(2, "0");
                                                displayValue = `${year}-${month}-${day}`;
                                            } else if (typeof cell === "string") {
                                                const date = new Date(cell);
                                                if (!isNaN(date.getTime())) {
                                                    const year = date.getFullYear();
                                                    const month = (date.getMonth() + 1).toString().padStart(2, "0");
                                                    const day = date.getDate().toString().padStart(2, "0");
                                                    displayValue = `${year}-${month}-${day}`;
                                                } else {
                                                    displayValue = cell;
                                                }
                                            } else {
                                                displayValue = cell;
                                            }
                                        } else if (columnName === "time") {
                                            if (cell instanceof Date) {
                                                const hours = cell.getHours().toString().padStart(2, "0");
                                                const minutes = cell.getMinutes().toString().padStart(2, "0");
                                                const seconds = cell.getSeconds().toString().padStart(2, "0");
                                                displayValue = `${hours}:${minutes}:${seconds}`;
                                            } else if (typeof cell === "number") {
                                                const totalSeconds = Math.round(cell * 86400);
                                                const hours = Math.floor(totalSeconds / 3600) % 24;
                                                const minutes = Math.floor((totalSeconds % 3600) / 60);
                                                const seconds = totalSeconds % 60;
                                                displayValue = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
                                            } else if (typeof cell === "string") {
                                                displayValue = cell;
                                            } else {
                                                displayValue = cell;
                                            }
                                        } else {
                                            displayValue = cell;
                                        }

                                        return (
                                            <td key={colIndex} className="text-center py-2">
                                                {displayValue}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Wrapper>
                {
                 
                <Button
                    className={`${(data.length===0 || validationError)?'bg-gray-400 dark:bg-gray-700 cursor-not-allowed text-gray-300':'hover:bg-primary-hover dark:bg-primary-variant bg-primary text-white '} w-full mt-5 h-11`}
                    containerClass="text-sm flex items-center justify-center gap-3"
                    onClick={handleSubmit}
                    disabled={data.length===0 || validationError}
                    isLoading={isLoading}
                >
                    submit
                </Button>}

            </Wrapper>
        </InputPopUp>
  )
}

export default RainBulkUpload
