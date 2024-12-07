import { User } from "../../models/user.model";
import { decrypt, encrypt } from "../../utils/pwdUtil";
import { AuthRepository } from "./auth.repository";
import { LoginPayload, RegisterPayload } from "./auth.validation";
import http_error from "http-errors";

export class AuthService {
	private authrepo = new AuthRepository();

	/**
	 * registerUser
	 */
	public async registerUser(payload: RegisterPayload) {
		const existedUser = await this.authrepo.findUserByEmail(payload.email);
		if (existedUser) {
			throw new http_error.BadRequest("user already exist");
		}
		const newUser = await this.authrepo.createUser({ ...payload, password: await encrypt(payload.password) });
		if (!newUser) {
			throw new http_error.BadRequest();
		}
		return this.returnWithoutPwd(newUser);
	}

	/**
	 * loginUser
	 */
	public async loginUser(payload: LoginPayload) {
		const existedUser = await this.authrepo.findUserByEmail(payload.email);
		if (!existedUser) {
			throw new http_error.Unauthorized("user not found");
		}
		const pwdMatch = await decrypt(payload.password, existedUser.password);
		if (!pwdMatch) {
			throw new http_error.Unauthorized("incorrect password");
		}
		return this.returnWithoutPwd(existedUser);
	}

	private returnWithoutPwd(user: User) {
		const { password: _password, ...userWithoutPwd } = user;
		return userWithoutPwd;
	}
}
