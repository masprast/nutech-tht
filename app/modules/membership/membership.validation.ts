import { z } from "zod";

export const registerScheme = z.object({
	body: z.object({
		email: z.string().email({ message: "invalid email" }),
		password: z.string().min(6, { message: "password length must be 6 at minimum" }),
		first_name: z.string().min(3),
		last_name: z.string(),
	}),
});

export type RegisterPayload = z.infer<typeof registerScheme>["body"];

export const loginScheme = z.object({
	body: z.object({
		email: z.string().email({ message: "invalid email" }),
		password: z.string().min(6, { message: "password length must be 6 at minimum" }),
	}),
});

export type LoginPayload = z.infer<typeof loginScheme>["body"];
