import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

export type IAuthBody = {
	email: string,
	password: string,
}

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@HttpCode(HttpStatus.OK)
	@Post('login')
	signIn(@Body() body: IAuthBody) {
		return this.authService.signIn(body.email, body.password);
	}
}
