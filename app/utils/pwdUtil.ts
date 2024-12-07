import b from "bcrypt";

export const encrypt = async (password: string) => {
	const salt = 12;
	const salted = await b.genSalt(salt);
	return await b.hash(password, salted);
};

export const decrypt = async (password: string, hashed: string) => {
	return await b.compare(password, hashed);
};
