import { Router } from "express";
import docs from "../modules/documentation/docs.controller";
import membership from "../modules/membership/membership.controller";

const router = Router();
const route = [membership, docs];

route.forEach((r) => {
	router.use("/", r);
});

export default { router, route };
