import express, { Request, Response } from "express";
import helmet from "helmet";
import { Controller } from "./interfaces/controller";
import { env } from "./config/env";

class App {
	private app: express.Application;
	constructor(controller: Controller[]) {
		this.app = express();
		this.app.get("/", (req: Request, res: Response) => {
			res.send("this is '/'");
		});
		this.initMiddleware();
		this.initController(controller);
	}

	private initMiddleware() {
		this.app.use(helmet());
	}

	private initController(controller: Controller[]) {
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
