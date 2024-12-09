import swaggerUI from "swagger-ui-express";
import { Controller } from "../../interfaces/controller";
import swaggerDef from "../../utils/swagger";

export class DocsController extends Controller {
	constructor() {
		super("/docs");
		this.initRoute();
	}
	protected initRoute(): void {
		// this.router.use()
		this.router.use(`${this.path}/docs`, swaggerUI.serve, swaggerUI.setup(swaggerDef, { explorer: true }));
	}
}
