import { Router } from "express";
import transaction from "../modules/transaction/transaction.controller";
import { tokenValidator } from "../middleware/validation";

const router = Router();
router.get("/balance", tokenValidator, transaction.getBalance);
router.post("/topup", tokenValidator, transaction.topup);
router.post("/transaction", tokenValidator, transaction.createTransaction);
router.get("/transaction/history", tokenValidator, transaction.getTransactionHist);
export default router;
