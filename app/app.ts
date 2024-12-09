import express, { Request, Response } from "express";
import helmet from "helmet";
import { env } from "./config/env";
import pool from "./config/db";
import router from "./routes/route";

class App {
	private app: express.Application;
	constructor() {
		this.app = express();
		this.initMiddleware();
		this.initController();
	}

	private initMiddleware() {
		this.app.use(helmet());
	}

	private initController() {
		this.app.use("/", router);
		this.app.get("/", (req: Request, res: Response) => {
			res.send("server running");
		});
	}

	listen() {
		this.app.listen(env.PORT, () => {
			console.log("=== LOG ===");

			pool.on("connect", () => {
				console.log("server running");
			});
			console.log(`App run on port ${env.PORT}`);
		});
	}
}

export default App;
