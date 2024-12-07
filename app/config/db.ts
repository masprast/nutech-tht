import { Pool } from "pg";
import { env } from "./env";

const pool = new Pool({
	host: env.POSTGRES_HOST,
	user: env.POSTGRES_USER,
	password: env.POSTGRES_PASS,
	database: env.POSTGRES_DB,
	port: env.POSTGRES_PORT,
	// connectionString: env.DATABASE_URL,
	idleTimeoutMillis: 30000,
});

pool.on("connect", () => {
	console.log("connected to DB");
});

export const createUsersTable = () => {
	const queryText = `CREATE TABLE IF NOT EXISTS
	users(
		id SERIAL PRIMARY KEY,
		email VARCHAR(256) NOT NULL UNIQUE,
		password TEXT NOT NULL,
		first_name TEXT NOT NULL,
		last_name TEXT NOT NULL,
		profile_image TEXT,
	)`;
	pool.query(queryText).then((res) => {
		console.log(res);
	});
};

export const createBalanceTable = () => {
	const queryText = `CREATE TABLE IF NOT EXISTS
	balance(
		id SERIAL PRIMARY KEY,
		user_id INT NOT NULL,
		balance INT NOT NULL,
		FOREIGN KEY (user_id) REFERENCES users (id)

	)`;
	pool.query(queryText).then((res) => {
		console.log(res);
	});
};

export const createServicesTable = () => {
	const queryText = `CREATE TABLE IF NOT EXISTS
	services(
		id SERIAL PRIMARY KEY,
		service_code VARCHAR(20) NOT NULL UNIQUE,
		service_name VARCHAR(192) NOT NULL,
		service_icon TEXT NOT NULL,
		service_tariff INT NOT NULL
	)`;
	pool.query(queryText).then((res) => {
		console.log(res);
	});
};

export const createBannerTable = () => {
	const queryText = `CREATE TABLE IF NOT EXISTS
	banners(
		id SERIAL PRIMARY KEY,
		banner_name VARCHAR(128) NOT NULL,
		banner_image TEXT NOT NULL,
		description TEXT NOT NULL,
	)`;
	pool.query(queryText).then((res) => {
		console.log(res);
	});
};

export const createTransactionTable = () => {
	const queryText = `CREATE TABLE IF NOT EXISTS
	transaction(
		id SERIAL PRIMARY KEY,
		invoice_number VARCHAR(15) NOT NULL UNIQUE,
		service_id INT NOT NULL,
		transaction_type VARCHAR(7) NOT NULL,
		total_amount INT NOT NULL,
		description TEXT NOT NULL,
		created_on TIMESTAMP
	)`;
	pool.query(queryText).then((res) => {
		console.log(res);
	});
};

export const createUsersTransactionTable = () => {
	const queryText = `CREATE TABLE IF NOT EXISTS
	users_transaction(
		user_id INT,
		transaction_id INT,
		PRIMARY KEY (user_id, transaction_id),
		FOREIGN KEY (user_id) REFERENCES users (id),
		FOREIGN KEY (transaction_id) REFERENCES transaction (id)
	)`;
	pool.query(queryText).then((res) => {
		console.log(res);
	});
};

export default pool;
