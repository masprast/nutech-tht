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
// import route from "./routes/route";
import { env } from "./config/env";
import pool, {
	createBalanceTable,
	createBannerTable,
	createServicesTable,
	createTransactionTable,
	createUsersTable,
	createUsersTransactionTable,
} from "./config/db";

const app = express();

app.use(helmet());
app.use(express.json());

// app.use("/", route);
app.get("/", (req: Request, res: Response) => {
	pool.on("connect", async () => {
		await pool.query(createUsersTable);
		await pool.query(createBalanceTable);
		await pool.query(createServicesTable);
		createBannerTable(res);
		await pool.query(createTransactionTable);
		await pool.query(createUsersTransactionTable);
	});
	res.send("server is runnung");
});

app.listen(env.PORT, () => {
	console.log(`app is running on ${env.PORT}`);
});

// import bodyParser from "body-parser";
// import express from "express";
// import pg from "pg";

// // Connect to the database using the DATABASE_URL environment
// //   variable injected by Railway
// const pool = new pg.Pool();

// const app = express();
// const port = process.env.PORT || 3333;

// app.use(bodyParser.json());
// app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
// app.use(bodyParser.text({ type: "text/html" }));

// app.get("/", async (req, res) => {
//   const { rows } = await pool.query("SELECT NOW()");
//   res.send(`Hello, World! The time from the DB is ${rows[0].now}`);
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
