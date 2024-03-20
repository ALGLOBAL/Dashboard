import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class IAuthBody {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
