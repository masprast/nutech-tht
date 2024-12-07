import { Pool } from "pg";
import { env } from "./env";

const pool = new Pool({
	// host: env.POSTGRES_HOST,
	// user: env.POSTGRES_USER,
	// password: env.POSTGRES_PASS,
	// database: env.POSTGRES_DB,
	// port: env.POSTGRES_PORT,
	connectionString: env.POSTGRES_DB_URL,
	idleTimeoutMillis: 30000,
});

export default pool;
