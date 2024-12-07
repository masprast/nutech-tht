import express, { Request, Response } from "express";
import helmet from "helmet";
import { Controller } from "./interfaces/controller";
import { env } from "./config/env";
import pool from "./config/db";

class App {
	private app: express.Application;
	constructor(controller: Controller[]) {
		pool.on("connect", () => {
			console.log("connected to DB");
		});
		this.app = express();
		this.initMiddleware();
		this.initController(controller);
	}

	private initMiddleware() {
		this.app.use(helmet());
	}

	private initController(controller: Controller[]) {
		this.app.get("/", (req: Request, res: Response) => {
			res.send("this is '/'");
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
