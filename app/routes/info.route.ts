import { Router } from "express";
import info from "../modules/information/info.controller";
import { infoValidator } from "../middleware/validation";

const router = Router();
router.get("/banner", info.getBannerList);
router.get("/service", infoValidator, info.getService);

export default router;
