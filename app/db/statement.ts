import { LoginPayload, RegisterPayload } from "../modules/auth/auth.validation";

const createUser = (payload: RegisterPayload) => {
	return {
		name: "createUser",
		text: "INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3,$4) RETURNING *",
		values: [payload.email, payload.password, payload.first_name, payload.last_name],
	};
};

const findUserByEmail = (email: string) => {
	return { name: "findUserByEmail", text: "SELECT * FROM users WHERE email = $1", values: [email] };
};

const findUserById = (id: number) => {
	return { name: "findUserById", text: "SELECT * FROM users WHERE id = $1", values: [id] };
};

const createTable = { name: "", text: "", values: [] };

export default { createUser, findUserByEmail, findUserById };
