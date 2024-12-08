import { Pool } from "pg";
import pool from "../../config/db";
import { User } from "../../models/user.model";
import statement from "./membership.statement";
import { RegisterPayload } from "./membership.validation";

export class MemberRepository {
	private pool: Pool;
	constructor() {
		this.pool = pool;
	}
	/**
	 * createUser
	 */
	public async createUser(payload: RegisterPayload) {
		// const text = "INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3,$4) RETURNING *";
		// const values = [payload.email, payload.password, payload.first_name, payload.last_name];
		const result = await pool.query<User>(statement.createUser(payload));
		return result.rows[0];
	}

	/**
	 * findUserByEmail
	 */
	public async findUserByEmail(email: string) {
		const result = await pool.query<User>(statement.findUserByEmail(email));
		return result.rows[0];
	}

	/**
	 * findUserById
	 */
	public async findUserById(id: number) {
		const result = await pool.query<User>(statement.findUserById(id));
		return result.rows[0];
	}

	/**
	 * updateUserById
	 */
	public async updateUserById(id: number, data: RegisterPayload, user: User) {
		const result = await pool.query<User>(statement.updateUserById(id, data, user));
		return result.rows[0];
	}
}
