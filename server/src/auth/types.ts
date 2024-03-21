import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { IUser } from "../users/types";

export class IAuthBody {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}

export type IAuthResponse = {
    access_token: string;
    email: string;
    userId: string;
};
