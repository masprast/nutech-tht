import { NextFunction, Request, Response } from "express";
import herror from "http-errors";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import pool from "../config/db";
import { User } from "../models/user.model";
import statement from "../modules/membership/membership.statement";

export async function authMiddleware(req: any, _: Response, next: NextFunction) {
	const token = req.headers["authorization"]?.split(" ")[1];
	if (!token) {
		throw new herror.Unauthorized();
	}
	const decoded = jwt.verify(token, env.JWT_SECRET) as { _id: number };
	if (!decoded._id) return next(new herror.Unauthorized());

	const user = await pool.query<User>(statement.findUserById(decoded._id));
	if (user.rowCount == 0) return next(new herror.Unauthorized());

	req.userId = decoded._id;
	next();
}
