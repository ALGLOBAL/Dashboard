"use client"
import axios, { AxiosError, AxiosResponse } from 'axios';

export async function authenticate(formData: FormData) {
    try {
        const resp: AxiosResponse<{ access_token: string }> = await axios.post('http://localhost:3000/auth/login', {
            email: formData.get('email'),
            password: formData.get('password'),
        })
        const token = resp.data.access_token;
        console.log(token);
    } catch (error: AxiosError) {
            console.warn(error.response.data);
    }
}
