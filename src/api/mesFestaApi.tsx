import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.1.133:4000/api/v1';

const mesFestaApi = axios.create({ baseURL });

mesFestaApi.interceptors.request.use(
    async (config) => {
        const userLoged = await AsyncStorage.getItem('userLoged');
        if (!userLoged) return config;

        const userLogedParsed = JSON.parse(userLoged);

        if (userLogedParsed.token) {
            config.headers.Authorization = `Bearer ${userLogedParsed.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default mesFestaApi;