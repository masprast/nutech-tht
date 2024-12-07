import { RegisterPayload } from "../modules/auth/auth.validation";

export interface User extends RegisterPayload {
	id: number;
	created_at: Date;
}
