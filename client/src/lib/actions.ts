import { AxiosError } from 'axios';
import { login } from '../api/service'

export async function authenticate(formData: FormData) {
    try {
        const data = Object.fromEntries(formData.entries());
        if (data.email && data.password) {
            const response = await login(data.email.toString(), data.password.toString());
            // const {access_token, userId} = response.data;
            // setToken(access_token, userId);
            return response.data;
        }
    } catch (error: AxiosError) {
        if (error.response?.data) {
            console.warn(error.response.data);
        }
        console.warn(error);
    }
}
