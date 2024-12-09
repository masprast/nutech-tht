import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { loginValidator, registrasiValidator } from "../middleware/validation";
import membership from "../modules/membership/membership.controller";

const router = Router();
router.post("/registration", registrasiValidator, membership.register);
router.post("/login", loginValidator, membership.login);
router.get("/profile", authMiddleware, membership.isLogged);
router.put("/profile/update", registrasiValidator, membership.update);
export default router;
