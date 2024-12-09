import { Router } from "express";
import membership from "./membership.route";
import docs from "./docs.route";

const router = Router();
const route = [membership, docs];

route.forEach((r) => {
	router.use("/", r);
});

export default router;
