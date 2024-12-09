import { body, header } from "express-validator";

export const registrasiValidator = [
	body("email", "email must not be empty").not().isEmpty(),
	body("email", "invalid email address").isEmail(),
	body("password", "password must not be empty").not().isEmpty(),
	body("password", "minimum password length is 6 character").isLength({ min: 6 }),
	body("first_name", "first name must not be empty").not().isEmpty(),
	body("last_name", "last name must not be empty").not().isEmpty(),
];

export const loginValidator = [
	body("email", "email must not be empty").not().isEmpty(),
	body("email", "invalid email address").isEmail(),
	body("password", "password must not be empty").not().isEmpty(),
	body("password", "minimum password length is 6 character").isLength({ min: 6 }),
];

export const infoValidator = [body("name", "name must be a string").isString()];

export const tokenValidator = [header("authentication", "invalid token").isJWT()];
