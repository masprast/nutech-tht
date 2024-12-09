import { z } from "zod";

export const transactionCreateScheme = z.object({
	body: z.object({
		invoice_number: z.string().length(15), //INV17082023-001
		service_id: z.number(), //PLN_PRABAYAR
		transaction_type: z.string().length(7), //PLN Prabayar
		total_amount: z.number(), //PAYMENT
		description: z.string(),
		created_on: z.date(),
	}),
});

export type TransactionPayload = z.infer<typeof transactionCreateScheme>["body"];

export const transactionHistoryScheme = z.object({
	body: z.object({
		invoice_number: z.string().length(15),
		transaction_type: z.string(),
		description: z.string(),
		total_amount: z.number(),
		created_on: z.date(),
	}),
});

export type TransactionHistoryPayload = z.infer<typeof transactionHistoryScheme>["body"];

export const balanceScheme = z.object({ body: z.object({ balance: z.number() }) });
export type BalancePayload = z.infer<typeof balanceScheme>["body"];
