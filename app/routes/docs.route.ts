import { Router } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import doc from "../utils/swagger";

const swaggerDef = swaggerJSDoc({ swaggerDefinition: doc, apis: ["app/routes/*.route.ts"] });

const router = Router();
router.use("/docs", swaggerUI.serve);
router.get("/docs", swaggerUI.setup(swaggerDef, { explorer: true }));

export default router;
