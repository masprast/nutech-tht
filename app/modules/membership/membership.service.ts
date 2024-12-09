import jwt from "jsonwebtoken";
import herror from "http-errors";
import { createUser, findUserByEmail, findUserById, updateUserById } from "./membership.repository";
import { decrypt, encrypt } from "../../utils/pwdUtil";
import { User } from "../../models/user.model";
import { env } from "../../config/env";
import { RegisterPayload, LoginPayload } from "./membership.validation";

export async function findUser(email: string) {
	const existeduser = await findUserByEmail(email);
	if (!existeduser) {
		throw new herror.NotFound();
	}
	return userDataWithoutPwd(existeduser);
}

export async function registerUser(payload: RegisterPayload) {
	const existedUser = await findUserByEmail(payload.email);
	if (existedUser) {
		throw new herror.BadRequest("user already exist");
	}
	const newUser = await createUser({ ...payload, password: await encrypt(payload.password) });
	if (!newUser) {
		throw new herror.NotImplemented();
	}
	return userDataWithoutPwd(newUser);
}

export async function loginUser(payload: LoginPayload) {
	const existedUser = await findUserByEmail(payload.email);
	if (!existedUser) {
		throw new herror.NotFound();
	}
	const pwdMatch = await decrypt(payload.password, existedUser.password);
	if (!pwdMatch) {
		throw new herror.Unauthorized("password incorrect");
	}
	return userDataWithoutPwd(existedUser);
}

export async function isLoggedIn(userId?: number) {
	if (!userId) {
		throw new herror.Unauthorized();
	}
	const user = await findUserById(userId);
	if (!user) {
		throw new herror.NotFound();
	}
	return userDataWithoutPwd(user);
}

export async function updateUser(userid: number, data: RegisterPayload) {
	if (!userid) {
		throw new herror.Unauthorized();
	}
	const user = await findUserById(userid);
	if (!user) {
		throw new herror.Unauthorized("user not found");
	}
	const updatedUser = await updateUserById(user.id, data, user);
	return userDataWithoutPwd(updatedUser);
}

export function createToken(userId: number) {
	return jwt.sign({ _id: userId }, env.JWT_SECRET, { expiresIn: 60 * 60 });
}

function userDataWithoutPwd(user: User) {
	const { password: _password, ...dataWithoutPwd } = user;
	return dataWithoutPwd;
}
