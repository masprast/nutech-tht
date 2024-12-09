import express, { Request, Response } from "express";
import helmet from "helmet";
import { env } from "./config/env";
// import route from "./routes/route";

const app = express();

app.use(helmet());
app.use(express.json());

// app.use("/", route);
app.get("/", (req: Request, res: Response) => {
	res.send("server is runnung");
} );

app.listen(env.PORT, () => {
	console.log(`app is running on ${env.PORT}`);
});

export default app;
