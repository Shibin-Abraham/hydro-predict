import axiosInstance from "../Config/axiosInstance";

export const getsample = async () => {
    try {
        const response = await axiosInstance.get('/sample')
        console.log(response)
    } catch (error) {
        console.error('Error getting data:', error);
        throw error;
    }
}