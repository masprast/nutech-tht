import swaggerUI from "swagger-ui-express";
// import { Controller } from "../../interfaces/controller";
import swaggerDef from "../utils/swagger";
import { Router } from "express";

// export class DocsController extends Controller {
// 	constructor() {
// 		super("/docs");
// 		this.initRoute();
// 	}
// 	protected initRoute(): void {
// 		this.router.use(`${this.path}/docs`, swaggerUI.serve);
// 		this.router.get(`${this.path}`, swaggerUI.setup(swaggerDef, { explorer: true }));
// 	}
// }

const router = Router();
router.use("/docs", swaggerUI.serve);
router.get("/docs", swaggerUI.setup(swaggerDef, { explorer: true }));

export default router;
