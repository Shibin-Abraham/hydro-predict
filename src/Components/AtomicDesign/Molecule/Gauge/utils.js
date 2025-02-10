export const alertColor = (value) => {
    switch (true) { 
        case value >= 205:
            return 'color-red';
        case value >= 115:
            return 'color-orange';
        case value >= 65:
            return 'color-yellow';
        default:
            return 'primary'; 
    }
};
export const rainAlert = (value) => {
    switch (true) { 
        case value >= 205:
            return {alert:'Red alert',level:'Extreme'};
        case value >= 115:
            return {alert:'Orange alert',level:'Heavy'};
        case value >= 65:
            return {alert:'Yellow alert',level:'Moderate'};
        case value >0:
            return {alert:'No alert',level:'Light'};
        default:
            return {alert:'No alert',level:'No'};
    }
};