import express, { Request, Response } from "express";
import swaggerUI from "swagger-ui-express";
import helmet from "helmet";
import { Controller } from "./interfaces/controller";
import { env } from "./config/env";
import pool from "./config/db";
import swaggerDef from "./utils/swagger";

class App {
	private app: express.Application;
	constructor(controller: Controller[]) {
		this.app = express();
		this.initMiddleware();
		this.initController(controller);
	}

	private initMiddleware() {
		this.app.use(helmet());
	}

	private initController(controller: Controller[]) {
		// this.app.get("/", (req: Request, res: Response) => {
		// 	pool.on("connect", () => {
		// 		res.send("connected to DB");
		// 	});
		// });

		this.app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerDef, { explorer: true }));

		controller.forEach((c) => {
			this.app.use("/api/v1", c.router);
		});
	}

	listen() {
		this.app.listen(env.PORT, () => {
			pool.on("connect", () => {
				console.log("connected to DB");
			});
			console.log("jhknl");

			console.log(`App run on port ${env.PORT}`);
		});
	}
}

export default App;
