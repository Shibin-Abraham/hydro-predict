import axiosInstance from "../Config/axiosInstance";

export const addNewDam = async (data) => {
    try {
        const response = await axiosInstance.post('/dam', data);
        return response;
    } catch (error) {
        console.error('Error on dam(post) :', error);
        throw error;
    }
}

export const addDamHandlingUser = async (data) => {
    try {
        const response = await axiosInstance.post('/dam/handling-user/add-new', data);
        return response;
    } catch (error) {
        console.error('Error on addDamHandlingUser(post) :', error);
        throw error;
    }
}

export const deleteDamHandlingUser = async (data) => {
    try {
        const response = await axiosInstance.delete('/dam/handling-user/delete', {data});
        return response;
    } catch (error) {
        console.error('Error on deleteDamHandlingUser(post) :', error);
        throw error;
    }
}

export const checkDamHandlingUser = async (data) => {
    try {
        const response = await axiosInstance.post('/dam/handling-user/check', data);
        return response;
    } catch (error) {
        console.error('Error on checkDamHandlingUser(post) :', error);
        throw error;
    }
}

export const addNewDamData = async (data) => {
    try {
        const response = await axiosInstance.post('/dam-data/add', data);
        return response;
    } catch (error) {
        console.error('Error on addNewDamData(post) :', error);
        throw error;
    }
}

export const addBulkDamData = async (data) => {
    try {
        const response = await axiosInstance.post('/dam-bulk-data/add', data);
        return response;
    } catch (error) {
        console.error('Error on addBulkDamData(post) :', error);
        throw error;
    }
}

export const addNewDamAlert = async (data) => {
    try {
        const response = await axiosInstance.post('/dam-alert/add', data);
        return response;
    } catch (error) {
        console.error('Error on addNewDamAlert(post) :', error);
        throw error;
    }
}

export const addNewRaingauge = async (data) => {
    try {
        const response = await axiosInstance.post('/add-raingauge', data);
        return response;
    } catch (error) {
        console.error('Error on addNewRaingauge(post) :', error);
        throw error;
    }
}