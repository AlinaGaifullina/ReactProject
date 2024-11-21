import axios, {AxiosRequestConfig} from 'axios';


export default class AxiosClient {
    static SUCCESS_STATUSES = [200, 201];
    static SERVER_ERROR = 500;
    api;

    constructor(config?: AxiosRequestConfig) {
        this.api = axios.create(config);
        this.api.defaults.baseURL = this.getDefaultBaseUrl();
    }
    getDefaultBaseUrl = () => {
        return 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    };
    get = (config?: any) => {
        return this.api.get(this.getDefaultBaseUrl(), config.config);
    };
    post = (config?: any) => {
        return this.api.post(config.url, config.data, config.config);
    };
    put = (config?: any) => {
        return this.api.put(config.url, config.data, config.config);
    };
    delete = (config?: any) => {
        return this.api.delete(config.url, config.config);
    };
}
