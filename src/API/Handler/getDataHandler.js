import axiosInstance from "../Config/axiosInstance";

export const getDamData = async ({ id, limit, offset,test } = {}) => {
    try {
        const params = {};
        if (id !== undefined) params.id = id;
        if (limit !== undefined) params.limit = limit;
        if (offset !== undefined) params.offset = offset;
        if (test !== undefined) params.test = test;

        const response = await axiosInstance.get('/dam-data', { params });
        return response;
    } catch (error) {
        console.error('Error getDamData :', error);
        throw error;
    }
}