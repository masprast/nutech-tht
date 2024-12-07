import express, { Request, response, Response } from "express";
import helmet from "helmet";
import { Controller } from "./interfaces/controller";
import { env } from "./config/env";
import pool from "./config/db";

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
		this.app.get("/", (req: Request, res: Response) => {
			pool.on("connect", () => {
				res.send("connected to DB");
			});
		});
		controller.forEach((c) => {
			this.app.use("api/v1", c.router);
		});
	}

	listen() {
		this.app.listen(env.PORT, () => {
			console.log(`App run on port ${env.PORT}`);
		});
	}
}

export default App;
