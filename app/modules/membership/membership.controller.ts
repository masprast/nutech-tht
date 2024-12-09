import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { createToken, loginUser, registerUser, updateUser, isLoggedIn } from "./membership.service";
import { RegisterPayload } from "./membership.validation";

async function register(req: Request, res: Response, next: NextFunction) {
	try {
		const newUser = await registerUser(req.body);
		res.cookie("Authentication", createToken(newUser.id));
		res.status(200).json({ status: 0, message: "registrasi berhasil silahkan login", data: null });
	} catch (error) {
		next(error);
	}
}

async function login(req: Request, res: Response, next: NextFunction) {
	try {
		const user = await loginUser(req.body);
		res.cookie("Authentication", createToken(user.id));
		res.json(user);
	} catch (error) {
		next(error);
	}
}

async function isLogged(req: Request, res: Response, next: NextFunction) {
	try {
		const token = req.headers["authorization"]?.split(" ")[1];
		const userid = jwt.decode(token!);
		const loggedUser = await isLoggedIn(Number(userid));
		res.json(loggedUser);
	} catch (error) {
		next(error);
	}
}

async function update(req: Request, res: Response, next: NextFunction) {
	try {
		const token = req.headers["authorization"]?.split(" ")[1];
		const userid = jwt.decode(token!);
		const userData = await updateUser(Number(userid), req.body as RegisterPayload);
		res.json(userData);
	} catch (error) {
		next(error);
	}
}

export default { register, login, isLogged, update };
