import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    timeout: 20000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers['X-API-KEY'] = import.meta.env.VITE_API_KEY;
        config.headers['X-API-SECRET'] = import.meta.env.VITE_API_SECRET;
        return config;
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized! Check your API key and secret.');
        }
        return Promise.reject(error);
    }
);
export default axiosInstance;