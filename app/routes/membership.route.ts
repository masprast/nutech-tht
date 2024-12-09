import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import validationMiddleware from "../middleware/validation";
import { registerScheme, loginScheme } from "../modules/membership/membership.validation";
import membership from "../modules/membership/membership.controller";

const router = Router();
router.post("/registration", membership.register);
router.post("/login", membership.login);
router.get("/profile", authMiddleware, membership.isLogged);
router.put("/profile/update", membership.update);
export default router;
