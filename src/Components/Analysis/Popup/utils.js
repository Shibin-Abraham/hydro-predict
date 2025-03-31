export const decimalNumberPattern = {
    value: /^[0-9]+(\.[0-9]+)?$/,
    message: "Only accept numbers (decimals allowed)",
  };

export const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
};

export const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // Format: HH:MM
};

export const feetToMeter = (value) => {
    return value * 0.3048;
};

export const convertLevel = (value, unit) => {
    const parsed = parseFloat(value);
    if (isNaN(parsed)) return 0;
    return unit === "feet" ? feetToMeter(parsed) : parsed;
  };

  export const excelSerialToDate = (serial) => {
    const date = new Date((serial - 25569) * 86400 * 1000); // Excel epoch starts at 1900-01-01, adjust for Unix epoch
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// Convert Excel time (fraction of a day) to 'HH:MM'
export const excelTimeToString = (time) => {
    const totalSeconds = Math.round(time * 86400); // 86400 seconds in a day
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};