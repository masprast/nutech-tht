// import express, { Request, Response } from "express";
// import helmet from "helmet";
// import { env } from "./config/env";
// import pool from "./config/db";
// import router from "./routes/route";

// class App {
// 	private app: express.Application;
// 	constructor() {
// 		this.app = express();
// 		this.initMiddleware();
// 		this.initController();
// 	}

// 	private initMiddleware() {
// 		this.app.use(helmet());
// 	}

// 	private initController() {
// 		this.app.use("/", router);
// 		this.app.get("/", (req: Request, res: Response) => {
// 			res.send("server running");
// 		});
// 	}

// 	listen() {
// 		this.app.listen(env.PORT, () => {
// 			console.log("=== LOG ===");

// 			pool.on("connect", () => {
// 				console.log("server running");
// 			});
// 			console.log(`App run on port ${env.PORT}`);
// 		});
// 	}
// }

// export default App;

import express, { Request, Response } from "express";
import helmet from "helmet";
import route from "./routes/route";
import { env } from "./config/env";

const app = express();

app.use(helmet());
app.use(express.json());

app.use("/", route);
app.get("/", (req: Request, res: Response) => {
	res.send("server is runnung");
});

app.listen(env.PORT, () => {
	console.log(`app is running on ${env.PORT}`);
});
export default app;
