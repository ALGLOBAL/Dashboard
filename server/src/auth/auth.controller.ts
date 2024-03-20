import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from "./auth.guard";
import { IAuthBody } from './types';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(HttpStatus.OK)
	@Post('login')
	signIn(@Body(new ValidationPipe()) body: IAuthBody) {
		return this.authService.signIn(body.email, body.password);
	}

	@Get('profile')
	@UseGuards(AuthGuard)
	getProfile(@Request() req: any) {
		return req.user;
	}
}
