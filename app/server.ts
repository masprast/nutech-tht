import { Server } from "http";
import pool, {
	createBalanceTable,
	createBannerTable,
	createServicesTable,
	createTransactionTable,
	createUsersTable,
	createUsersTransactionTable,
} from "./config/db";
import app from "./app";
import { env } from "./config/env";

let server: Server;

pool.on("connect", async () => {
	await pool.query(createUsersTable);
	await pool.query(createBalanceTable);
	await pool.query(createServicesTable);
	await createBannerTable();
	await pool.query(createTransactionTable);
	await pool.query(createUsersTransactionTable);
	server = app.listen(env.PORT, () => {
		console.log(`app is running on ${env.PORT}`);
	});
});
