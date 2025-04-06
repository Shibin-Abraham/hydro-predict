import axiosInstance from "../Config/axiosInstance";

export const getDamData = async ({ id,date, limit, offset,test } = {}) => {
    try {
        const params = {};
        if (id !== undefined) params.id = id;
        if (date !== undefined) params.date = date;
        if (limit !== undefined) params.limit = limit;
        if (offset !== undefined) params.offset = offset;
        if (test !== undefined) params.test = test;

        const response = await axiosInstance.get('/dam-data', { params });
        return response;
    } catch (error) {
        console.error('Error getDamData :', error);
        throw error;
    }
}

export const getDamAlert = async ({ id } = {}) => {
    try {
        const params = {};
        if (id !== undefined) params.id = id;

        const response = await axiosInstance.get('/dam-alert', { params });
        return response;
    } catch (error) {
        console.error('Error getDamData :', error);
        throw error;
    }
}

export const getRaingaugeData = async ({ id,date, limit, offset } = {}) => {
    try {
        const params = {};
        if (id !== undefined) params.id = id;
        if (date !== undefined) params.date = date;
        if (limit !== undefined) params.limit = limit;
        if (offset !== undefined) params.offset = offset;
        //if (test !== undefined) params.test = test;

        const response = await axiosInstance.get('/raingauge-data', { params });
        return response;
    } catch (error) {
        console.error('Error getRaingauge :', error);
        throw error;
    }
}

export const getPredictionData = async ({ limit, offset } = {}) => {
    try {
        const params = {};
        if (limit !== undefined) params.limit = limit;
        if (offset !== undefined) params.offset = offset;
        //if (test !== undefined) params.test = test;

        const response = await axiosInstance.get('/prediction-data', { params });
        return response;
    } catch (error) {
        console.error('Error getPredictionData :', error);
        throw error;
    }
}