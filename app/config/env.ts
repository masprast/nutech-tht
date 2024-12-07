import { config } from "dotenv";
import { cleanEnv, port, str } from "envalid";

config();

export const env = cleanEnv(process.env, {
	POSTGRES_USER: str(),
	POSTGRES_PASS: str(),
	POSTGRES_HOST: str(),
	POSTGRES_PORT: port({ default: 5432 }),
	POSTGRES_DB: str(),
	DATABASE_URL: str(),

	PORT: port({ default: 3000 }),

	JWT_SECRET: str(),
});
