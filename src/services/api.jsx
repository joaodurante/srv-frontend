import axios from 'axios';
import { Alert, AlertTitle } from '@mui/material';


const api = axios.create({
    baseURL: 'https://github-guilhermekrambeck-projeto-srv-43mqpjzw6q-uc.a.run.app',
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});

const apiCaller = async (options) => {
    // return await api.request(options);
    return {status: 200}
}

const apiAlert = (response) => {
    console.log('alert')
    if(response.status >= 200 && response.status <= 299) {
        return(
            <Alert severity="success">
                <AlertTitle>Sucesso</AlertTitle>
                Operação realizada com sucesso!
            </Alert>
        );
    } else {
        return(
            <Alert severity="error">
                <AlertTitle>Erro</AlertTitle>
                Algo deu errado!
            </Alert>
        );
    }
}

export {apiCaller, apiAlert};