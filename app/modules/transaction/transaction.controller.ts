import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

async function getBalance(req: Request, res: Response, next: NextFunction) {
	try {
		const error = validationResult(req.headers);
		if (error) {
			res.status(401).json();
		}
		res.json({ k: 9 });
	} catch (error) {
		next(error);
	}
}

async function topup(req: Request, res: Response, next: NextFunction) {
	try {
		const error = validationResult(req.headers);
		if (error) {
			res.status(401).json();
		}
		res.json({ k: 9 });
	} catch (error) {
		next(error);
	}
}

async function createTransaction(req: Request, res: Response, next: NextFunction) {
	try {
		const error = validationResult(req.headers);
		if (error) {
			res.status(401).json();
		}
		res.json({ k: 9 });
	} catch (error) {
		next(error);
	}
}

async function getTransactionHist(req: Request, res: Response, next: NextFunction) {
	try {
		const error = validationResult(req.headers);
		if (error) {
			res.status(401).json();
		}
		res.json({ k: 9 });
	} catch (error) {
		next(error);
	}
}

export default { getBalance, topup, createTransaction, getTransactionHist };
