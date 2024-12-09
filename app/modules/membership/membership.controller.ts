import { NextFunction, Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import { MembershipService } from "./membership.service";

const membershipService = new MembershipService();

async function register(req: Request, res: Response, next: NextFunction) {
	try {
		const newUser = await membershipService.registerUser(req.body);
		res.cookie("Authentication", membershipService.createToken(newUser.id));
		res.status(201).json(newUser);
	} catch (error) {
		next(error);
	}
}

async function login(req: Request, res: Response, next: NextFunction) {
	try {
		const user = await membershipService.loginUser(req.body);
		res.cookie("Authentication", membershipService.createToken(user.id));
		res.json(user);
	} catch (error) {
		next(error);
	}
}

async function isLoggedIn(req: Request, res: Response, next: NextFunction) {
	try {
		const token = req.headers["authorization"]?.split(" ")[1];
		const userid = jwt.decode(token!);
		// const loggedUser = await membershipService.isLoggedIn(userid);
		res.json(userid);
	} catch (error) {
		next(error);
	}
}

async function update(req: Request, res: Response, next: NextFunction) {
	try {
		const token = req.headers["authorization"]?.split(" ")[1];
		console.log(token);

		const userid = jwt.decode(token!);
		const userData = await this.membershipService.updateUserById(userid, req.body);
		res.json(userData);
	} catch (error) {
		next(error);
	}
}

export default { register, login, isLoggedIn, update };
