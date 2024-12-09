import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import herror from "http-errors";

const validationMiddleware = (schema: AnyZodObject) => async (req: Request, _: Response, next: NextFunction) => {
	try {
		await schema.parseAsync({ body: req.body, query: req.query, params: req.params });
		return next();
	} catch (error) {
		_.json(req.body);
		if (error instanceof ZodError) {
			return next(new herror.BadRequest());
		}
		return next(new herror.BadRequest());
	}
};

export default validationMiddleware;
