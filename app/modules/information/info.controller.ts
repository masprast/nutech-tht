import { NextFunction, Request, Response } from "express";
import service from "./info.service";
import { validationResult } from "express-validator";

async function getBannerList(req: Request, res: Response, next: NextFunction) {
	try {
		const bannerList = await service.getBannerList();
		res.send({ status: 0, message: "berhasil", data: bannerList });
	} catch (error) {
		next(error);
	}
}

async function getService(req: Request, res: Response, next: NextFunction) {
	try {
		const error = validationResult(req);
		if (error) {
			res.status(400).json({ status: 102, message: "nama service harus huruf", data: null });
		}
		const aservice = await service.getService(req.body.name);
		res.json({ status: 0, message: "berhasil", data: aservice });
	} catch (error) {
		next(error);
	}
}

export default { getBannerList, getService };
