import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type IUser = {
	userId: number
	email: string
	password: string
};

@Injectable()
export class UsersService {
	private readonly users: IUser[] = [
		{
			userId: 1,
			email: 'test@gmail.com',
			password: '123456',
		},
		{
			userId: 2,
			email: 'test2@gmail.com',
			password: '654321',
		},
	];

	async findOne(email: string): Promise<IUser | undefined> {
		return this.users.find(user => user.email === email);
	}
}
