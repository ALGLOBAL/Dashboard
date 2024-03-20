import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
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
	controllers: [ DashboardController ],
	providers: [ DashboardService ]
})
export class DashboardModule {
}
