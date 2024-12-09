import pool from "../../config/db";
import { Banner } from "../../models/banner.model";
import { Service } from "../../models/services.model";
import statement from "./info.statement";

async function getBanner() {
	const banner = await pool.query<Banner>(statement.getBannerList());
	return banner.rows;
}

async function getService(name: string) {
	const service = await pool.query<Service>(statement.getService(name));
	return service.rows[0];
}

export default { getBanner, getService };
