export interface Transaction {
	invoice_number: string;
	service_code: string;
	service_name: string;
	transaction_type: string;
	total_amount: number;
	created_on: Date;
}

export interface Balance {
	balance: number;
}

export interface TransactionHist {
	invoice_number: string;
	transaction_type: string;
	description: string;
	total_amount: number;
	created_on: Date;
}
