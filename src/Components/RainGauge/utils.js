// Helper function to calculate daily average rainfall
export const processRainfallData = (data) => {
    const dateMap = {};
    
    // Loop through each gauge
    data.forEach(gauge => {
      // Loop through each reading in the gauge
      gauge.raingauge_data.forEach(reading => {
        const date = reading.date;
        const value = parseFloat(reading.value);
        
        if (!dateMap[date]) {
          dateMap[date] = { sum: 0, count: 0 };
        }
        dateMap[date].sum += value;
        dateMap[date].count += 1;
      });
    });
    
    // Create sorted arrays of dates and their averages
    const dates = Object.keys(dateMap).sort();
    const averages = dates.map(date => {
        const avg = dateMap[date].sum / dateMap[date].count;
        return Number(avg.toFixed(2));
      });
    
    return { dates, averages };
  };
  