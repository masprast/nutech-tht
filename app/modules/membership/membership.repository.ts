import pool from "../../config/db";
import { User } from "../../models/user.model";
import statement from "./membership.statement";
import { RegisterPayload } from "./membership.validation";

export async function createUser(payload: RegisterPayload) {
	const result = await pool.query<User>(statement.createUser(payload));
	return result.rows[0];
}
export async function findUserByEmail(email: string) {
	const result = await pool.query<User>(statement.findUserByEmail(email));
	return result.rows[0];
}
export async function findUserById(id: number) {
	const result = await pool.query<User>(statement.findUserById(id));
	return result.rows[0];
}
export async function updateUserById(id: number, data: RegisterPayload, user: User) {
	const result = await pool.query<User>(statement.updateUserById(id, data, user));
	return result.rows[0];
}

export default { createUser, findUserByEmail, findUserById, updateUserById };
