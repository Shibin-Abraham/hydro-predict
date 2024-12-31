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

export const resendOTP = async (data) => {
    try {
        const response = await axiosInstance.post('/resend-otp', data);
        return response;
    } catch (error) {
        console.error('Error resendOTP :', error);
        throw error;
    }
}

export const verify = async (data) => {
    try {
        const response = await axiosInstance.post('/verify', data);
        return response;
    } catch (error) {
        console.error('Error verify :', error);
        throw error;
    }
}