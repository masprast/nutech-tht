// import pool, {
// 	createBalanceTable,
// 	createBannerTable,
// 	createServicesTable,
// 	createTransactionTable,
// 	createUsersTable,
// 	createUsersTransactionTable,
// } from "./config/db";
// import app from "./app";

// let server: Express.Application;

// pool.on("connect", async () => {
// 	await pool.query(createUsersTable);
// 	await pool.query(createBalanceTable);
// 	await pool.query(createServicesTable);
// 	await createBannerTable();
// 	await pool.query(createTransactionTable);
// 	await pool.query(createUsersTransactionTable);
// 	server = app;
// });
