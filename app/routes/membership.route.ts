import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import validationMiddleware from "../middleware/validation";
import { registerScheme, loginScheme } from "../modules/membership/membership.validation";
import membership from "../modules/membership/membership.controller";

const router = Router();
router.post("/registration", validationMiddleware(registerScheme), membership.register);
router.post("/login", validationMiddleware(loginScheme), membership.login);
router.get("/profile", authMiddleware, membership.isLoggedIn);
// router.put("/profile/update", validationMiddleware(registerScheme), membership.update);
export default router;
