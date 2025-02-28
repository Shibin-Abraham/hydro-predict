import axiosInstance from "../Config/axiosInstance";

export const rememberMe = async (token) => {
    try {
        const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
        const response = await axiosInstance.get('/remember-me', config);
        return response;
    } catch (error) {
        console.error('Error getDamData :', error);
        throw error;
    }
}