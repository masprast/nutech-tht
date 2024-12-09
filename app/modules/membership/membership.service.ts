import jwt from "jsonwebtoken";
import herror from "http-errors";
import { MemberRepository } from "./member.repository";
import { decrypt, encrypt } from "../../utils/pwdUtil";
import { User } from "../../models/user.model";
import { env } from "../../config/env";
import { RegisterPayload, LoginPayload } from "./membership.validation";

export class MembershipService {
	private memberRepo = new MemberRepository();

	/**
	 * registerUser
	 */
	public async registerUser(payload: RegisterPayload) {
		const existedUser = await this.memberRepo.findUserByEmail(payload.email);
		if (existedUser) {
			throw new herror.BadRequest("user already exist");
		}
		const newUser = await this.memberRepo.createUser({ ...payload, password: await encrypt(payload.password) });
		if (!newUser) {
			throw new herror.NotImplemented();
		}
		return this.userDataWithoutPwd(newUser);
	}

	/**
	 * loginUser
	 */
	public async loginUser(payload: LoginPayload) {
		const existedUser = await this.memberRepo.findUserByEmail(payload.email);
		if (!existedUser) {
			throw new herror.NotFound();
		}
		const pwdMatch = await decrypt(payload.password, existedUser.password);
		if (!pwdMatch) {
			throw new herror.Unauthorized("password incorrect");
		}
		return this.userDataWithoutPwd(existedUser);
	}

	/**
	 * isLoggedIn
	 */
	public async isLoggedIn(userId?: number) {
		if (!userId) {
			throw new herror.Unauthorized();
		}
		const user = await this.memberRepo.findUserById(userId);
		if (!user) {
			throw new herror.NotFound();
		}
		return this.userDataWithoutPwd(user);
	}

	/**
	 * updateUser
	 */
	public async updateUserById(userid: number, data: RegisterPayload) {
		if (!userid) {
			throw new herror.Unauthorized();
		}
		const user = await this.memberRepo.findUserById(userid);
		if (!user) {
			throw new herror.Unauthorized("user not found");
		}
		const updatedUser = await this.memberRepo.updateUserById(user.id, data, user);
		return this.userDataWithoutPwd(updatedUser);
	}

	/**
	 * createToken
	 */
	public createToken(userId: number) {
		return jwt.sign({ _id: userId }, env.JWT_SECRET, { expiresIn: 60 * 60 });
	}

	private userDataWithoutPwd(user: User) {
		const { password: _password, ...dataWithoutPwd } = user;
		return dataWithoutPwd;
	}
}
