import { Client } from "pg";
import pool from "../../config/db";
import { User } from "../../models/user.model";
import { RegisterPayload } from "./auth.validation";
import statement from "../../db/statement";

export class AuthRepository {
	/**
	 * createUser
	 */
	public async createUser(payload: RegisterPayload) {
		// const client = await pool.connect();
		// try {
		// 	await client.query("BEGIN");
		// 	await client.query(statement.createUser(payload));
		// 	await client.query("COMMIT");
		// } catch (error) {
		// 	await client.query("ROLLBACK");
		// 	throw error;
		// } finally {
		// 	client.release();
		// }
		const text = "INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3,$4) RETURNING *";
		const values = [payload.email, payload.password, payload.first_name, payload.last_name];
		const result = await pool.query<User>(text, values);
		return result.rows[0];
	}

	/**
	 * findUserByEmail
	 */
	public async findUserByEmail(email: string) {
		const result = await pool.query<User>(statement.findUserByEmail(email));
		return result.rows[0];
	}
}
