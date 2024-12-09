import pool from "../../config/db";
import { Transaction } from "../../models/transaction.model";
import { TransactionPayload } from "./transaction.validation";
import statement from "./transaction.statement";

async function createTransaction(payload: TransactionPayload) {
	const newT = await pool.query<Transaction>(statement.createTransaction(payload));
	return newT.rows[0];
}

export default { createTransaction };
