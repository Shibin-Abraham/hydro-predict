import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.VITE_API_URL,
    timeout: 10000,
});


export default axiosInstance;