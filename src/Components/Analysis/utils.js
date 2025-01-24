export const getColor = ({theme})=>{
    console.log(theme)
    switch(theme) {
        case 'blue':
          return "#8575ff79"
        case 'green':
          return "#00b30079"
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
/*
<ResponsiveCalendar
              data={data}
              width={600}
              from="2023-01-01"
              to="2023-12-31"
              emptyColor="#595959"
              colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
              margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
              yearSpacing={40}
              monthBorderColor="#000000"
              dayBorderWidth={2}
              dayBorderColor="#000000"
              legends={[
                  {
                      anchor: 'bottom-right',
                      direction: 'row',
                      translateY: 36,
                      itemCount: 4,
                      itemWidth: 36,
                      itemHeight: 36,
                      itemsSpacing: 14,
                      itemDirection: 'right-to-left'
                  }
              ]}
        />*/