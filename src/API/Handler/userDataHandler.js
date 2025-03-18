import axiosInstance from "../Config/axiosInstance";

export const rememberMe = async (token) => {
    try {
        const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
        const response = await axiosInstance.get('/remember-me', config);
        return response;
    } catch (error) {
        console.error('Error rememberMe :', error);
        throw error;
    }
}

export const getAllUsers = async (token) => {
    try {
        const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
        const response = await axiosInstance.get('/users', config);
        return response;
    } catch (error) {
        console.error('Error getAllUsers :', error);
        throw error;
    }
}