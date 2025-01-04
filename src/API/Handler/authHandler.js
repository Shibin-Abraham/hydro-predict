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

export const login = async (data) => {
    try {
        const response = await axiosInstance.post('/login', data);
        return response;
    } catch (error) {
        console.error('Error login :', error);
        throw error;
    }
}

export const sendResetLink = async (data) => {
    try {
        const response = await axiosInstance.post('/password/forgot', data)
        return response;
    } catch (error) {
        console.error('Error sendResetLink :', error);
        throw error;
    }
}

export const resetPassword = async (data) => {
    try {
        const response = await axiosInstance.post('/password/reset', data)
        return response;
    } catch (error) {
        console.error('Error sendResetLink :', error);
        throw error;
    }
}
