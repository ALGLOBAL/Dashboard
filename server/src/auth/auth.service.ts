import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { IAuthResponse } from "./types";


@Injectable()
export class AuthService {
	constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

	async signIn(
		email: string,
		pass: string,
	): Promise<IAuthResponse> {
		const user = await this.usersService.findOne(email);
		const isPasswordValid = await argon2.verify(user.password, pass);
		if (!isPasswordValid) {
			throw new UnauthorizedException('Invalid password');
		}
		const payload = { username: user.email, userId: user.userId };
		return {
			access_token: await this.jwtService.signAsync(payload),
            user,
		};
	}
}
