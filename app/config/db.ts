import { Pool } from "pg";
import { env } from "./env";
import { Response } from "express";

const pool = new Pool({
	host: env.POSTGRES_HOST,
	user: env.POSTGRES_USER,
	password: env.POSTGRES_PASS,
	database: env.POSTGRES_DB,
	port: env.POSTGRES_PORT,
	// connectionString: env.DATABASE_URL,
	idleTimeoutMillis: 30000,
});

export const createUsersTable = `CREATE TABLE IF NOT EXISTS
users(
	id SERIAL PRIMARY KEY,
	email VARCHAR(256) NOT NULL UNIQUE,
	password TEXT NOT NULL,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	profile_image TEXT,
)`;

export const createBalanceTable = `CREATE TABLE IF NOT EXISTS
	balance(
		id SERIAL PRIMARY KEY,
		user_id INT NOT NULL,
		balance INT NOT NULL,
		FOREIGN KEY (user_id) REFERENCES users (id)
	)`;

export const createServicesTable = `CREATE TABLE IF NOT EXISTS
	services(
		id SERIAL PRIMARY KEY,
		service_code VARCHAR(20) NOT NULL UNIQUE,
		service_name VARCHAR(192) NOT NULL,
		service_icon TEXT NOT NULL,
		service_tariff INT NOT NULL
	)`;

export const createBannerTable = (res: Response) => {
	const queryText = `CREATE TABLE IF NOT EXISTS
	banners(
		id SERIAL PRIMARY KEY,
		banner_name VARCHAR(128) NOT NULL,
		banner_image TEXT NOT NULL,
		description TEXT NOT NULL,
	)`;
	pool.query(queryText).then(() => {
		res.send("created table banner");
	});
	const queryAddBanner = `INSERT INTO banners (banner_name, banner_image, description) values ($1, $2, $3)`;
	for (let index = 0; index < 6; index++) {
		const values = [`Banner ${index + 1}`, "https://nutech-integrasi.app/dummy.jpg", "Lerem Ipsum Dolor sit amet"];
		pool.query(queryAddBanner, values).then(() => {
			res.send(`inserted banner ${index + 1}`);
		});
	}
};

export const createTransactionTable = `CREATE TABLE IF NOT EXISTS
	transaction(
		id SERIAL PRIMARY KEY,
		invoice_number VARCHAR(15) NOT NULL UNIQUE,
		service_id INT NOT NULL,
		transaction_type VARCHAR(7) NOT NULL,
		total_amount INT NOT NULL,
		description TEXT NOT NULL,
		created_on TIMESTAMP
	)`;

export const createUsersTransactionTable = `CREATE TABLE IF NOT EXISTS
	users_transaction(
		user_id INT,
		transaction_id INT,
		PRIMARY KEY (user_id, transaction_id),
		FOREIGN KEY (user_id) REFERENCES users (id),
		FOREIGN KEY (transaction_id) REFERENCES transaction (id)
	)`;

export default pool;
