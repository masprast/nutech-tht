import { NextFunction, Request, Response } from "express";
import { Controller } from "../../interfaces/controller";
import { MembershipService } from "./membership.service";
import validationMiddleware from "../../middleware/validation";
import { loginScheme, registerScheme } from "./membership.validation";

export class MembershipController extends Controller {
	private membershipService = new MembershipService();
	constructor() {
		super("/");
		this.initRoute();
	}
	protected initRoute(): void {
		this.router.post(`${this.path}/registtration`, validationMiddleware(registerScheme), this.register);
		this.router.post(`${this.path}/login`, validationMiddleware(loginScheme), this.login);
		this.router.get(`${this.path}/profile`, this.isLoggedIn);
		// this.router.put(`${this.path}/profile/update`);
	}

	private async register(req: Request, res: Response, next: NextFunction) {
		try {
			const newUser = await this.membershipService.registerUser(req.body);
			res.cookie("Authentication", this.membershipService.createToken(newUser.id));
			res.status(201).json(newUser);
		} catch (error) {
			next(error);
		}
	}

	private async login(req: Request, res: Response, next: NextFunction) {
		try {
			const user = await this.membershipService.loginUser(req.body);
			res.cookie("Authentication", this.membershipService.createToken(user.id));
			res.json(user);
		} catch (error) {
			next(error);
		}
	}

	private async isLoggedIn(req: Request, res: Response, next: NextFunction) {
		try {
			const loggedUser = await this.membershipService.isLoggedIn(1);
			res.json(loggedUser);
		} catch (error) {
			next(error);
		}
	}

	private async update(req: Request, res: Response, next: NextFunction) {
		try {
			// const userData=await this.membershipService.
		} catch (error) {
			next(error);
		}
	}
}
