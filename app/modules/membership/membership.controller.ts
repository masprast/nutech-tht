import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { createToken, loginUser, registerUser, updateUser, isLoggedIn, findUser } from "./membership.service";
import { RegisterPayload } from "./membership.validation";
import { validationResult } from "express-validator";

async function register(req: Request, res: Response, next: NextFunction) {
	try {
		const error = validationResult(req);
		if (error) {
			res.status(400).json({ status: 102, message: "format email salah", data: null });
		}
		const body = req.body as RegisterPayload;
		const existedUser = await findUser(body.email);
		if (existedUser) {
			res.status(400).json({ status: 102, message: "email sudah terdaftar", data: null });
		}
		const newUser = await registerUser(body);
		res.cookie("Authentication", createToken(newUser.id));
		res.status(200).json({ status: 0, message: "registrasi berhasil silahkan login", data: null });
	} catch (error) {
		next(error);
	}
}

async function login(req: Request, res: Response, next: NextFunction) {
	try {
		const error = validationResult(req);
		if (error) {
			res.status(400).json({ status: 102, message: "format email salah", data: null });
		}
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
