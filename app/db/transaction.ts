// import pool from "../config/db";

// export async function transaction(query: Function) {
// 	const client = await pool.connect();
// 	try {
// 		await client.query("BEGIN");
// 		query;
// 		await client.query("COMMIT");
// 	} catch (error) {
// 		await client.query("ROLLBACK");
// 		throw error;
// 	} finally {
// 		client.release();
// 	}
// }
