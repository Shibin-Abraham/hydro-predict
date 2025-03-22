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