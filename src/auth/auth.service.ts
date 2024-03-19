import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IUser, UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

export type IAuthResponse = {
	access_token: string
	user: IUser
};
@Injectable()
export class AuthService {
	constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

	async signIn(
		email: string,
		pass: string,
	): Promise<IAuthResponse> {
		const user = await this.usersService.findOne(email);
		if (user?.password !== pass) {
			throw new UnauthorizedException();
		}
		const payload = { sub: user.userId, username: user.email };
		return {
			access_token: await this.jwtService.signAsync(payload),
            user,
		};
	}
}
