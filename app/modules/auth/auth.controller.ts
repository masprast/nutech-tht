import { Controller } from "../../interfaces/controller";

export class AuthController extends Controller {
	constructor() {
		super("/");
		this.initRoute();
	}
	protected initRoute(): void {
		throw new Error("Method not implemented.");
	}
}
