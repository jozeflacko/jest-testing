import axios, { AxiosInstance } from 'axios';

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

export class Http {
    private _httpClient: AxiosInstance;

    constructor() {
        this._httpClient = axios.create({
            baseURL: 'https://reqres.in/api/',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public async get(url: string): Promise<User[]>  {
        const users = await this._httpClient.get(url);
        return users.data.data; // ugh!
    }
}