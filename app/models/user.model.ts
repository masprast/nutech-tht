import { RegisterPayload } from "../modules/membership/membership.validation";

export interface User extends RegisterPayload {
	id: number;
	created_at: Date;
}
