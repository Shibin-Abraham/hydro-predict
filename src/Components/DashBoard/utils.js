export const data = [
    {
        "id": "Idukki",
        "data": [
            {
                "x": "11d-ago",
                "y": 47.55
            },
            {
                "x": "10d-ago",
                "y": 29.12
            },
            {
                "x": "9d-ago",
                "y": 40.95
            },
            {
                "x": "8d-ago",
                "y": 24.81
            },
            {
                "x": "7d-ago",
                "y": 23.13
            },
            {
                "x": "6d-ago",
                "y": 9.85
            },
            {
                "x": "5d-ago",
                "y": 17.69
            },
            {
                "x": "4d-ago",
                "y": 18.19
            },
            {
                "x": "3d-ago",
                "y": 19.94
            },
            {
                "x": "2d-ago",
                "y": 27.15
            },
            {
                "x": "1d-ago",
                "y": 34.53
            },
            {
                "x": "today",
                "y": 7.00
            }
        ]
    },
    {
        "id": "KALLARKUTTY",
        "data": [
            {
                "x": "11d-ago",
                "y": 32.48
            },
            {
                "x": "10d-ago",
                "y": 29.45
            },
            {
                "x": "9d-ago",
                "y": 20.12
            },
            {
                "x": "8d-ago",
                "y": 26.95
            },
            {
                "x": "7d-ago",
                "y": 17.86
            },
            {
                "x": "6d-ago",
                "y": 30.34
            },
            {
                "x": "5d-ago",
                "y": 35.59
            },
            {
                "x": "4d-ago",
                "y": 37.48
            },
            {
                "x": "3d-ago",
                "y": 27.70
            },
            {
                "x": "2d-ago",
                "y": 33.91
            },
            {
                "x": "1d-ago",
                "y": 27.03
            },
            {
                "x": "today",
                "y": 28.84
            }
        ]
    },
    {
        "id": "LOWER PERIYAR",
        "data": [
            {
                "x": "11d-ago",
                "y": 55.66
            },
            {
                "x": "10d-ago",
                "y": 48.02
            },
            {
                "x": "9d-ago",
                "y": 58.87
            },
            {
                "x": "8d-ago",
                "y": 41.00
            },
            {
                "x": "7d-ago",
                "y": 48.48
            },
            {
                "x": "6d-ago",
                "y": 43.10
            },
            {
                "x": "5d-ago",
                "y": 43.89
            },
            {
                "x": "4d-ago",
                "y": 50.98
            },
            {
                "x": "3d-ago",
                "y": 50.67
            },
            {
                "x": "2d-ago",
                "y": 47.60
            },
            {
                "x": "1d-ago",
                "y": 48.62
            },
            {
                "x": "today",
                "y": 33.22
            }
        ]
    }, {
        "id": "PONMUDI",
        "data": [
            {
                "x": "11d-ago",
                "y": 15.75
            },
            {
                "x": "10d-ago",
                "y": 17.98
            },
            {
                "x": "9d-ago",
                "y": 14.71
            },
            {
                "x": "8d-ago",
                "y": 15.17
            },
            {
                "x": "7d-ago",
                "y": 14.49
            },
            {
                "x": "6d-ago",
                "y": 16.21
            },
            {
                "x": "5d-ago",
                "y": 17.47
            },
            {
                "x": "4d-ago",
                "y": 10.84
            },
            {
                "x": "3d-ago",
                "y": 14.84
            },
            {
                "x": "2d-ago",
                "y": 12.29
            },
            {
                "x": "1d-ago",
                "y": 10.20
            },
            {
                "x": "today",
                "y": 17.66
            }
        ]
    },
]

export const transformDamData = (damArray) => {
    return damArray?.map(dam => {
        const damName = dam.name.toUpperCase();
        const damData = Array.isArray(dam.dam_data) ? dam.dam_data : [];
  
        // Filter and sort valid data points, then transform them
        const validData = damData
          .filter(entry => 
            entry.date && entry.time && // Ensure required fields exist
            entry.inflow !== undefined && !isNaN(parseFloat(entry.inflow)) // Valid y-value
          )
          .map(entry => ({
            x: entry.date, // Use the actual date as x
            y: parseFloat(entry.inflow), // Inflow value as y
            color: getDamColor(damName)
          }));
  
        return { id: damName, data: validData };
      })
      .filter(dam => dam.data.length > 0); // Exclude dams with no valid data
  };

export const damAlertColor = ({value,prefix,redLevel,orangeLevel,blueLevel,defaultLightColor,defaultDarkColor={}} ) => {
    switch (true) { 
        case parseFloat(value) >= parseFloat(redLevel) && parseFloat(value)!==0&&parseFloat(redLevel)!==0:
            return `${prefix}-color-red`;
        case parseFloat(value) >= parseFloat(orangeLevel)&& parseFloat(value)!==0&&parseFloat(orangeLevel)!==0:
            return `${prefix}-color-orange`;
        case parseFloat(value) >= parseFloat(blueLevel) && parseFloat(value)!==0&&parseFloat(blueLevel)!==0:
            return `${prefix}-color-blue`;
        default:
            return `${prefix}-[${defaultLightColor}] ${defaultDarkColor?`dark:${prefix}-[${defaultDarkColor}]`:''}`; 
    }
};

export const getDamAlerts=(dams)=> {
    const result = [];
    for (const dam of dams) {
      if (dam.dam_data && dam.dam_data.length > 0) {
        const first_data = {
            ...dam.dam_data[0],
            name:dam.name,
            district:dam.district,
            MWL:dam.MWL,
            FRL:dam.FRL,
            spillway_crest_level:dam.spillway_crest_level,
            live_storage_at_FRL:dam.live_storage_at_FRL
        };
        const water_level = parseFloat(first_data.water_level);
        const blue_level = parseFloat(first_data.alert.blue_level);
        const orange_level = parseFloat(first_data.alert.orange_level);
        const red_level = parseFloat(first_data.alert.red_level);
        let alert;
  
        if (water_level >= red_level && water_level!==0 && red_level!==0) {
          alert = "red";
        } else if (water_level >= orange_level && water_level!==0 && orange_level!==0) {
          alert = "orange";
        } else if (water_level >= blue_level  && water_level!==0 && blue_level!==0) {
          alert = "blue";
        } else {
          alert = "no";
        }
  
        const output_data = { ...first_data, alertColor: alert };
        result.push(output_data);
      }
    }
    return result;
  }

  export const getDamColor = (damName) => {
    const upperName = damName?.toUpperCase();
    return  generateRandomColor(upperName);
  };
  
  const generateRandomColor = (seed) => {
    // Generate consistent random color based on dam name
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${hash % 360}, 70%, 50%)`;
  };