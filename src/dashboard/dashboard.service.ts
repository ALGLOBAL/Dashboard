import { Injectable } from '@nestjs/common';
import { IDashboardItem } from "./types";
import { dashboardsItems } from './dto/dashboardsItems';

@Injectable()
export class DashboardService {
	constructor() {}

	async getItemsByUserID(
		userId: string,
	): Promise<IDashboardItem[]> {
		return dashboardsItems.filter((item) => item.userId === userId);
	}
}
