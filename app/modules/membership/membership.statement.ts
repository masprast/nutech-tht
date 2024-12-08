import { User } from "../../models/user.model";
import { RegisterPayload } from "./membership.validation";

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

const updateUserById = (id: number, data: RegisterPayload, user: User) => {
	const updateData: RegisterPayload = { email: "", first_name: "", last_name: "", password: "" };
	Object.entries(data).forEach((d) => {
		Object.keys(updateData).forEach((k) => {
			if (!!d[1] && k == d[0]) {
				Object.assign(updateData, { k: d[1] });
			}
		});
	});
	return {
		name: "updateUserById",
		text: "UPDATE users SET (email, first_name, last_name, password) = ($2, $3, $4, $5) WHERE id = $1",
		values: [
			id,
			updateData.email ?? user.email,
			updateData.first_name ?? user.first_name,
			updateData.last_name ?? user.last_name,
			updateData.password ?? user.password,
		],
	};
};

const updateImageProfile = () => {};

export default { createUser, findUserByEmail, findUserById, updateUserById };
