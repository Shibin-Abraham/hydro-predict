export const alertColor = (value,prefix,redLevel,orangeLevel,yellowLevel ) => {
    switch (true) { 
        case value >= redLevel:
            return `${prefix}-color-red`;
        case value >= orangeLevel:
            return `${prefix}-color-orange`;
        case value >= yellowLevel:
            return `${prefix}-color-yellow`;
        default:
            return `${prefix}-green-500`; 
    }
};
export const rainAlert = (value,redLevel,orangeLevel,yellowLevel) => {
    switch (true) { 
        case value >= redLevel:
            return {alert:'Red alert',level:'Extreme'};
        case value >= orangeLevel:
            return {alert:'Orange alert',level:'Heavy'};
        case value >= yellowLevel:
            return {alert:'Yellow alert',level:'Moderate'};
        case value >0:
            return {alert:'No alert',level:'Light'};
        default:
            return {alert:'No alert',level:'No'};
    }
};