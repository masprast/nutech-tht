import { TransactionPayload } from "./transaction.validation";

const createTransaction = (payload: TransactionPayload) => {
	return {
		name: "createTransaction",
		text: `INSERT INTO transaction (
            invoice_number,
            service_id,
            transaction_type,
            total_amount,
            description,
            created_on,) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
		values: [
			payload.invoice_number,
			payload.service_id,
			payload.transaction_type,
			payload.total_amount,
			payload.description,
			payload.created_on,
		],
	};
};

const findUsersTransactionHistory = (id: number) => {
	return {
		name: "findUsersTransactionHistory",
		text: `SELECT invoice_number,transaction_type, total_amount, description, created_on
			FROM users_transaction WHERE user_id = $1
			JOIN ON SELECT service_code,service_name FROM services WHERE id = transaction.service_id`,
		values: [id],
	};
};

const findUsersBalance = (id: number) => {
	return { name: "findUserBalance", text: "SELECT balance FROM balance WHERE user_id = $1", values: [id] };
};

const topupBalance = (id: number, amount: number) => {
	return { name: "topupBalance", text: "UPDATE balance SET balance = $1 WHERE user_id = $2", values: [amount, id] };
};

export default { createTransaction, findUsersTransactionHistory, findUsersBalance, topupBalance };
