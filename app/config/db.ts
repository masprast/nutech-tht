import { Pool } from "pg";
import { env } from "./env";

const pool = new Pool({
	// host: env.PGHOST,
	// user: env.POSTGRES_USER,
	// password: env.POSTGRES_PASSWORD,
	// database: env.POSTGRES_DB,
	// port: env.POSTGRES_PORT,
	connectionString: env.DATABASE_URL,
	idleTimeoutMillis: 30000,
});

// export const createUsersTable = `CREATE TABLE IF NOT EXISTS
// users(
// 	id SERIAL PRIMARY KEY,
// 	email VARCHAR(256) NOT NULL UNIQUE,
// 	password TEXT NOT NULL,
// 	first_name TEXT NOT NULL,
// 	last_name TEXT NOT NULL,
// 	profile_image TEXT NOT NULL DEFAULT "https://yoururlapi.com/profile.jpeg",
// )`;

// export const createBalanceTable = `CREATE TABLE IF NOT EXISTS
// 	balance(
// 		id SERIAL PRIMARY KEY,
// 		user_id INT NOT NULL,
// 		balance INT NOT NULL,
// 		FOREIGN KEY (user_id) REFERENCES users (id)
// 	)`;

// export const createServicesTable = `CREATE TABLE IF NOT EXISTS
// 	services(
// 		id SERIAL PRIMARY KEY,
// 		service_code VARCHAR(20) NOT NULL UNIQUE,
// 		service_name VARCHAR(192) NOT NULL,
// 		service_icon TEXT DEFAULT "https://nutech-integrasi.app/dummy.jpg",
// 		service_tariff INT NOT NULL
// 	)`;

// export const createBannerTable = async () => {
// 	const queryText = `CREATE TABLE IF NOT EXISTS
// 	banners(
// 		id SERIAL PRIMARY KEY,
// 		banner_name VARCHAR(128) NOT NULL,
// 		banner_image TEXT DEFAULT "https://nutech-integrasi.app/dummy.jpg",
// 		description TEXT NOT NULL,
// 	)`;
// 	await pool.query(queryText);
// 	const queryAddBanner = `INSERT INTO banners (banner_name, banner_image, description) values ($1, $2, $3)`;
// 	for (let index = 0; index < 6; index++) {
// 		const values = [`Banner ${index + 1}`, "https://nutech-integrasi.app/dummy.jpg", "Lerem Ipsum Dolor sit amet"];
// 		await pool.query(queryAddBanner, values);
// 	}
// };

// export const createTransactionTable = `CREATE TABLE IF NOT EXISTS
// 	transaction(
// 		id SERIAL PRIMARY KEY,
// 		invoice_number VARCHAR(15) NOT NULL UNIQUE,
// 		service_id INT NOT NULL,
// 		transaction_type VARCHAR(7) NOT NULL,
// 		total_amount INT NOT NULL,
// 		description TEXT NOT NULL,
// 		created_on TIMESTAMP
// 	)`;

// export const createUsersTransactionTable = `CREATE TABLE IF NOT EXISTS
// 	users_transaction(
// 		user_id INT,
// 		transaction_id INT,
// 		PRIMARY KEY (user_id, transaction_id),
// 		FOREIGN KEY (user_id) REFERENCES users (id),
// 		FOREIGN KEY (transaction_id) REFERENCES transaction (id)
// 	)`;

export default pool;
