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

export const updateUserActivation = async ({userId, activate}) => {
    try {
        const response = await axiosInstance.put(`/users/${userId}/activate`, { activate });
        return response;
    } catch (error) {
        console.error('Error updating user activation:', error);
        throw error;
    }
}

export const getDamHandlingUsers = async ({dam_id}) => {
    try {
        const params = {};
        if (dam_id !== undefined) params.dam_id = dam_id;
        const response = await axiosInstance.get('/dam/handling-users',{ params });
        return response;
    } catch (error) {
        console.error('Error getDamHandlingUsers:', error);
        throw error;
    }
}
