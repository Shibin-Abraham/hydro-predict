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