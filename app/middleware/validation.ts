import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

const validationMiddleware = (schema: AnyZodObject) => async (req: Request, _: Response, next: NextFunction) => {
	try {
		await schema.parseAsync({ body: req.body, query: req.query, params: req.params });
		return next();
	} catch (error) {
		if (error instanceof ZodError) {
			return next();
		}
		return next();
	}
};
