import express, { Request, Response } from "express";
import helmet from "helmet";
import { env } from "./config/env";
import router from "./routes/route";
import pool from // createUsersTable,
// createBalanceTable,
// createServicesTable,
// createBannerTable,
// createTransactionTable,
// createUsersTransactionTable,
"./config/db";

const app = express();

app.use(helmet());
app.use(express.json());

app.use("/", router);
app.get("/", (req: Request, res: Response) => {
	// pool.on("connect", async () => {
	// 	await pool.query(createUsersTable);
	// 	await pool.query(createBalanceTable);
	// 	await pool.query(createServicesTable);
	// 	await createBannerTable();
	// 	await pool.query(createTransactionTable);
	// 	await pool.query(createUsersTransactionTable);
	// });
	res.send("server is runnung");
});

app.listen(env.PORT, () => {
	console.log(`app is running on ${env.PORT}`);
});

export default app;
