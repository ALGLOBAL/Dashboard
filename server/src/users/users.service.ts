import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { IUser } from "./types";
import { users } from './dto/users';

@Injectable()
export class UsersService {
	private users: IUser[] = [];

	constructor() {
		this.fillUsers().then((users) => this.users = users).catch(console.warn);
	}

	async fillUsers(): Promise<IUser[]> {
		return await Promise.all(users.map(async (user) => ({
			...user,
			password: await argon2.hash(user.password),
		})));
	}

	async findOne(email: string): Promise<IUser | undefined> {
		return this.users.find(user => user.email === email);
	}
}
