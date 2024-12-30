import axiosInstance from "../Config/axiosInstance";

export const signUp = async (data) => {
    try {
        const response = await axiosInstance.post('/signup', data);
        return response;
    } catch (error) {
        console.error('Error signUp :', error);
        throw error;
    }
}