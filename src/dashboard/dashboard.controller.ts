import { Controller, UseGuards, Get, Param, NotFoundException } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('dashboard')
export class DashboardController {
	constructor(private readonly dashboardService: DashboardService) {}

	@Get(':id')
	@UseGuards(AuthGuard)
	async getItemsByUserID(@Param('id') userId: string) {
		const resource = await this.dashboardService.getItemsByUserID(userId);
		if (!resource) {
			throw new NotFoundException('Resource not found');
		}
		return resource;
	}
}
