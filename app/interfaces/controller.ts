import { Router } from "express";

export abstract class Controller {
	public router: Router;
	constructor(protected path: string) {
		this.router = Router();
		this.router.use("/");
	}

	protected abstract initRoute(): void;
}
