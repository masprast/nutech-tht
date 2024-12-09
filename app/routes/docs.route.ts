import swaggerUI from "swagger-ui-express";
import swaggerDef from "../utils/swagger";
import { Router } from "express";

const router = Router();
router.use("/docs", swaggerUI.serve);
router.get("/docs", swaggerUI.setup(swaggerDef, { explorer: true }));

export default router;
