import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {ConfigService, ConfigModule} from "@nestjs/config";

@Module({
	imports: [ UsersModule, JwtModule.registerAsync({
		imports: [ConfigModule],
		useFactory: (configService: ConfigService) => ({
			secret: configService.get('JWT_CONST'),
			signOptions: { expiresIn: '1d' },
		}),
		inject: [ ConfigService ],
	}) ],
	controllers: [ AuthController ],
	providers: [ AuthService ]
})
export class AuthModule {
}
