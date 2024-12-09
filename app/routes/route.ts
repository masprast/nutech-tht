import { Router } from "express";
import membership from "./membership.route";
import info from "./info.route";
import transaction from "./transaction.route";
import docs from "./docs.route";

const router = Router();
const route = [membership, info, transaction, docs];

route.forEach((r) => {
	router.use("/", r);
});

export default router;
