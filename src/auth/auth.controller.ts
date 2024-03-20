import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from "./auth.guard";

export type IAuthBody = {
	email: string,
	password: string,
}

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(HttpStatus.OK)
	@Post('login')
	signIn(@Body() body: IAuthBody) {
		return this.authService.signIn(body.email, body.password);
	}

	@Get('profile')
	@UseGuards(AuthGuard)
	getProfile(@Request() req: any) {
		return req.user;
	}
}
